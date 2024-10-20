import Image from "next/image"
import { Clock, Users } from "lucide-react"

export function RecipePost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Creamy Garlic Parmesan Pasta</h1>
        <p className="text-gray-600">A quick and delicious weeknight dinner</p>
      </header>

      <Image
        src="/placeholder.svg"
        alt="Creamy Garlic Parmesan Pasta"
        width={200}
        height={400}
        className="mx-auto rounded-lg object-cover aspect-square"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>8 oz (225g) fettuccine or spaghetti</li>
              <li>2 tablespoons olive oil</li>
              <li>4 cloves garlic, minced</li>
              <li>1 cup heavy cream</li>
              <li>1/2 cup grated Parmesan cheese</li>
              <li>1/4 cup chopped fresh parsley</li>
              <li>Salt and black pepper to taste</li>
              <li>Red pepper flakes (optional)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <p>Cook the pasta in a large pot of salted boiling water according to package instructions until al dente. Reserve 1 cup of pasta water before draining.</p>
              </li>
              <li>
                <p>While the pasta is cooking, heat olive oil in a large skillet over medium heat. Add minced garlic and cook until fragrant, about 1-2 minutes.</p>
              </li>
              <li>
                <p>Pour in the heavy cream and bring to a simmer. Cook for 3-4 minutes until it starts to thicken slightly.</p>
              </li>
              <li>
                <p>Add the grated Parmesan cheese to the skillet and stir until melted and smooth.</p>
              </li>
              <li>
                <p>Add the drained pasta to the skillet and toss to coat with the sauce. If the sauce is too thick, add some of the reserved pasta water to reach your desired consistency.</p>
              </li>
              <li>
                <p>Season with salt and black pepper to taste. Add red pepper flakes if desired.</p>
              </li>
              <li>
                <p>Garnish with chopped fresh parsley and additional Parmesan cheese if desired. Serve immediately and enjoy!</p>
              </li>
            </ol>
          </section>
        </div>

        <aside className="md:col-span-1">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Recipe Details</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Clock className="mr-2" size={20} />
                <span>Prep Time: 10 minutes</span>
              </li>
              <li className="flex items-center">
                <Clock className="mr-2" size={20} />
                <span>Cook Time: 15 minutes</span>
              </li>
              <li className="flex items-center">
                <Users className="mr-2" size={20} />
                <span>Servings: 4</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </article>
  )
}