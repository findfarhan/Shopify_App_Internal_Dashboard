import * as Yup from 'yup';




 

    

export const signUpSchemas = Yup.object({
  firstname: Yup.string().min(2).max(10).required('Please enter  your first name'),
  lastname: Yup.string().min(2).max(10).required('Please enter  your last name'),
  dob: Yup.string().required('Please select  your date of birth'),
  phoneNo: Yup.string().min(11).max(11).required('Please enter  your Phone No.'),
  email: Yup.string().email().required('Please enter  your email'),
  password: Yup.string()
    .required('Please enter your password')
    .test('min-length', 'Password must be at least 8 characters', (value) =>
      value ? value.length >= 8 : true
    ),
})



export const loginSchemas = Yup.object({
  email: Yup.string().email().required('Please enter your email'),
  password: Yup.string()
    .required('Please enter your password')
    .test('min-length', 'Password must be at least 8 characters', (value) =>
      value ? value.length >= 8 : true
    ),
});

// export const ResetPasswordSchemas = Yup.object({
//   // email:Yup.string().email().required('Please enter  your email'),
//   Newpassword: Yup.string().min(8).required('Please enter  your password'),
//   Confirmpassword: Yup.string().min(8).required().oneOf([Yup.ref("Newpassword"), null], "Password and Confirm Password must match ")
// })


// export const imageUploadSchemas = Yup.object().shape({
//   image: Yup.mixed()
//     .test('fileSize', 'File size must be less than 200MB', (value) => {
//       if (!value) return true; // Allow empty field
//       return value.size <= 200 * 1024 * 1024; // Convert MB to bytes
//     })
//     .test('imageDimensions', 'Image dimensions must be within 2800px', (value) => {
//       if (!value) return true; // Allow empty field
//       const img = new Image();
//       img.src = window.URL.createObjectURL(value);
//       return img.width <= 2800 && img.height <= 2800;
//     })
//     .test('imageFormat', 'Only JPG format allowed', (value) => {
//       if (!value) return true; // Allow empty field
//       return value.type === 'image/jpeg';
//     }),
// });