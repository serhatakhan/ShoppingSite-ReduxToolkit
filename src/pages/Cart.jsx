import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getCartTotal } from "../redux/cartSlice"
import CartComp from "../components/cart/CartComp"

const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {carts, itemCount, totalAmount} = useSelector((state)=> state.carts)

  console.log(carts, itemCount, totalAmount)

  useEffect(()=>{
    dispatch(getCartTotal())
  }, [dispatch])

  return (
    <div>
      {
        carts?.length > 0 ? <div>
          {
            carts?.map((cart, i)=> (
              <CartComp key={i} cart={cart} />
            ))
          }
          <div className="flex items-center justify-end text-2xl my-14">TOPLAM TUTAR: <span className="font-bold ml-2">{totalAmount}</span>₺</div>
        </div> :
        <div>
          Sepetiniz boş...
        </div>
      }
    </div>
  )
}

export default Cart