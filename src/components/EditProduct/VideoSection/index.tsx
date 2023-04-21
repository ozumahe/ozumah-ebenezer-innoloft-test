import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { editProduct } from "../../../services/product";
import { setProduct } from "../../../global/redux/product";
import { debounce } from "../../../utils/helpers";

const VideoSection: FC = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const dispatch = useDispatch();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(e.target.value);
    debounce(updateVideoUrl, 2000);
  };

  const updateVideoUrl = async () => {
    try {
      const resData: any = await editProduct({ video: videoUrl });
      if (resData) {
        dispatch(setProduct(resData));
      }
    } catch (e) {}
  };

  return (
    <div className="w-full bg-[#FFF] rounded-[6px] border-[1px] border-[#E5E7EB] overflow-hidden mt-[30px] py-[30px] px-[10px] lg:px-[20px]">
      <p className="text-[16px] font-semibold text-[#374151]">Video</p>
      <input
        type="text"
        value={videoUrl}
        onChange={handleChange}
        className="w-full h-[38px] px-[10px] border-[#D1D5DB] border-[1px] outline-none rounded-md mt-[20px] text-[14px] text-[#6B7280] font-normal"
        placeholder="Add a youtube or vimeo link"
      />
    </div>
  );
};

export default VideoSection;
