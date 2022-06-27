import React from "react";

const Layout = (props) => {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto">
      <div className="h-full w-full bg-neutral-200 dark:bg-black">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
