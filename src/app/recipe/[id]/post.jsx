import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { MarkdownRendererComponent } from '@/components/markdown-renderer'

// static mock data
const recipeMarkdown = `
# Delicious Vegan Pasta

## Ingredients
- 200g pasta
- 2 tablespoons olive oil
- 1 garlic clove, minced
- 1 zucchini, sliced
- 1 bell pepper, chopped
- Salt and pepper to taste
- Fresh basil for garnish

## Instructions
1. Cook the pasta according to package instructions. Drain and set aside.
2. In a large skillet, heat olive oil over medium heat. Add garlic and sauté for 1 minute.
3. Add zucchini and bell pepper, cooking until tender.
4. Toss in the cooked pasta, season with salt and pepper, and mix well.
5. Serve hot, garnished with fresh basil.

Enjoy your meal!
`;

export default function RecipeBlogPost({ recipe }) {
  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground w-full">
        <div className="container mx-auto px-6 py-6 md:py-12">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{recipe.title}</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mt-2">
            {recipe.description}
          </p>
        </div>
      </header>
      <main className="flex-1">
        <article className="container mx-auto px-4 py-12">
          <Card>
            <CardContent className="p-0">
              <img
                src={recipe.image || "/placeholder.svg"}
                alt={recipe.title}
                className="w-full h-[400px] object-cover rounded-t-lg"
              />
            </CardContent>
            <CardHeader>
              <CardTitle className="text-3xl">{recipe.title}</CardTitle>
              <CardDescription>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Prep time: 15 minutes</span>
                  <span>Cook time: 30 minutes</span>
                  <span>Servings: 4</span>
                </div>
              </CardDescription>
            </CardHeader>
          </Card>
          <div className="container mx-auto p-4">
            <MarkdownRendererComponent content={recipeMarkdown} />
          </div>
        </article>
      </main>
      <aside className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Related Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Add related recipes here */}
          </div>
        </div>
      </aside>
    </div>
  )
}