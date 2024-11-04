import React from "react";

const Login = () => {
  const isLogin = <false></false>;
  return (
    <>
      {isLogin ? (
        <>
          <div>Thông tin người dùng , nút Logout</div>
        </>
      ) : (
        <>
          <div>Nút đăng nhập, nút đăng kí</div>
        </>
      )}

      {/* {isLogin ? (
        <>
          <div>Avatar</div>
        </>
      ) : (
        <></>
      )} */}

      {isLogin && <div>Avatar</div>}
    </>
  );
};

export default Login;
