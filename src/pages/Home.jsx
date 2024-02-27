import { useState } from "react";
import Category from "../components/home/Category";
import Products from "../components/home/Products";
import SliderComp from "../components/home/SliderComp";
import Sorting from "../components/home/Sorting";

const Home = () => {
  // sorting ve category ile alakalı 2 state'e ihtiyacımız var
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div>
      <SliderComp />
      <Sorting setSort={setSort} />
      <div className="flex">
        {/* setCategory'i prop olarak gönderdikten sonra <Category/> bileşeninde kategor ismine her tıklandığında setCategory fonk çalışacak ve parametresine kategorinin adını alacak. fakestore api diyor ki, eğer kategorileme yapmak istiyorsak id falan değil kategori adını kullan. */}
        <Category setCategory={setCategory} />
        <Products category={category} sort={sort} />
        {/* bir üstteki işlemi hallettikten sonra category state'ini, <Products/>'a prop olarak yolladık.  */}
      </div>
    </div>
  );
};

export default Home;
