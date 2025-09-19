import { BookOpen } from 'lucide-react';
import Image from 'next/image';
import { books } from '@/data/books';
import Link from 'next/link';

export default function Library() {
  return (
    <section id="library" className="py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Digital Library</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Browse our collection of AI-powered book summaries.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-8">
          {books.map((book) => (
            <div key={book.slug} className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 shadow-sm transition-all hover:shadow-lg flex flex-col">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 flex-grow">{book.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {book.genre.map((g) => (
                    <span
                      key={g}
                      className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-md"
                    >
                      {g}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <Link
                    href={`/book/${book.slug}`}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read Summary
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}