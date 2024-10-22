import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card"
import { MarkdownRendererComponent } from '@/components/markdown-renderer'
import Image from "next/image"
import { RichRecipeHeader } from "@/components/rich-recipe-header"
import { UtensilsCrossed, Search, Home, Book, Users, Coffee } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


// static mock data
const recipeMarkdown = `
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

> Enjoy your meal!

![React Logo](/DSC07450.jpg)

[Link to Google](https://www.google.com)
`;

function Header2() {
  return (
    <div className="flex justify-center bg-gradient-to-b from-amber-50 to-white p-4">
      <header className="w-full max-w-5xl bg-primary rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4">
          <nav>
            <ul className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-8 text-sm font-medium text-amber-800">
              <li>
                <Link href="/" className="flex items-center space-x-2 hover:text-amber-600 transition-colors">
                  <Home className="h-6 w-6" />
                  <span className="text-xl font-semibold">VeganEats</span>
                </Link>
              </li>
              <li className="w-full sm:w-auto">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search recipes..."
                    className="pl-10 pr-4 py-2 w-full sm:w-64 bg-amber-50 border-amber-200 rounded-full focus:ring-2 focus:ring-amber-300 focus:border-amber-300 transition-all duration-300"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-400" />
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="bg-gradient-to-r from-amber-100 via-amber-50 to-amber-100 py-3 px-6">
          <p className="text-center text-sm text-amber-800 font-medium">
            <span className="font-bold">Today's Special:</span> Autumn Spiced Pumpkin Soup
          </p>
        </div>
      </header>
    </div>
  )
}

function Header() {
  return (
    <header className="w-full max-w-5xl bg-amber-50 border-b border-amber-100">
      <div className="container mx-auto px-4 py-6">
        <nav>
          <ul className="flex items-center justify-center space-x-8 text-sm font-medium text-amber-800">
            <li>
              <Link href="/" className="flex items-center space-x-1 hover:text-amber-600 transition-colors">
                <Home className="h-6 w-6" />
                <span className="text-lg">Home</span>
              </Link>
            </li>
            <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Search ideas..." className="bg-white border-amber-200" />
              </div>
            </div>
          </ul>
        </nav>
      </div>
      <div className="bg-amber-100 py-2">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-amber-800">
            <span className="font-semibold">Today's Special:</span> Autumn Spiced Pumpkin Soup
          </p>
        </div>
      </div>
    </header>
  )
}

function UglyHeader({ recipe }) {
  return (
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
  )
}

export default function RecipeBlogPost({ recipe }) {
  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header2 />
      <main className="flex-1">
        <article className="container mx-auto px-4 py-12">
          {/* <UglyHeader recipe={recipe} /> */}
          <RichRecipeHeader />
          <div className="container mx-auto p-4">
            <MarkdownRendererComponent content={recipeMarkdown} />
          </div>
        </article>
      </main>
      <aside className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Related Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {}
          </div>
          <RelatedRecipesFooter />
        </div>
      </aside>
    </div>
  )
}

// Sample data for related recipes
const relatedRecipes = [
  {
    id: 1,
    title: "Spicy Chicken Tacos",
    description: "Delicious tacos with a kick of heat",
    image: "/placeholder.svg?height=200&width=300",
    slug: "spicy-chicken-tacos"
  },
  {
    id: 2,
    title: "Vegetarian Pasta Primavera",
    description: "Light and fresh pasta loaded with veggies",
    image: "/placeholder.svg?height=200&width=300",
    slug: "vegetarian-pasta-primavera"
  },
  {
    id: 3,
    title: "Classic Beef Burger",
    description: "Juicy homemade burgers with all the fixings",
    image: "/placeholder.svg?height=200&width=300",
    slug: "classic-beef-burger"
  },
  {
    id: 4,
    title: "Chocolate Chip Cookies",
    description: "Soft and chewy cookies with gooey chocolate chips",
    image: "/placeholder.svg?height=200&width=300",
    slug: "chocolate-chip-cookies"
  }
]

function RelatedRecipesFooter() {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedRecipes.map((recipe) => (
            <Card key={recipe.id} className="overflow-hidden">
              <Link href={`/recipes/${recipe.slug}`}>
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{recipe.title}</h3>
                  <p className="text-sm text-gray-600">{recipe.description}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <span className="text-sm text-blue-600 hover:underline">Read more</span>
                </CardFooter>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}