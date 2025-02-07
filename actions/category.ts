"use server"
import { FormInputs } from "@/app/add-new/page";
import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";

export async function createCategory(data:FormInputs ) {
      const slug = data.slug
    try {
      const existingCategory = await db.category.findUnique({
        where: {
          slug,
        },
      });
      if (existingCategory) {
        return existingCategory;
      }
      const newCategory = await db.category.create({
        data,
      });
      // console.log(newCategory);
      revalidatePath("/");
      return newCategory;
    } catch (error) {
      console.log(error);
      return null;
    }
  }


  export async function getAllCats(){
    try {
      const categories = await db.category.findMany()
      return categories
    } catch (error) {
   console.log(error)   
    }
  }