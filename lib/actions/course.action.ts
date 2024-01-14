"use server";

import { connectToDb } from "../mongoose";
import Category from "@/database/category.model";

interface CreateCategoryParams {
  categoryName: string;
  categoryDescription: string;
}
export async function createCategory(params: CreateCategoryParams) {
  try {
    connectToDb();
    const { categoryName, categoryDescription } = params;
    const newCategory = await Category.create({
      categoryName,
      categoryDescription,
    });
  } catch (err) {
    console.log(err);
  }
}

export async function getAllCoursesCategory() {
  try {
    connectToDb();
    const allCategories = await Category.find({});

    return JSON.stringify(allCategories);
  } catch (err) {
    console.log(err);
  }
}
