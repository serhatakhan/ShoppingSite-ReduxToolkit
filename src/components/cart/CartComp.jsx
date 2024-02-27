import { useDispatch } from "react-redux"
import { removeFromCard } from "../../redux/cartSlice"

const CartComp = ( {cart} ) => {
  const dispatch = useDispatch()

  return (
    <div className="my-12 flex items-center justify-between">
      <img className="w-[150px] h-[150px] object-contain" src={cart?.image} alt="" />
      <div className="w-[550px]">
        <div className="text-xl font-semibold">{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div className="font-bold text-2xl">{cart?.price}₺ ({cart?.quantity})</div>
      <div onClick={()=> dispatch(removeFromCard(cart?.id))} className="bg-red-600 hover:bg-red-700 text-white w-[150px] h-10 flex items-center justify-center text-center text-xl cursor-pointer rounded-md">Ürünü Sil</div>
    </div>
  )
}

export default CartComp