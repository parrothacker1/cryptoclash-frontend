import { Outlet } from 'react-router-dom';
import LoginPage from './login';

const AuthLayout = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      {<LoginPage></LoginPage>}
      
      <Outlet />
    </div>
  );
};

export default AuthLayout;
