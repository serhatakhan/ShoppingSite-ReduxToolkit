import { useState } from "react";
import { AiOutlineStock } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa6";
import { IoPricetagsOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToCard } from "../../redux/cartSlice";

const DetailComp = ( {productDetail} ) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(0)

  const decrement = ()=>{
    if(quantity > 0){
        setQuantity(quantity - 1)
    }
  }

  const increment = ()=>{
    if(quantity < productDetail?.rating?.count){
        setQuantity(quantity + 1)
    }
  }

  const addBasket =()=>{
    dispatch(addToCard({id: productDetail?.id, title: productDetail?.title, image: productDetail?.image, price: productDetail?.price, quantity: quantity }))
  }


  return (
    <div className="flex gap-10 my-14">
        <img className="w-[460px] h-[460px] object-contain" src={productDetail?.image} alt="" />

        <div>
            <div className="text-3xl font-bold">{productDetail?.title}</div>
            <div className="my-3 text-lg">{productDetail?.description}</div>
            <div className="my-2 text-xl text-red-600 flex items-center gap-2"><FaRegStar /> Rating: {productDetail?.rating?.rate}</div>
            <div className="my-2 text-xl text-green-600 flex items-center gap-2"><AiOutlineStock />  Count: {productDetail?.rating?.count}</div>
            <div className="font-semibold text-3xl flex items-center gap-2"><IoPricetagsOutline /> {productDetail?.price}₺</div>
            <div className="flex items-center gap-5 my-4">
                <div onClick={decrement} className="text-5xl cursor-pointer">-</div>
                <input className="w-7 text-center text-2xl font-semibold" type="text"value={quantity} />
                <div onClick={increment} className="text-4xl cursor-pointer">+</div>
            </div>
            <div onClick={addBasket} className="my-4 border w-[180px] h-14 text-xl rounded-md bg-gray-200 hover:bg-gray-300 cursor-pointer flex items-center justify-center">Sepete Ekle</div>
        </div>
    </div>
  )
}

export default DetailComp