import React, { FC, useRef, useState } from "react";
import { ProductType } from "../../../utils/types";
import { EditTRLModal } from "../../Modals";
import { SpinnerCircularFixed } from "spinners-react";

type Props = {
  data: ProductType;
};

const DetailsSection: FC<Props> = ({
  data: { categories, businessModels, trl, investmentEffort },
}: Props) => {
  const trlmodalRef: any = useRef();
  const [isRequest, setIsRequest] = useState<boolean>(false);

  return (
    <>
      <div className="w-full bg-[#FFF] rounded-[6px] border-[1px] border-[#E5E7EB] overflow-hidden mt-[30px] py-[30px] px-[10px] lg:px-[20px]">
        <p className="text-[16px] font-semibold text-[#374151]">
          Offer details
        </p>
        <div className="grid lg:grid-cols-2 gap-[20px] mt-[30px]">
          <div>
            <div className="flex items-center gap-2">
              <img src="/icons/inno_dev-4.svg" alt="icon" />
              <p className="text-[16px] text-[#6B7280] font-normal">
                Technology
              </p>
            </div>
            <div className="flex items-center flex-wrap mt-[10px] lg:mt-[20px] ml-[35px] gap-2">
              {categories.map(({ id, name }) => (
                <div
                  key={id}
                  className="bg-[#E5E7EB] rounded-[20px] text-[14px] font-normal flex justify-center items-center text-[#6B7280] py-[5px] px-[14px]"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <img src="/icons/chess.svg" alt="icon" />
              <p className="text-[16px] text-[#6B7280] font-normal">
                Business Model
              </p>
            </div>
            <div className="flex items-center flex-wrap mt-[10px] lg:mt-[20px] ml-[35px] gap-2">
              {businessModels.map(({ id, name }) => (
                <div
                  key={id}
                  className="bg-[#E5E7EB] rounded-[20px] text-[14px] font-normal flex justify-center items-center text-[#6B7280] py-[5px] px-[14px]"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <img src="/icons/inno_clock.svg" alt="icon" />
              <p className="text-[16px] text-[#6B7280] font-normal">TRL</p>
            </div>

            <div
              onClick={() => trlmodalRef.current.click()}
              className="relative mt-[10px] ml-[35px] cursor-pointer lg:mt-[20px] bg-[#E5E7EB] rounded-[8px] text-[14px] font-normal flex justify-center items-center text-[#6B7280] py-[5px] px-[14px]"
            >
              {trl.name}
              {isRequest ? (
                <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-[#FFF]/50">
                  <SpinnerCircularFixed
                    color="#E4B302"
                    secondaryColor="#272E71"
                    size={40}
                    thickness={120}
                  />
                </div>
              ) : null}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <img src="/icons/inno_investor.svg" alt="icon" />
              <p className="text-[16px] text-[#6B7280] font-normal">Costs</p>
            </div>

            <div className="ml-[35px] mt-[10px] lg:mt-[20px] w-fit bg-[#E5E7EB] rounded-[20px] text-[14px] font-normal flex justify-center items-center text-[#6B7280] py-[5px] px-[14px]">
              {investmentEffort}
            </div>
          </div>
        </div>
      </div>
      <EditTRLModal trlmodalRef={trlmodalRef} setIsRequest={setIsRequest} />
    </>
  );
};

export default DetailsSection;
