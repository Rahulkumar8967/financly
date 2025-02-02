// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import userSvg from "../../assets/user.svg";

function Header() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const logout = () => {
    auth.signOut();
    navigate("/");
  };

  useEffect(() => {
    navigate(user ? "/dashboard" : "/");
  }, [user, navigate]);

  return (
    <header className="sticky top-0 w-full bg-blue-500 shadow-md py-3 px-6 flex items-center justify-between">
      <h1 className="text-white text-lg font-semibold">Financly</h1>
      {user && (
        <button
          onClick={logout}
          className="flex items-center text-white text-base font-medium hover:text-gray-200 transition duration-300 cursor-pointer"
        >
          <img
            src={user.photoURL || userSvg}
            alt="User"
            className="w-8 h-8 rounded-full mr-3"
          />
          Logout
        </button>
      )}
    </header>
  );
}

export default Header;
