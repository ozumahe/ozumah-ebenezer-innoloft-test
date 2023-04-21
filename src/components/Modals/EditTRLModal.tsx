import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../global/store";

type Props = {
  trlmodalRef: any;
};

const EditTRLModal: FC<Props> = ({ trlmodalRef }: Props) => {
  const { trlList } = useSelector((state: RootState) => state.trl);

  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box border-primaryColor border-[2px]">
          <div className="flex justify-between">
            <p className="text-[16px] font-semibold text-[#374151]">
              Select TRL
            </p>
            <div
              onClick={() => trlmodalRef.current.click()}
              className="h-[30px] cursor-pointer rounded-md bg-primaryColor flex justify-center items-center text-[14px] font-normal text-[#FFFFFF] px-[10px]"
            >
              <p>Cancel</p>
            </div>
          </div>
          <div className="py-4">
            {trlList.data.map(({ id, name }) => (
              <div
                key={id}
                onClick={() => {}}
                className="min-h-[50px] mt-[10px] cursor-pointer lg:mt-[20px] bg-[#E5E7EB] rounded-[8px] text-[14px] font-normal text-[#6B7280] py-[5px] px-[14px]"
              >
                {name}
              </div>
            ))}
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal" ref={trlmodalRef} className="btn hidden">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTRLModal;
