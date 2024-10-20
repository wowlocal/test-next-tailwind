'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Image from 'next/image'
import { cn } from "@/lib/utils"

interface MarkdownRendererProps {
  content: string
  className?: string
}

export function MarkdownRendererComponent({ content, className }: MarkdownRendererProps) {
  return (
    <div className={cn("prose dark:prose-invert max-w-none", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ node, ...props }) => {
            const { src, alt } = props
            return (
              <div className="relative w-full h-64 my-4">
                <Image
                  src={src || ''}
                  alt={alt || ''}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )
          },
          // Add custom styling for other elements if needed
          h1: ({ node, ...props }) => <h1 {...props} className="text-3xl font-bold mb-4" />,
          h2: ({ node, ...props }) => <h2 {...props} className="text-2xl font-semibold mb-3" />,
          h3: ({ node, ...props }) => <h3 {...props} className="text-xl font-semibold mb-2" />,
          p: ({ node, ...props }) => <div {...props} className="mb-4" />,
          ul: ({ node, ...props }) => <ul {...props} className="list-disc pl-6 mb-4" />,
          ol: ({ node, ...props }) => <ol {...props} className="list-decimal pl-6 mb-4" />,
          li: ({ node, ...props }) => <li {...props} className="mb-1" />,
          a: ({ node, ...props }) => <a {...props} className="text-blue-500 hover:underline" />,
          blockquote: ({ node, ...props }) => (
            <blockquote {...props} className="border-l-4 border-gray-300 pl-4 italic my-4" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}