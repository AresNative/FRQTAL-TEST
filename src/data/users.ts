// src/data/users.ts

export interface User {
  name: string;
  bio: string;
  image: string;
  presentation: string;
  links: { title: string; url: string; icon: string }[];
}

export const usersData: Record<string, User> = {
  "1": {
    name: "John Doe",
    bio: "Desarrollador Frontend",
    image: "https://via.placeholder.com/200",
    presentation:
      "Hola, soy John, un desarrollador frontend con pasión por la creación de experiencias web dinámicas y funcionales.",
    links: [
      { title: "GitHub", url: "https://github.com/johndoe", icon: "fa-github" },
      {
        title: "LinkedIn",
        url: "https://linkedin.com/in/johndoe",
        icon: "fa-linkedin",
      },
    ],
  },
  "2": {
    name: "Jane Smith",
    bio: "Diseñadora UX/UI",
    image: "https://via.placeholder.com/200",
    presentation:
      "Soy Jane, una diseñadora UX/UI que busca crear interfaces intuitivas y atractivas para los usuarios.",
    links: [
      { title: "Portfolio", url: "https://janesmith.com", icon: "fa-globe" },
      {
        title: "Twitter",
        url: "https://twitter.com/janesmith",
        icon: "fa-twitter",
      },
    ],
  },
  "3": {
    name: "Alice Johnson",
    bio: "Desarrolladora Backend",
    image: "https://via.placeholder.com/200",
    presentation:
      "Hola, soy Alice, una desarrolladora backend especializada en crear soluciones robustas y escalables para aplicaciones web.",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/alicejohnson",
        icon: "fa-github",
      },
      { title: "Blog", url: "https://alicejohnson.dev", icon: "fa-rss" },
    ],
  },
};
