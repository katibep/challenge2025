"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
export type FormProps = {
    title: string,
    link :string
}
export default function category() {
    const {register,reset,handleSubmit,formState:{errors}} = useForm<FormProps>()
  return (
    <form className="max-w-sm mx-auto mt-24">
    <div className="mb-5">
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add title</label>
      <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="watermelon"
      {...register("title", {required:true})}
      />
      { errors[`title`] && (
            <span className='text-red-600 text-xs'>title requird</span>
           ) }
         
    </div>
    <div className="mb-5">
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add description</label>
      <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="juicy"
      {...register("title", {required:true})}
      />
      { errors[`title`] && (
            <span className='text-red-600 text-xs'>title requird</span>
           ) }
         
    </div>
    <div className="mb-5">
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add price</label>
      <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="50.5"
      {...register("title", {required:true})}
      />
      { errors[`title`] && (
            <span className='text-red-600 text-xs'>title requird</span>
           ) }
         
    </div>
    
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
  </form>
  )
}
