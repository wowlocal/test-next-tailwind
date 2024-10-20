"use server"

import mongoose, { Schema, model, Model } from 'mongoose';

// Connect to MongoDB
const MONGODB_URI = 'mongodb://localhost/vegan_recipes';

let db: mongoose.Connection;

const connectToDatabase = async () => {
  if (db) {
    return db;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    db = mongoose.connection;
    console.log('Connected to MongoDB');
    return db;
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
};

// Define Recipe Schema
const recipeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
});

const Recipe: Model<any> = mongoose.models.Recipe || model('Recipe', recipeSchema);
// Function to get all recipes
export const getAllRecipes = async (): Promise<any> => {
  try {
    await connectToDatabase();
    const recipes = await Recipe.find();
    return recipes;
  } catch (error) {
    console.error('Error in getAllRecipes:', error);
    throw new Error('Failed to fetch recipes');
  }
};

// Function to get a recipe by ID
export const getRecipeById = async (id: string): Promise<any | null> => {
  try {
    await connectToDatabase();
    const recipe = await Recipe.findById(id);
    if (!recipe) throw new Error('Recipe not found');
    return recipe;
  } catch (error) {
    console.error('Error in getRecipeById:', error);
    throw new Error('Failed to fetch recipe');
  }
};
