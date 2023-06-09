import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../global/store";

const Navigation: FC = () => {
  const {
    product: {
      data: { user, company },
    },
  } = useSelector((state: RootState) => state.product);

  return (
    <div className="hidden lg:block absolute left-0 top-0 w-[300px] p-[20px]">
      {user.profilePicture ? (
        <div className="flex items-center gap-3">
          <img
            src={user.profilePicture}
            alt={user.firstName}
            className="w-[60px] h-[60px] rounded-full object-cover"
          />
          <div>
            <p className="text-[14px] font-semibold text-[#6B7280]">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-[14px] font-normal text-[#6B7280] mt-[5px]">
              {company.name}
            </p>
          </div>
        </div>
      ) : null}
      <div className="mt-[10px]">
        <a href="/">
          <div className="py-[30px] px-[10px] rounded-[10px] flex gap-[20px] cursor-pointer hover:bg-primaryColor/10">
            <img src="/icons/home.svg" alt="icon" />
            <p className="flex items-center text-[14px] text-[#6B7280] font-semibold">
              Main
            </p>
          </div>
        </a>
        <a href="/product">
          <div className="py-[30px] px-[10px] rounded-[10px] flex gap-[20px] cursor-pointer hover:bg-primaryColor/10">
            <img src="/icons/home.svg" alt="icon" />
            <p className="flex items-center text-[14px] text-[#6B7280] font-semibold">
              Product
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navigation;
