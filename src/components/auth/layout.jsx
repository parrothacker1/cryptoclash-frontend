import { Outlet } from "react-router-dom";

function AuthLayout() {
    return (
        <div className="flex min-h-screen w-full transition-opacity duration-1000 font-[Inter]">
            {/* Left Side - Welcome Section */}
           

            {/* Right Side - Login/Register Forms */}
            <Outlet />
            
        </div>
    );
}

export default AuthLayout;