import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="w-full bg-primaryColor z-10">
      <div className="max-w-[1520px] mx-auto h-[54.29px] lg:h-[55px] px-[24px] lg:px-0 flex justify-between items-center">
        <img src="/imgs/logo-white.svg" alt="logo" className="h-[60%]" />

        <div className="lg:hidden dropdown dropdown-end">
          <label tabIndex={0}>
            <div className="lg:hidden grid gap-1">
              <div className="w-[40px] h-[4px] bg-appBackgroundColor rounded-[5px]" />
              <div className="w-[40px] h-[4px] bg-appBackgroundColor rounded-[5px]" />
              <div className="w-[40px] h-[4px] bg-appBackgroundColor rounded-[5px]" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/" className="focus:bg-primaryColor">
                <div className="flex gap-[20px] cursor-pointer">
                  <img src="/icons/home.svg" alt="icon" />
                  <p className="flex items-center text-[14px] text-[#6B7280] font-normal">
                    Main
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="/product" className="focus:bg-primaryColor">
                <div className="flex gap-[20px] cursor-pointer">
                  <img src="/icons/home.svg" alt="icon" />
                  <p className="flex items-center text-[14px] text-[#6B7280] font-normal">
                    Product
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
