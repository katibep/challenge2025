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
  {
    image: "/fruiit4.jpg",
    title: "Tropical Fruits",
    description: "Realistic banana pattern with compositions of banana fruit tropical leavrs flowers and slices with turquoise",
    price: 6.99
  },
  {
    image: "/fruit5.jpg",
    title: "Stone Fruits",
    description: "Side view of pattern of fruits as peach cherries plums pears and jar of apricots on wooden background",
    price: 4.79
  },
  {
    image: "/aplles.jpg",
    title: "Apples and Pears",
    description: "Classic, crisp, and versatile fruits that are perfect for snacking, baking, or juicing.",
    price: 3.99
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
  {
    title: "Tropical Fruits",
    description: "Exotic and sweet fruits such as pineapples, mangoes, and papayas, bringing a taste of the tropics.",
    price: 6.99,
    image: "/pinkjuice.jpg"
  },
  {
    title: "Stone Fruits",
    description: "Fruits with a pit at their center, including peaches, plums, and cherries, known for their juicy sweetness.",
    price: 4.79,
    image: "/whitejuice.jpg"
  },
  {
    title: "Apples and Pears",
    description: "Classic, crisp, and versatile fruits that are perfect for snacking, baking, or juicing.",
    price: 3.99,
    image: "/applejuice.jpg"
  },
  {
    title: "Melons",
    description: "Large, refreshing fruits like watermelon, cantaloupe, and honeydew, ideal for summer days.",
    price: 7.49,
    image: "/melon juice.jpg"
  },
  {
    title: "Apples and Pears",
    description: "Classic, crisp, and versatile fruits that are perfect for snacking, baking, or juicing.",
    price: 3.99,
    image: "/applejuice.jpg"
  },
  {
    title: "mixtures",
    description: "Large, refreshing fruits like watermelon, cantaloupe, and honeydew, ideal for summer days.",
    price: 7.49,
    image: "/juice8.jpg"
  },
  {
    title: "Citrus Fruits",
    description: "Zesty and refreshing fruits packed with vitamin C, including oranges, lemons, and grapefruits.",
    price: 4.99,
    image: "/greenjuice.jpg"
  }
];

export default function page() {
  return (
    <div className='p-[3rem] bg-slate-300 h-full'>
      <div className="flex items-center justify-center gap-[2rem]">
        <Input className='w-[50%]' placeholder='search...'/>
        <Search/>
      </div>
      <p className='mt-[3rem] text-pink-600 text-center text-[2rem]'>FRUIT CATEGORIES</p>
    <div  className="flex gap-4 mt-[3rem]">
      {
        fruitCategories.map((fruitCategory,i) =>{
          return(
           <Link key={i} href={""}>
             <div  className="bg-white p-4 rounded-xl flex flex-col items-center justify-center gap-2 text-black hover:bg-pink-600 hover:text-white">
      <div className="image">
        <Image src={fruitCategory.image} alt='fruit' width={100} height={15}/>
      </div>
      <p>{fruitCategory.title}</p>
      <p>{fruitCategory.description}</p>
      <p>{fruitCategory.price}</p>
      </div>
           </Link>
          )
        })
      }
    </div>
    <p className='text-pink-600 mt-[3rem] text-center text-[2rem]'>FRUIT PRODUCTS</p>
    <div className="grid grid-cols-3 gap-4 mt-[4rem]">
      {
        fruitProducts.map((fruitProduct,i) =>{
          return(
           <Link key={i} href={""}>
             <div className="flex flex-col gap-3 bg-white p-3 items-center justify-center rounded-xl text-black hover:text-white hover:bg-pink-600">
        <p>{fruitProduct.title}</p>
        <p>{fruitProduct.description}</p>
        <p>{fruitProduct.price}</p>
        <div className="image">
          <Image src={fruitProduct.image} alt='' width={100} height={15}/>
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

