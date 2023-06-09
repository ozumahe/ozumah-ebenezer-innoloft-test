import React, { FC, useEffect } from "react";
import {
  BreadCrumb,
  DetailsSection,
  MainSection,
  VideoSection,
} from "../components/EditProduct";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../global/store";
import { getProduct } from "../global/redux/product";
import { getTrlList } from "../global/redux/trl";
import { SpinnerCircularFixed } from "spinners-react";

const EditProduct: FC = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(getProduct());
    dispatch(getTrlList());
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
      <BreadCrumb />
      <MainSection data={product.data} />
      <VideoSection />
      <DetailsSection data={product.data} />
    </div>
  );
};

export default EditProduct;
