import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

    const{productId} = useParams();
    const{products, currency,addToCart} = useContext(ShopContext);
    const [productData,setProductData] = useState(false);
    const [image,setImage] = useState('');
    const[size,setSize] = useState('')


    const fetchProductData = async () =>{

      products.map((item)=>{
        if(item._id === productId){

          setProductData(item)
          setImage(item.image[0])
          return null;
        }

      })

    }

    useEffect(()=>{
      fetchProductData();

    },[productId,products])


  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 border-gray-300'>
      {/*product data*/}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row' >
        {/*product images*/}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index)=>(
                <img 
                    onClick={()=>setImage(item)} 
                    src={item} 
                    key={index} 
                    className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' // <-- FIX: Changed 'classname' to 'className'
                /> 
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt=''  />
          </div>
        </div>

        {/*product info*/}
        <div className='flex-1'>
          <h1 className='font-medium text=2xl mt -2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img  className='w-3 5' altr="" src={assets.star_icon}  />
            <img  className='w-3 5' altr="" src={assets.star_icon}  />
            <img  className='w-3 5' altr="" src={assets.star_icon}  />
            <img  className='w-3 5' altr="" src={assets.star_icon}  />
            <img  className='w-3 5' altr="" src={assets.star_icon2}  />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
           <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
           <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item,index)=>(
                <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item===size ? 'border-orange-500 ': ''}border-gray-300`} key={index}>{item}</button>
              ))}

            </div>
           </div>
           <button onClick={()=> addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
           <hr className='mt-8 sm:w-4/5 h-[1px] border-none bg-gray-300'></hr>
           <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% Original product.</p>
                <p>Cash on delevery is available on this product.</p>
                <p>Easy return exchange policy within 7 days</p>
           </div>
        </div>

      </div>

      {/*description & review section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm border-gray-300'>Description</b>
          <p className='border px-5 py-3 text-sm border-gray-300'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 border-gray-300'>
          <p>This dress is the epitome of futuristic glamour, perfectly capturing the opulent satin and liquid metal trends dominating the 2025 runway. The metallic silver fabric drapes like liquid light, offering a sophisticated sheen that turns heads without effort. Cut in a sleek midi slip silhouette, it features thin spaghetti straps and a gentle cowl neck that subtly highlights the décolletage. Wear it as a show-stopping evening gown or layer it over a fine-gauge turtleneck for an edgy, contemporary daytime look. Its smooth lining ensures comfort while its high-fashion impact makes it an essential piece for any modern wardrobe.</p>
          <p>Indulge in luxury with this stunning Emerald Satin Midi Gown. Crafted from a rich, heavy satin, this dress boasts a jewel-tone green that is both dramatic and timeless, making it perfect for formal events, weddings, and black-tie affairs. The gown features a flattering bias cut that gently skims the body, ensuring an elegant and elongated silhouette. With a modest midi length and delicate tailoring, it balances refined simplicity with undeniable opulence. Pair it with gold jewelry and classic heels for a truly regal entrance.</p>
        </div>
      </div>
          
           {/*related products */}

           <RelatedProducts category={productData.category} subCategory={productData.subCategory} />



    </div>
  ) :  <div className='opacity-0'></div>
}

export default Product
