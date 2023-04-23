import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../global/store";
import { getAppConfiguration } from "../../global/redux/appConfiguration";

const Header: FC = () => {
  const dispatch = useDispatch();
  const { config } = useSelector((state: RootState) => state.appConfiguration);

  useEffect(() => {
    dispatch(getAppConfiguration());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`w-full z-10 bg-[${config.mainColor || "#272e71"}]`}>
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
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 border-[2px] border-primaryColor"
          >
            <li>
              <a href="/" className="focus:bg-primaryColor/10">
                <div className="flex gap-[20px] cursor-pointer">
                  <img src="/icons/home.svg" alt="icon" />
                  <p className="flex items-center text-[14px] text-[#6B7280] font-semibold">
                    Main
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="/product" className="focus:bg-primaryColor/10">
                <div className="flex gap-[20px] cursor-pointer">
                  <img src="/icons/home.svg" alt="icon" />
                  <p className="flex items-center text-[14px] text-[#6B7280] font-semibold">
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
