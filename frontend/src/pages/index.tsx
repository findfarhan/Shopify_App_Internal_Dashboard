import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Competition from '@/pages/competitions';
import SideBar from '@/components/SideBar/SideBar';
import Button from '../base-components/Button';
// import Echo from '../themes/Echo';
import Cookies from 'js-cookie';

export default function Home() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  let LogoutHandler = () => {
    Cookies.remove('token');
    router.push('/login');
  }

  // useEffect(() => {
  //   if (
  //     !(
  //       localStorage.getItem('IsloggedIn') &&
  //       localStorage.getItem('IsloggedIn') == 'true'
  //     )
  //   )
  //     router.push('/login');
  // }, []);

  return (
    <>
      {/* <div className={open ? 'toggleclass' : ''}> */}
      {/* Header */}
      {/* <SideBar logout={logout} open={open} setOpen={setOpen} /> */}
      {/* Body */}
      {/* <Competition /> */}
      <div className="flex justify-end">
        <Button variant="danger"
          rounded
          onClick={LogoutHandler}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-4xl text-center">Under construction</h1>
      </div>


    </>
    // </div>
  );
}
