import React from "react";
import assets from "../assets/assets";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen bg-cover bg-center items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl">
      <img src={assets.logo_big} alt="" className="w w-[min(30vw, 250px)]" />

      <form className="border-2 bg-white/8 text-white border-gray-500 p-6flex flex-col gap-6 rounded-lg shadow-lg">
        <h2>Logout</h2>
      </form>
    </div>
  );
};

export default LoginPage;
