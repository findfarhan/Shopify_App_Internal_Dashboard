//config file

require('dotenv').config('../../');

export default {
  jwt_secret: process.env.JWT_SECRET,
  PORT: process.env.PORT,
  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_NAME: process.env.DATABASE_NAME,
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_PORT: process.env.DATABASE_PORT,
  AWS_REGION: process.env.AWS_REGION,
  Bucket: process.env.Bucket,
  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
  AWS_SECERT_ACCESS_KEY: process.env.AWS_SECERT_ACCESS_KEY,
  Base_Url: process.env.Base_Url
};
