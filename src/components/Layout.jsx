import React from "react";

const Layout = (props) => {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto bg-gray-200">
      {props.children}
    </div>
  );
};

export default Layout;
