"use client"
import { createCategory } from "@/actions/category"
import { ImageInput } from "@/components/FormInputs/ImageInput"
import React, { useState } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"


export interface FormInputs {
  name: string
 price: number
  image:string
  slug:string
}

export default function ShopNowForm() {
  const [imageUrl, setImageUrl] = useState<string>("/globe.svg")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>()
const[loading,setLoading] = useState(false)
async function onSubmit(data:FormInputs){
  data.slug = data.name.split(" ").join("-").toLowerCase()
  data.image=imageUrl
  try {
    setLoading(true)
   await createCategory(data)
   alert("category created successfully") 
   setLoading(false)
  } catch (error) {
   console.log(error) 
  }
}

  // const onSubmit: SubmitHandler<FormInputs> = async (data) => {
  //   data.image = imageUrl
  //   try {
  //     // await createCategory(data)

  //     console.log(data)

  //   } catch (error) {
  //     console.error("Error creating category:", error)
  //   }
  // }

  return (
    <div className="for w-full md:max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Shop Now</h5>

        {/* Category Name Input */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Apples"
          />
          {errors.name && <p className="text-red-600">Category name is required</p>}
        </div>

        {/* Category Price Input */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category Price</label>
          <input
            {...register("price", { required: true, valueAsNumber: true })}
            type="number"
            step="0.01"
            placeholder="20.4"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          />
          {errors.price && <p className="text-red-600">Category price is required</p>}
        </div>

        {/* Image Upload */}
        <div className="uploadthing">
          <ImageInput
            title="Category Image"
            imageUrl={imageUrl}
            setImageUrl={(newUrl: string) => setImageUrl(newUrl || "/globe.svg")}
            endpoint="categoryImage"
          />
        </div>

        {/* Submit Button */}
        {
          loading ? (
            <button
          type="button"
          disabled
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submiting...
        </button>
          ):(
            <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
          )
        }
      </form>
    </div>
  )
}

