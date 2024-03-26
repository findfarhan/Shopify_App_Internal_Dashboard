import { FormCheck, FormInput, FormLabel } from '../../base-components/Form';
import Tippy from '../../base-components/Tippy';
import users from '../../fakers/users';
import Button from '../../base-components/Button';
import Alert from '../../base-components/Alert';
import Lucide from '../../base-components/Lucide';
import clsx from 'clsx';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import axios from 'axios';
import { loginSchemas } from '../../schemas/index'
// import ThemeSwitcher from "../../components/ThemeSwitcher";
import Cookies from "js-cookie"

let initialValues = {
  email: '',
  password: ''

}
function Main() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  let [Error, setError] = useState('')
  let [spinner, setspinner] = useState(false)

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();

  //   const axios = require('axios');
  //   let data = JSON.stringify({
  //     email: email,
  //     password: password,
  //   });

  //   let config = {
  //     method: 'post',
  //     maxBodyLength: Infinity,
  //     url: process.env.API_BASE_URL + '/auth/login',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     data: data,
  //   };

  //   axios
  //     .request(config)
  //     .then((response: any) => {
  //       localStorage.setItem('IsloggedIn', 'true');
  //       localStorage.setItem('token', response.data.data.results.token);
  //       router.push('/');
  //       setShowError(false);
  //     })
  //     .catch((error: any) => {
  //       console.log('error', error);
  //       setShowError(true);
  //     });
  // };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldTouched, resetForm } = useFormik({
    initialValues: initialValues,
    // validationSchema: loginSchemas,
    // validateOnBlur: false, // Disable onBlur validation

    onSubmit: async (value, action) => {
      let userEmail = value.email.toLowerCase();

      let userPassword = value.password;

      console.log(userEmail, userPassword)
      setspinner(true)

     
      try {
        const payload = {

          "email": userEmail,
          "password": userPassword
        };

        const response = await axios.post(`${process.env.API_BASE_URL}/auth/login`, payload);

        const token = response.data.data.results.token;
        const user = response.data.data.results.user;

        
        Cookies.set('token', token);
        router.push('/');
        setspinner(false)
        action.resetForm();


      } catch (error) {
        setError(error.response.data.message)
        console.log(error)
        setspinner(false)
      }

    }
  })

  return (
    <>
      <div className='container grid lg:h-screen grid-cols-12 lg:max-w-[1550px] 2xl:max-w-[1750px] py-10 px-5 sm:py-14 sm:px-10 md:px-36 lg:py-0 lg:pl-14 lg:pr-12 xl:px-24'>
        <div
          className={clsx([
            'relative z-50 h-full col-span-12 p-7 sm:p-14 bg-white rounded-2xl lg:bg-transparent lg:pr-10 lg:col-span-5 xl:pr-24 2xl:col-span-4 lg:p-0',
            "before:content-[''] before:absolute before:inset-0 before:-mb-3.5 before:bg-white/40 before:rounded-2xl before:mx-5",
          ])}
        >
          {showError ? showError : ''}
          <div className='relative z-10 flex flex-col justify-center w-full h-full py-2 lg:py-32'>
            <div className='rounded-[0.8rem] w-[55px] h-[55px] border border-primary/30 flex items-center justify-center'>
              <div className='relative flex items-center justify-center w-[50px] rounded-[0.6rem] h-[50px] bg-gradient-to-b from-theme-1/90 to-theme-2/90 bg-white'>
                <div className='w-[26px] h-[26px] relative -rotate-45 [&_div]:bg-white'>
                  <div className='absolute w-[20%] left-0 inset-y-0 my-auto rounded-full opacity-50 h-[75%]'></div>
                  <div className='absolute w-[20%] inset-0 m-auto h-[120%] rounded-full'></div>
                  <div className='absolute w-[20%] right-0 inset-y-0 my-auto rounded-full opacity-50 h-[75%]'></div>
                </div>
              </div>
            </div>
            <div className='mt-10'>
              <div className='text-2xl font-medium'>Sign In</div>
              <div className='mt-2.5 text-slate-600'>
                Don't have an account?{' '}
                <Link className='font-medium text-primary' href='signup'>
                  Sign Up
                </Link>
              </div>
              {/* <Alert
                variant='outline-primary'
                className='flex items-center px-4 py-3 my-7 bg-primary/5 border-primary/20 rounded-[0.6rem] leading-[1.7]'
              >
                {({ dismiss }) => (
                  <>
                    <div className=''>
                      <Lucide
                        icon='Lightbulb'
                        className='stroke-[0.8] w-7 h-7 mr-2 fill-primary/10'
                      />
                    </div>
                    <div className='ml-1 mr-8'>
                      Step into the thrill:{' '}
                      <span className='font-medium'>Sign In</span> and chase
                      your <span className='font-medium'>lucky streak!</span>
                    </div>
                    <Alert.DismissButton
                      type='button'
                      className='btn-close text-primary'
                      onClick={dismiss}
                      aria-label='Close'
                    >
                      <Lucide icon='X' className='w-5 h-5' />
                    </Alert.DismissButton>
                  </>
                )}
              </Alert> */}
              <div className='mt-6'>
              {Error && <p className="text-red-500 flex justify-center items-center">{Error}</p>}
                <form onSubmit={handleSubmit}>
                  <FormLabel>Email*</FormLabel>
                  <FormInput
                    type='email'
                    className='block px-4 py-3.5 rounded-[0.6rem] border-slate-300/80'
                    placeholder={users.fakeUsers()[0].email}
                    name='email'
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (<p className="text-red-500" >{errors.email} </p>) : null}


                  <FormLabel className='mt-4'>Password*</FormLabel>
                  <FormInput
                    type='password'
                    className='block px-4 py-3.5 rounded-[0.6rem] border-slate-300/80'
                    placeholder='************'
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    onBlur={handleBlur}
                  />

                  {errors.password && touched.password ? (<p className="text-red-500" >{errors.password} </p>) : null}
                  {/* <div className='flex mt-4 text-xs text-slate-500 sm:text-sm'>
                  <div className='flex items-center mr-auto'>
                    <FormCheck.Input
                      id='remember-me'
                      type='checkbox'
                      className='mr-2.5 border'
                    />
                    <label
                      className='cursor-pointer select-none'
                      htmlFor='remember-me'
                    >
                      Remember me
                    </label>
                  </div>
                  <a href=''>Forgot Password?</a>
                </div> */}
                  <div className='mt-5 text-center xl:mt-8 xl:text-left'>
                    {!spinner ? <Button
                      type='submit'
                      variant="primary"
                      rounded
                      className="bg-gradient-to-r from-theme-1/70 to-theme-2/70 w-full py-3.5 xl:mr-3"
                    >
                      Sign In
                    </Button>

                      :

                      <Button
                        type='button'
                        variant="primary"
                        rounded
                        className="bg-gradient-to-r from-theme-1/70 to-theme-2/70 w-full py-3.5 xl:mr-3"
                      >
                        <div role="status">
                          <svg aria-hidden="true" className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                          </svg>
                          <span className="sr-only">Loading...</span>
                        </div>
                      </Button>}

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='fixed container grid w-screen inset-0 h-screen grid-cols-12 lg:max-w-[1550px] 2xl:max-w-[1750px] pl-14 pr-12 xl:px-24'>
        <div
          className={clsx([
            'relative h-screen col-span-12 lg:col-span-5 2xl:col-span-4 z-20',
            "after:bg-white after:hidden after:lg:block after:content-[''] after:absolute after:right-0 after:inset-y-0 after:bg-gradient-to-b after:from-white after:to-slate-100/80 after:w-[800%] after:rounded-[0_1.2rem_1.2rem_0/0_1.7rem_1.7rem_0]",
            "before:content-[''] before:hidden before:lg:block before:absolute before:right-0 before:inset-y-0 before:my-6 before:bg-gradient-to-b before:from-white/10 before:to-slate-50/10 before:bg-white/50 before:w-[800%] before:-mr-4 before:rounded-[0_1.2rem_1.2rem_0/0_1.7rem_1.7rem_0]",
          ])}
        ></div>
        <div
          className={clsx([
            'h-full col-span-7 2xl:col-span-8 lg:relative',
            "before:content-[''] before:absolute before:lg:-ml-10 before:left-0 before:inset-y-0 before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 before:w-screen before:lg:w-[800%]",
            "after:content-[''] after:absolute after:inset-y-0 after:left-0 after:w-screen after:lg:w-[800%] after:bg-texture-white after:bg-fixed after:bg-center after:lg:bg-[25rem_-25rem] after:bg-no-repeat",
          ])}
        >
          <div className='sticky top-0 z-10 flex-col justify-center hidden h-screen ml-16 lg:flex xl:ml-28 2xl:ml-36'>
            <div className='leading-[1.4] text-[2.6rem] xl:text-5xl font-medium xl:leading-[1.2] text-white'>
              Welcome to  <br /> Shopify App Internal Dashboard!
            </div>
            <div className='mt-5 text-base leading-relaxed xl:text-lg text-white/70'>
              Explore the realm of competitive excitement, where every ticket is
              a potential win. Join our community now to experience the thrill
              of bidding, winning, and triumphing together.
            </div>
          </div>
        </div>
      </div>
      {/* <ThemeSwitcher /> */}
    </>
  );
}

export default Main;
