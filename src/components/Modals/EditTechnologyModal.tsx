import { FC } from "react";

type Props = {
  editTechRef: any;
  techToEdit: any;
  setTechToEdit: any;
};

const EditTechnologyModal: FC<Props> = ({
  editTechRef,
  techToEdit,
  setTechToEdit,
}: Props) => {
  const closeModal = () => {
    editTechRef.current.click();
  };

  const handleUpdateTech = () => {};

  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box border-primaryColor border-[2px]">
          <div className="">
            <p className="text-[16px] font-semibold text-[#374151]">
              EDIT Technology
            </p>
          </div>
          <div className="py-4">
            <input
              type="text"
              value={techToEdit.name}
              onChange={(e) =>
                setTechToEdit({ ...techToEdit, name: e.target.value })
              }
              className="w-full h-[38px] px-[10px] border-[#D1D5DB] border-[1px] outline-none rounded-md mt-[20px] text-[14px] text-[#6B7280] font-normal"
              placeholder="Add a youtube or vimeo link"
            />
          </div>
          <div className="flex items-center justify-around">
            <div
              onClick={closeModal}
              className="h-[30px] cursor-pointer rounded-md bg-primaryColor flex justify-center items-center text-[14px] font-normal text-[#FFFFFF] px-[10px]"
            >
              <p>Cancel</p>
            </div>
            <button className="w-[72px] h-[30px] bg-primaryColor rounded-md flex items-center gap-1 justify-center">
              <img src="/icons/goodIcon.svg" alt="icon" />
              <p className="text-[14px] font-normal text-[#FFF]">Save</p>
            </button>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal" ref={editTechRef} className="btn hidden">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTechnologyModal;
