import { FC } from "react";
import { ProductType } from "../../../utils/types";

type Props = {
  data: ProductType;
};

const MainSection: FC<Props> = ({
  data: { type, picture, description, company, user, name },
}: Props) => {
  return (
    <div className="lg:flex w-full min-h-[520px] bg-[#FFF] rounded-[6px] border-[1px] border-[#E5E7EB] overflow-hidden">
      {/* LEFT  */}
      <div className="w-full lg:w-[70%] border-r-[1px] border-[#E5E7EB]">
        <div className="min-h-[180px] lg:h-[300px] bg-[#000] relative">
          <div className="absolute min-w-[112px] h-[40px] bg-[#fff] rounded-br-[6px] flex z-[1]">
            <div className="w-[40px] h-[40px] bg-[#272E71] rounded-tl-[6px] rounded-br-[6px] flex justify-center items-center">
              <img src="/icons/cert-Icon.svg" alt="icon" />
            </div>
            <div className="flex-1 px-[20px] flex justify-center items-center">
              <p className="text-[16px] font-semibold text-[#374151]">
                {type.name}
              </p>
            </div>
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <img
              src={picture}
              alt="product"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="p-[20px]">
          <p className="text-[16px] font-semibold text-[#374151]">{name}</p>
          <p className="text-[14px] font-normal text-[#6B7280] leading-[24px] mt-[15px]">
            {description}
          </p>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-[30%] p-[20px]">
        <p className="font-semibold text-[16px] text-[#374151]">Offered By</p>

        <img src={company.logo} alt="logo" className="mt-[20px] w-[200px]" />
        <div className="flex items-center gap-3 mt-[30px]">
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
        <div className="flex gap-3 mt-[40px] text-[#6B7280]">
          <img src="/icons/inno_location.svg" alt="inno_location" />
          <p className="text-[14px] font-normal">
            {company.address.street} {company.address.house}, <br />
            {company.address.zipCode} {company.address.city.name}{" "}
            {company.address.country.name}
          </p>
        </div>
        <div className="mt-[40px]">
          <img src="/imgs/map.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
