import { FC } from "react";

const BreadCrumb: FC = () => {
  return (
    <div className="h-[60px] flex  justify-between items-center">
      <div className="h-full flex gap-[20px] items-center">
        <p className="text-[14px] font-semibold text-[#6B7280]">Offer Title</p>
      </div>
      <a href="/product/edit">
        <div className="h-[30px] cursor-pointer rounded-md bg-primaryColor flex justify-center items-center text-[14px] px-[20px] font-normal text-[#FFFFFF]">
          View Offer
        </div>
      </a>
    </div>
  );
};

export default BreadCrumb;
