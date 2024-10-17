"use server"

import mongoose, { Schema } from 'mongoose';

// Connect to MongoDB

var db = mongoose.createConnection('mongodb://localhost/vegan_recipes');

// Define Recipe Schema
const recipeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
});

const Recipe = db.model('Recipe', recipeSchema);

// Function to get all recipes
export const getAllRecipes = async (): Promise<any> => {
  try {
    const recipes = await Recipe.find();
    return recipes; // Convert to JSON string
  } catch (error) {
    throw new Error(error as string);
  }
};

// Function to get a recipe by ID
export const getRecipeById = async (id: string): Promise<any | null> => {
  try {
    const recipe = await Recipe.findById(id);
    if (!recipe) throw new Error('Recipe not found');
    return recipe.toJSON(); // Convert to JSON
  } catch (error) {
    throw new Error(error as string);
  }
};