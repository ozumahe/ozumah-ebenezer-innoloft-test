import { FC, useRef, useState } from "react";
import { ProductType } from "../../../utils/types";
import { EditTRLDropdown } from "../../Dropdown";
import {
  AddBuisnessModelModal,
  AddTechnologyModal,
  EditTechnologyModal,
} from "../../Modals";
import EditBusinessModelsModal from "../../Modals/EditBusinessModelsModal";

type Props = {
  data: ProductType;
};

const DetailsSection: FC<Props> = ({
  data: { categories, businessModels, trl, investmentEffort },
}: Props) => {
  const editTechRef: any = useRef();
  const bmRef: any = useRef();
  const addTechRef: any = useRef();
  const addBmRef: any = useRef();

  const [modelToEdit, setModelToEdit] = useState<{ id: number; name: string }>({
    id: 0,
    name: "",
  });

  const [techToEdit, setTechToEdit] = useState<{ id: number; name: string }>({
    id: 0,
    name: "",
  });
  const handleEditTechnology = ({ id, name }: { id: number; name: string }) => {
    editTechRef.current.click();
    setTechToEdit({ id, name });
  };

  const handleEditBuisnessModell = ({
    id,
    name,
  }: {
    id: number;
    name: string;
  }) => {
    bmRef.current.click();
    setModelToEdit({ id, name });
  };
  return (
    <>
      <div className="w-full bg-[#FFF] rounded-[6px] border-[1px] border-[#E5E7EB] mt-[30px] py-[30px] px-[10px] lg:px-[20px]">
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
                  <div
                    onClick={() => handleEditTechnology({ id, name })}
                    className="p-[8px] mx-[10px] cursor-pointer border-primaryColor border-[2px] rounded-full"
                  >
                    <img src="/icons/edit-icon.svg" alt="icon" />
                  </div>
                </div>
              ))}
              <div
                onClick={() => addTechRef.current.click()}
                className="bg-primaryColor cursor-pointer rounded-[20px] text-[16px] font-normal flex justify-center items-center text-[#FFF] py-[5px] px-[14px]"
              >
                {"Add"}
                <div className="w-[30px] h-[30px] flex justify-center items-center ml-[10px] cursor-pointer border-[#FFF] border-[2px] rounded-full">
                  +
                </div>
              </div>
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
                  <div
                    onClick={() => handleEditBuisnessModell({ id, name })}
                    className="p-[8px] mx-[10px] cursor-pointer border-primaryColor border-[2px] rounded-full"
                  >
                    <img src="/icons/edit-icon.svg" alt="icon" />
                  </div>
                </div>
              ))}
              <div
                onClick={() => addBmRef.current.click()}
                className="bg-primaryColor cursor-pointer rounded-[20px] text-[16px] font-normal flex justify-center items-center text-[#FFF] py-[5px] px-[14px]"
              >
                {"Add"}
                <div className="w-[30px] h-[30px] flex justify-center items-center ml-[10px] cursor-pointer border-[#FFF] border-[2px] rounded-full">
                  +
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <img src="/icons/inno_clock.svg" alt="icon" />
              <p className="text-[16px] text-[#6B7280] font-normal">TRL</p>
            </div>

            <EditTRLDropdown trl={trl} />
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
      <EditTechnologyModal
        editTechRef={editTechRef}
        techToEdit={techToEdit}
        setTechToEdit={setTechToEdit}
      />
      <EditBusinessModelsModal
        editRef={bmRef}
        modelToEdit={modelToEdit}
        setModelToEdit={setModelToEdit}
      />
      <AddTechnologyModal addTechRef={addTechRef} />
      <AddBuisnessModelModal addBmRef={addBmRef} />
    </>
  );
};

export default DetailsSection;
