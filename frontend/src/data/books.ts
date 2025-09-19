export interface Book {
  slug: string;
  title: string;
  author: string;
  description: string;
  image: string;
  genre: string[];
}

export const books: Book[] = [
  {
    slug: "the-midnight-library",
    title: "The Midnight Library",
    author: "Matt Haig",
    description: "A novel about Nora Seed, a woman who is unhappy with her life and is given the opportunity to experience different versions of her life had she made other choices.",
    image: "https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=600",
    genre: ["Fantasy", "Contemporary"],
  },
  {
    slug: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    description: "An easy and proven way to build good habits and break bad ones. It offers a framework for improving every day.",
    image: "https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?auto=compress&cs=tinysrgb&w=600",
    genre: ["Self-help", "Productivity"],
  },
  {
    slug: "project-hail-mary",
    title: "Project Hail Mary",
    author: "Andy Weir",
    description: "A lone astronaut, Ryland Grace, is on a desperate, last-chance mission to save Earth. He wakes up with no memory of his name or his mission.",
    image: "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=600",
    genre: ["Science Fiction", "Thriller"],
  },
];
