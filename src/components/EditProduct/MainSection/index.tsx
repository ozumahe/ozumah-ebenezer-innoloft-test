import { FC, useEffect, useState } from "react";
import { ProductType } from "../../../utils/types";
import { debounce } from "../../../utils/helpers";
import { editProduct } from "../../../services/product";
import { useDispatch } from "react-redux";
import { setProduct } from "../../../global/redux/product";
import { Editor } from "react-draft-wysiwyg";
import { ContentState, EditorState, convertFromHTML } from "draft-js";
import { convertToHTML } from "draft-convert";

import { SpinnerCircular } from "spinners-react";

type Props = {
  data: ProductType;
};

const MainSection: FC<Props> = ({
  data: { type, picture, description, company, user, name },
}: Props) => {
  const [typeName, setTypeName] = useState<string>("");
  const [isRequest, setIsRequest] = useState<boolean>(false);
  const dispatch = useDispatch();
  const blocksFromHTML = convertFromHTML(description);
  const state = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap
  );

  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(state)
  );

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setTypeName(e.target.value);
    debounce(updateTypeName, 2000);
  };

  const updateTypeName = async () => {
    try {
      const resData: any = await editProduct({ type: typeName });
      if (resData) {
        dispatch(setProduct(resData));
      }
    } catch (e) {}
  };

  const handleDescriptionTech = async () => {
    setIsRequest(true);
    let html = convertToHTML(editorState.getCurrentContent());
    try {
      const resData: any = await editProduct({ description: html });
      if (resData) {
        dispatch(setProduct(resData));
        setIsRequest(false);
      }
    } catch (e) {}
  };

  useEffect(() => {
    setTypeName(name);
  }, [name]);

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

          <div className="absolute top-0 right-0 z-10 w-[40px] h-[40px] bg-[#FFF] rounded-bl-[6px] flex justify-center items-center">
            <img src="/icons/inno_delete.svg" alt="icon" />
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
          <input
            type="text"
            value={typeName}
            onChange={handleChange}
            className="w-full h-[38px] px-[10px] border-[#D1D5DB] border-[1px] outline-none rounded-md text-[16px] font-semibold text-[#374151]"
          />

          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            wrapperClassName="wrapper"
            editorClassName="editor"
          />

          <div className="mt-[30px] flex justify-end gap-[20px]">
            <button className="relative w-[72px] h-[30px] bg-[#fff] rounded-md flex items-center gap-1 justify-center">
              <img src="/icons/goodIcon.svg" alt="icon" />
              <p className="text-[14px] font-normal text-primaryColor">
                Cancel
              </p>
              {isRequest ? (
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-appBackgroundColor/70 flex justify-center items-center">
                  <SpinnerCircular color="#272E71" size={30} />
                </div>
              ) : null}
            </button>
            <button
              onClick={handleDescriptionTech}
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
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-[30%] p-[20px]">
        <p className="font-semibold text-[16px] text-[#374151]">Offered By</p>

        <img src={company.logo} alt="logo" className="mt-[20px]" />
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
