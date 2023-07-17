import React from 'react';

const LoginInfo = ({ user }) => {
  return (
    <div className="bg-white rounded p-8 text-slate-900 sm:w-80 md:w-96 lg:w-[30%]">
      <p className="text-lg font-bold">{user?.name}</p>
      <p className="text-sm">{user?.email}</p>  
    </div>
  );
};

export default LoginInfo;