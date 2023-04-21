import { FC } from "react";

type Props = {
  video: string;
};

const VideoSection: FC<Props> = ({ video }: Props) => {
  return (
    <div className="w-full bg-[#FFF] rounded-[6px] border-[1px] border-[#E5E7EB] overflow-hidden mt-[30px] py-[30px] px-[10px] lg:px-[20px]">
      <p className="text-[16px] font-semibold text-[#374151]">Video</p>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${video.split("=")[1]}`}
        title="YouTube video player"
        className="w-full lg:w-[715px] h-[210px] lg:h-[400px] mx-auto mt-[30px]"
      />
    </div>
  );
};

export default VideoSection;
