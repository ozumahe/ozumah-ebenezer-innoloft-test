import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { editProduct } from "../../services/product";
import { setProduct } from "../../global/redux/product";
import { SpinnerCircular } from "spinners-react";

type Props = {
  addTechRef: any;
};

const AddTechnologyModal: FC<Props> = ({ addTechRef }: Props) => {
  const dispatch = useDispatch();
  const [isRequest, setIsRequest] = useState<boolean>(false);
  const [technology, setTechnology] = useState<string>("");
  const closeModal = () => {
    addTechRef.current.click();
  };

  const addTechnology = async () => {
    setIsRequest(true);
    try {
      const resData: any = await editProduct({ categories: technology });
      if (resData) {
        dispatch(setProduct(resData));
        setIsRequest(false);
        closeModal();
      }
    } catch (e) {}
  };

  return (
    <div>
      <input type="checkbox" id="add-tech-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box border-primaryColor border-[2px]">
          <div className="">
            <p className="text-[16px] font-semibold text-[#374151]">
              Add Technology
            </p>
          </div>
          <div className="py-4">
            <input
              type="text"
              value={technology}
              onChange={(e) => setTechnology(e.target.value)}
              className="w-full h-[38px] px-[10px] border-[#D1D5DB] border-[1px] outline-none rounded-md mt-[20px] text-[14px] text-[#6B7280] font-normal"
              placeholder="Add Technology"
            />
          </div>
          <div className="flex items-center justify-around">
            <div
              onClick={closeModal}
              className="h-[30px] cursor-pointer rounded-md bg-primaryColor flex justify-center items-center text-[14px] font-normal text-[#FFFFFF] px-[10px]"
            >
              <p>Cancel</p>
            </div>
            <button
              onClick={addTechnology}
              className="relative w-[72px] h-[30px] bg-primaryColor rounded-md flex items-center gap-1 justify-center"
            >
              <img src="/icons/goodIcon.svg" alt="icon" />
              <p className="text-[14px] font-normal text-[#FFF]">Save</p>
              {isRequest ? (
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-appBackgroundColor/70 flex justify-center items-center">
                  <SpinnerCircular color="#272E71" size={30} />
                </div>
              ) : null}
            </button>
          </div>
          <div className="modal-action">
            <label
              htmlFor="add-tech-modal"
              ref={addTechRef}
              className="btn hidden"
            >
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTechnologyModal;
