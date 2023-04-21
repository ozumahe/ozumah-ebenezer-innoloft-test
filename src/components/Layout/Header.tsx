import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="w-full bg-primaryColor z-10">
      <div className="max-w-[1520px] mx-auto h-[54.29px] lg:h-[55px] px-[24px] lg:px-0 flex items-center">
        <img src="/imgs/logo-white.svg" alt="logo" className="h-[60%]" />
      </div>
    </div>
  );
};

export default Header;
