'use client'

import Image from "next/image"
import { Clock, Users, ChefHat, Flame, Bookmark, Share2, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface RecipeHeaderProps {
  title: string
  description: string
  imageSrc: string
  author: string
  rating: number
  reviewCount: number
  prepTime: string
  cookTime: string
  totalTime: string
  servings: number
  calories: number
  difficulty: "Easy" | "Medium" | "Hard"
  tags: string[]
}

export function RichRecipeHeader({
  title = "Creamy Tuscan Chicken Pasta",
  description = "A delightful blend of tender chicken, sun-dried tomatoes, and spinach in a creamy Parmesan sauce.",
  imageSrc = "/placeholder.svg?height=600&width=800",
  author = "Chef Maria",
  rating = 4.7,
  reviewCount = 238,
  prepTime = "15 mins",
  cookTime = "25 mins",
  totalTime = "40 mins",
  servings = 4,
  calories = 520,
  difficulty = "Medium",
  tags = ["Italian", "Pasta", "Chicken", "Creamy"]
}: RecipeHeaderProps) {
  return (
    // max-w-4xl if needed
    <div className="mx-auto bg-card rounded-lg shadow-md overflow-hidden">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative h-[300px] md:h-full">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 right-4 flex space-x-2">
            <Button size="icon" variant="secondary">
              <Bookmark className="h-4 w-4" />
              <span className="sr-only">Save recipe</span>
            </Button>
            <Button size="icon" variant="secondary">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share recipe</span>
            </Button>
          </div>
        </div>
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-muted-foreground mb-4">{description}</p>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-muted-foreground">
                {rating} ({reviewCount} reviews)
              </span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <ChefHat className="w-4 h-4 mr-2" />
              <span>Recipe by {author}</span>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-primary" />
                <div>
                  <p className="text-sm font-medium">Prep Time</p>
                  <p className="text-sm text-muted-foreground">{prepTime}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Flame className="w-4 h-4 mr-2 text-primary" />
                <div>
                  <p className="text-sm font-medium">Cook Time</p>
                  <p className="text-sm text-muted-foreground">{cookTime}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-primary" />
                <div>
                  <p className="text-sm font-medium">Total Time</p>
                  <p className="text-sm text-muted-foreground">{totalTime}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-primary" />
                <div>
                  <p className="text-sm font-medium">Servings</p>
                  <p className="text-sm text-muted-foreground">{servings}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Flame className="w-4 h-4 mr-2 text-primary" />
                <span className="text-sm">{calories} calories per serving</span>
              </div>
              <Badge variant={difficulty === "Easy" ? "secondary" : difficulty === "Medium" ? "default" : "destructive"}>
                {difficulty}
              </Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Badge key={index} variant="outline">{tag}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}