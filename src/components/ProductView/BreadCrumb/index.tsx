import { FC } from "react";

type Props = {
  name: string;
};

const BreadCrumb: FC<Props> = ({ name }: Props) => {
  return (
    <div className="h-[60px] flex  justify-between items-center">
      <div className="h-full flex gap-[20px] items-center">
        <img src="/icons/home.svg" alt="icon" />
        <p className="text-[14px] font-normal text-[#6B7280]">Offers</p>
        <img src="/icons/arrow-right.svg" alt="icon" />
        <p className="text-[14px] font-semibold text-[#6B7280]">{name}</p>
      </div>
      <a href="/product/edit">
        <div className="w-[45px] h-[30px] cursor-pointer rounded-md bg-primaryColor flex justify-center items-center text-[14px] font-normal text-[#FFFFFF]">
          Edit
        </div>
      </a>
    </div>
  );
};

export default BreadCrumb;
