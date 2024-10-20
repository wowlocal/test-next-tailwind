import { getRecipeById } from "@/server/db";

export default async function RecipePage({ params }: { params: { id: string } }) {
  const id = params.id;
  const recipe = await getRecipeById(id);
  return <h1>page id: {id}</h1>;
}
