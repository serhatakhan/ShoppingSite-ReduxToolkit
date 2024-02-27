import { useNavigate } from "react-router-dom"

const Product = ( {product} ) => {
  const navigate = useNavigate()

  return (
    <div onClick={()=> navigate(`/products/${product?.id}`)} className="w-[396px] p-2 mb-2 mx-2 relative cursor-pointer hover:bg-gray-50">
        <div className="text-2xl font-semibold absolute rounded-md p-1 m-1 top-0 right-0 bg-black text-white">{product?.price}₺</div>
        <img className="w-[200px] h-[200px] object-contain m-auto" src={product.image} alt="" />
        <div className="text-center px-3 mt-3 text-lg font-semibold line-clamp-2">{product.title}</div>
    </div>
  )
}

export default Product