import { getRecipeById } from "@/server/db";
import RecipeBlogPost from "./post.jsx";

export default async function RecipePage({ params }: { params: { id: string } }) {
  const id = params.id;
  const recipe = await getRecipeById(id);
  return <RecipeBlogPost recipe={recipe} />;
}
