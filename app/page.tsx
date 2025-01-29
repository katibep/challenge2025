import { getAllCats } from '@/actions/category';
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
  
const fruitCategories = [
  {
    image: "/fruit1.jpg",
    title: "Citrus Fruits",
    description: "Zesty and refreshing fruits packed with vitamin C, including oranges, lemons, and grapefruits.",
    price: 4.99
  },
  {
    image: "/fruit2.jpg",
    title: "Berries",
    description: "Small, juicy, and vibrant fruits like strawberries, blueberries, and raspberries, perfect for snacking or desserts.",
    price: 5.49
  },
 
];
const fruitProducts = [
  {
    title: "Citrus Fruits",
    description: "Zesty and refreshing fruits packed with vitamin C, including oranges, lemons, and grapefruits.",
    price: 4.99,
    image: "/greenjuice.jpg"
  },
  {
    title: "Berries",
    description: "Small, juicy, and vibrant fruits like strawberries, blueberries, and raspberries, perfect for snacking or desserts.",
    price: 5.49,
    image: "/purplejuice.jpg"
  },
 
];

export default async function page() {
 const allCategories = await getAllCats()
 console.log(allCategories)
  return (
    <div className='p-[1rem] md:p-[3rem] bg-slate-300 h-full sm:w-[100%] '>
      <div className="flex gap-2 md:flex items-center justify-center md:gap-[2rem]">
        <Input className='w-[100%] md:w-[50%]' placeholder='search...'/>
        <Search/>
      </div>
      <p className='mt-6 text-[1rem] mb-6  md:mt-[3rem] text-pink-600 text-center md:text-[3rem] '>FRUIT CATEGORIES</p>
      <Link className='hover:bg-pink-600  bg-black text-white p-1 md:p-3 rounded-sm md:rounded-lg' href={"/add-new"}>add new category</Link>
    <div  className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 mt-[1rem] md:mt-[3rem]  w-full ">
      {
        allCategories?.map((category,i) =>{
          return(
           <Link key={i} href={""}>
             <div  className="bg-white p-4 rounded-xl flex flex-col items-center justify-center gap-2 w-full text-black hover:bg-pink-600 hover:text-white">
              <div className="image">
                <Image src={category.image} alt='fruit' width={100} height={15}/>
              </div>
              <p>{category.name}</p>
              <p>{category.price}</p>
            </div>
           </Link>
          )
        })
      }
    </div>
    <p className='text-pink-600 mt-6 text-center text-[1rem] mb-6 md:text-[2rem]'>FRUIT PRODUCTS</p>
    <Link className='hover:bg-pink-600 bg-black text-white p-1 md:p-3 rounded-sm md:rounded-lg' href={""}>add new product</Link>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3 md:mt-[4rem]">
      {
        fruitProducts.map((fruitProduct,i) =>{
          return(
           <Link key={i} href={""}>
             <div className="flex flex-col gap-3 bg-white p-3 items-center justify-center rounded-xl text-black hover:text-white hover:bg-pink-600">
        <p>{fruitProduct.title}</p>
        <p>{fruitProduct.description}</p>
        <p>{fruitProduct.price}</p>
        <div className="image">
          <Image src={fruitProduct.image} alt='fruit' width={100} height={15}/>
        </div>
      </div>
           </Link>
          )
        })
      }
    </div>
    </div>
  )
}

