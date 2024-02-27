import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../redux/productSlice";
import DetailComp from "../components/detail/DetailComp";
import Loading from "../components/Loading";

const Detail = () => {
  // url'deki id'yi al
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);
  // her detay sayfasında gittiğimizde, gelen id numarasına veriler değiştiği için mutlaka id'nin buraua bağımlı olması gerekiyor

  return (
    <div>
      {productDetailStatus === "LOADING" ? (
        <Loading />
      ) : (
        <DetailComp productDetail={productDetail} />
      )}
      {/* ürünü prop olarak ver */}
    </div>
  );
};

export default Detail;
