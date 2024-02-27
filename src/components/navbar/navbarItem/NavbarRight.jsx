import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { GrBasket } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartTotal } from "../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const NavbarRight = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {itemCount} = useSelector((state)=> state.carts)


  useEffect(()=>{
    dispatch(getCartTotal())
  }, [dispatch])

  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center border p-3 rounded-full bg-gray-200" >
        <input className="bg-gray-200 outline-none" type="text" placeholder="Ürün Ara..." />
        <IoSearch size={28} />
      </div>

      <FaRegHeart size={25} />

      <div onClick={()=> navigate("cart")} className="relative cursor-pointer">
        <div  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center" >{itemCount}</div>
        <GrBasket size={25} />
      </div>
    </div>
  );
};

export default NavbarRight;
