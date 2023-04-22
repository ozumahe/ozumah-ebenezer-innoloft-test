import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../global/store";
import { editProduct } from "../../services/product";
import { setProduct } from "../../global/redux/product";
import { SpinnerCircularFixed } from "spinners-react";

type Props = {
  trl: { name: string };
};

const EditTRLDropdown: FC<Props> = ({ trl }: Props) => {
  const { trlList } = useSelector((state: RootState) => state.trl);
  const [currentTrl, setcurrentTrl] = useState<string>("");
  const [isRequest, setIsRequest] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleSelect = async (data: { id: number; name: string }) => {
    setIsRequest(true);
    try {
      setcurrentTrl(data.name);
      const resData: any = await editProduct({ trl: data });
      if (resData) {
        setIsRequest(false);
        dispatch(setProduct(resData));
      }
    } catch (e) {}
  };

  useEffect(() => {
    setcurrentTrl(trl.name);
  }, [trl.name]);

  return (
    <>
      <div className="dropdown dropdown-top w-full">
        <label tabIndex={0} className="w-full">
          <div className="relative mt-[10px] flex min-h-[50px] ml-[35px] cursor-pointer lg:mt-[20px] bg-primaryColor rounded-[8px] text-[14px] font-normal text-[#FFF] py-[5px] px-[14px]">
            <p>{currentTrl}</p>
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
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content border-primaryColor border-[2px] pb-[20px] w-full p-2 shadow bg-base-100 rounded-box"
        >
          {trlList.data.map(({ id, name }) => (
            <div
              key={id}
              onClick={() => handleSelect({ id, name })}
              className="min-h-[50px] my-[10px] hover:bg-primaryColor/5 cursor-pointer lg:mt-[20px] bg-[#E5E7EB] rounded-[8px] text-[14px] font-normal text-[#6B7280] py-[5px] px-[14px]"
            >
              {name}
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default EditTRLDropdown;
