import { FC, useEffect } from "react";
import { RootState } from "../global/store";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../global/redux/product";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (product.isLoading) {
    return <div></div>;
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
