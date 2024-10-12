/**
 * v0 by Vercel.
 * @see https://v0.dev/t/28N3lk4Iqku
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground w-full">
        <div className="container mx-auto px-6 py-6 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Delicious Vegan Recipes</h1>
              <p className="text-lg md:text-xl text-primary-foreground/80">
                Discover a world of plant-based deliciousness. Explore our collection of mouthwatering vegan recipes.
              </p>
              <div className="flex gap-2">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  prefetch={false}
                >
                  Browse Recipes
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-primary-foreground bg-transparent px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  prefetch={false}
                >
                  About Us
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-lg">
              <img src="/placeholder.svg" alt="Vegan Dishes" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 px-4 md:py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-0">
                  <img
                    src="/placeholder.svg"
                    alt="Vegan Dish"
                    width={700}
                    height={250}
                    className="object-cover rounded-t-lg"
                    style={{ aspectRatio: "400/250", objectFit: "cover" }}
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle>Creamy Cashew Pasta</CardTitle>
                  <CardDescription>A rich and creamy vegan pasta dish made with a cashew-based sauce.</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    prefetch={false}
                  >
                    View Recipe
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="p-0">
                  <img
                    src="/placeholder.svg"
                    alt="Vegan Dish"
                    width={700}
                    height={250}
                    className="object-cover rounded-t-lg"
                    style={{ aspectRatio: "400/250", objectFit: "cover" }}
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle>Roasted Vegetable Medley</CardTitle>
                  <CardDescription>A colorful and flavorful mix of roasted seasonal vegetables.</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    prefetch={false}
                  >
                    View Recipe
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="p-0">
                  <img
                    src="/placeholder.svg"
                    alt="Vegan Dish"
                    width={700}
                    height={250}
                    className="object-cover rounded-t-lg"
                    style={{ aspectRatio: "400/250", objectFit: "cover" }}
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle>Lentil and Sweet Potato Curry</CardTitle>
                  <CardDescription>
                    A comforting and nourishing vegan curry with lentils and sweet potatoes.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    prefetch={false}
                  >
                    View Recipe
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="p-0">
                  <img
                    src="/placeholder.svg"
                    alt="Vegan Dish"
                    width={700}
                    height={250}
                    className="object-cover rounded-t-lg"
                    style={{ aspectRatio: "400/250", objectFit: "cover" }}
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle>Quinoa and Avocado Salad</CardTitle>
                  <CardDescription>
                    A refreshing and protein-packed vegan salad with quinoa and avocado.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    prefetch={false}
                  >
                    View Recipe
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="p-0">
                  <img
                    src="/placeholder.svg"
                    alt="Vegan Dish"
                    width={700}
                    height={250}
                    className="object-cover rounded-t-lg"
                    style={{ aspectRatio: "400/250", objectFit: "cover" }}
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle>Tofu Stir-Fry with Vegetables</CardTitle>
                  <CardDescription>
                    A quick and flavorful vegan stir-fry with crispy tofu and fresh vegetables.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    prefetch={false}
                  >
                    View Recipe
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="p-0">
                  <img
                    src="/placeholder.svg"
                    alt="Vegan Dish"
                    width={700}
                    height={250}
                    className="object-cover rounded-t-lg"
                    style={{ aspectRatio: "400/250", objectFit: "cover" }}
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle>Baked Falafel with Tahini Sauce</CardTitle>
                  <CardDescription>Crispy baked falafel served with a creamy tahini dipping sauce.</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    prefetch={false}
                  >
                    View Recipe
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <aside className="bg-muted py-12 md:py-16">
        <div className="container grid mx-auto px-4 grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Categories</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <SaladIcon className="w-5 h-5" />
                  Salads
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <PizzaIcon className="w-5 h-5" />
                  Pasta
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <CloverIcon className="w-5 h-5" />
                  Curries
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <BeefIcon className="w-5 h-5" />
                  Burgers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Tags</h2>
            <div className="flex flex-wrap gap-2">
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                prefetch={false}
              >
                Gluten-free
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                prefetch={false}
              >
                Nut-free
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                prefetch={false}
              >
                Soy-free
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                prefetch={false}
              >
                Whole Foods
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                prefetch={false}
              >
                Oil-free
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Search</h2>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon className="w-5 h-5 text-muted-foreground" />
              </div>
              <Input type="search" placeholder="Search recipes..." className="pl-10 rounded-md" />
            </div>
          </div>
        </div>
      </aside>
      <footer className="bg-muted text-muted-foreground py-6 md:py-8">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <p className="text-sm">&copy; 2024 Vegan Recipes Blog. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <TwitterIcon className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <InstagramIcon className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <FacebookIcon className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function BeefIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12.5" cy="8.5" r="2.5" />
      <path d="M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z" />
      <path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" />
    </svg>
  )
}


function CloverIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16.17 7.83 2 22" />
      <path d="M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12" />
      <path d="m7.83 7.83 8.34 8.34" />
    </svg>
  )
}


function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function PizzaIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 11h.01" />
      <path d="M11 15h.01" />
      <path d="M16 16h.01" />
      <path d="m2 16 20 6-6-20A20 20 0 0 0 2 16" />
      <path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4" />
    </svg>
  )
}


function SaladIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 21h10" />
      <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
      <path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" />
      <path d="m13 12 4-4" />
      <path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}