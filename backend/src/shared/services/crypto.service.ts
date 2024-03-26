import { BadRequestException, Injectable } from '@nestjs/common';
const CryptoJS = require("crypto-js");
import * as bcrypt from 'bcryptjs';

@Injectable()
export class CryptoService {
    
    async hashpassword(password:string) {
        try{
            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);
            const hashedPassword = await bcrypt.hash(password, salt);
            return hashedPassword;
        }
        catch(err){
            throw new BadRequestException('Something went wrong while hashing the password');
        }
    }

    //Generate Encrypted Link
    async encrypt(text:string, secretKey: string) {
        try{
            const timestamp = Date.now() + 60 * 60 * 1000; // 1 hour expiration time
            const encryptedText = CryptoJS.AES.encrypt(JSON.stringify({ userId: text, timestamp }), secretKey).toString();
            return {encryptedText, timestamp};
        }
        catch(err){
            throw new BadRequestException('Something went wrong while encryption');
        }
    }

    async decrypt(encryptedText:string, secretKey: string) {
        try{
            const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
            const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
            const data = JSON.parse(decryptedText);
      
            // Check if the token has expired
            if (Date.now() > data.timestamp) {
                throw new Error('Reset Password Link has been expired!');
            }
            return data;
        }
        catch(err){
            throw new BadRequestException('Something went wrong while decryption');
        }
    }
}
