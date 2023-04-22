import { FC, useEffect } from "react";
import { RootState } from "../global/store";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../global/redux/product";
import { getAppConfiguration } from "../global/redux/appConfiguration";
import { SpinnerCircularFixed } from "spinners-react";

import {
  BreadCrumb,
  DetailsSection,
  MainSection,
  VideoSection,
} from "../components/ProductView";

const ViewProduct: FC = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(getProduct());
    dispatch(getAppConfiguration());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (product.isLoading) {
    return (
      <div className="w-full h-[70vh] flex justify-center items-center">
        <SpinnerCircularFixed color="#272E71" />
      </div>
    );
  }

  return (
    <div className="px-[10px]">
      <BreadCrumb name={product.data.name} />
      <MainSection data={product.data} />
      <VideoSection video={product.data.video} />
      <DetailsSection data={product.data} />
    </div>
  );
};

export default ViewProduct;
