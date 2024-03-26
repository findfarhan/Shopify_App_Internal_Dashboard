// import { useRouter } from 'next/router';
// import { Text, TextInput, Button, Card, Callout } from '@tremor/react';
// import { useState } from 'react';

// export default function Home() {
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const [showError, setShowError] = useState(false);
//   const handleSubmit = (e: any) => {
//     e.preventDefault();

//     console.log(process.env.API_BASE_URL);

//     const axios = require('axios');
//     let data = JSON.stringify({
//       email: email,
//       password: password,
//     });

//     let config = {
//       method: 'post',
//       maxBodyLength: Infinity,
//       url: process.env.API_BASE_URL + '/auth/login',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       data: data,
//     };

//     axios
//       .request(config)
//       .then((response: any) => {
//         localStorage.setItem('IsloggedIn', 'true');
//         localStorage.setItem('token', response.data.data.results.token);
//         router.push('/');
//         setShowError(false);
//       })
//       .catch((error: any) => {
//         setShowError(true);
//       });
//   };

//   return (
//     <Card className='p-4'>
//       {showError ? (
//         <Callout title="User Doesn't Exist" color='red'>
//           Check your email & password and provide the correct details.
//         </Callout>
//       ) : (
//         ''
//       )}
//       <div className='h-screen flex justify-center items-center'>
//         <div className='bg-white shadow-md px-8 py-6 w-full max-w-md'>
//           <h1 className='text-2xl font-semibold mb-4'>Login</h1>
//           <form onSubmit={handleSubmit}>
//             <div className='mb-4'>
//               <Text>Email:</Text>
//               <TextInput
//                 type='email'
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className='w-full'
//               />
//             </div>
//             <div className='mb-4'>
//               <Text>Password:</Text>
//               <TextInput
//                 type='password'
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className='w-full'
//               />
//             </div>
//             <div className='flex items-center mb-4'>
//               <input
//                 type='checkbox'
//                 id='remember-me'
//                 checked={rememberMe}
//                 onChange={(e) => setRememberMe(e.target.checked)}
//                 className='mr-2'
//               />
//               <label htmlFor='remember-me'>Remember Me</label>
//             </div>
//             <Button type='submit' variant='primary' className='w-full'>
//               Login
//             </Button>
//           </form>
//         </div>
//       </div>
//     </Card>
//   );
// }
