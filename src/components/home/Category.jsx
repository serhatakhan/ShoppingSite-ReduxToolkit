import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = ( {setCategory} ) => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.categories);

  // sayfa yüklendiğinde kategorileri çek
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="w-1/6 bg-gray-100 p-4 h-screen">
      <div className="border-b pb-1 text-4xl font-bold">categori</div>
      {
        categories?.map((category, i)=> (
            <div onClick={()=> setCategory(category)} className="text-lg mt-1 cursor-pointer hover:bg-gray-200 p-2 font-semibold" key={i}>{category}</div>
        ))
      }
    </div>
  );
};

export default Category;
