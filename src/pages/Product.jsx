import  { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products,currency,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        // console.log(item)
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in-out duration-500 mx-10 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row ">
        {/* productimages  */}
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img onClick={()=>setImage(item)}
                key={index}
                src={item}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink cursor-pointer"
                alt=""
              ></img>
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt=""></img>
          </div>
        </div>
        {/* product info */}

        <div className="flex-1 ">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img alt="" src={assets.star_icon} className="w-3 "></img>
            <img alt="" src={assets.star_icon} className="w-3 "></img>
            <img alt="" src={assets.star_icon} className="w-3 "></img>
            <img alt="" src={assets.star_icon} className="w-3 "></img>
            <img alt="" src={assets.star_dull_icon} className="w-3 "></img>
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5"> {productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>SelectSize</p>
            <div className="flex gap-2">{productData.sizes.map((item,index)=>(
              <button onClick={()=>setSize(item)} className={`border px-4 py-2 bg-gray-100 ${item===size?"border-orange-500":""}`} key={index} >{item}</button>
            ))}</div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className="bg-black text-white py-3 px-8 text-sm active:bg-gray-700">Add To Cart</button>
          <hr className="mt-8 sm:w-4/5"></hr>
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product</p>
            <p>Cash on Delivery Available</p>
            <p>Easy retun and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      {/* description and review */}
      <div className="mt-20">
<div className="flex">
  <b className="border px-5 py-3 text-sm">description</b>
  <p className="border px-5 py-3 text-sm">reviews(122)</p>
</div>
<div className="flex flex-col gap-4 text-sm border px-6 py-6 text-gray-500">
  <p>
    ashdkjh ashdklj hklashd ofirewiotr kldsfhk foiuytoi, hyuashdkjh ashdklj hklashd ofirewiotr kldsfhk foiuytoi, hyutgoieh voiwehtlnvm, hjweo, nohtklnvashdkjh ashdklj hklashd ofirewiotr kldsfhk foiuytoi, hyutgoieh voiwehtlnvm, hjweo, nohtklnvtgoieh voiwehtlnvm, hjweo, nohtklnv
  </p>
  <p>ashdkjh ashdklj hklaashdkjh ashdklj hklashd ofirewiotr kldsfhk foiuytoi, hyutgoieh voiwehtlnvm, hjweo, nohtklnvshd ofirewiotr kldsfhk foiuytoi, hyutgoieh voiwehtlnvm, hjweo, nohtklnv</p>
</div>
      </div>
      {/* display related p[roducts] */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory}>

      </RelatedProduct>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
