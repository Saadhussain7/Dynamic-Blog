import React from "react";
import BlogCard from "../components/BlogCard";

export default function Mega() {
  const posts = [
    {
      id: "1",
      title: "The Age of AI: Shaping the Future of Humanity",
      description:
        "Artificial Intelligence (AI) is the simulation of human intelligence in machines designed to think, learn, and make decisions.",

      date: "2024-12-29",
      imageUrl: "../Ai.jpeg",
    },

    {
      id: "2",
      title: "C Unleashed: The Foundation of Modern Programming",
      description:
        "C is a powerful and versatile programming language that serves as the foundation for many modern technologies and systems",
      date: "2024-12-29",
      imageUrl: "../C.png",
    },

    {
      id: "3",
      title: "C++ Demystified: The Language of Modern Software Development",
      description:
        "C++ is a versatile and powerful programming language that combines the efficiency of C with the added benefits of object-oriented and generic programming",
      date: "2024-12-29",
      imageUrl: "../C++.png",
    },

    {
      id: "4",
      title: "CSS: Designing the Web with Style and Precision",
      description:
        "CSS (Cascading Style Sheets) is a cornerstone technology for web development, used to control the layout, styling, and visual presentation of web pages",
      date: "2024-12-29",
      imageUrl: "../Css.jpeg",
    },

    {
      id: "5",
      title: "HTML: The Backbone of the Web",
      description:
        "HTML (HyperText Markup Language) is the standard language for creating web pages and applications",
      date: "2024-12-29",
      imageUrl: "../Html.jpeg",
    },

    {
      id: "6",
      title: "Java: Powering the Modern Digital World",
      description:
        "Java is a high-level, object-oriented programming language known for its portability, scalability, and security",
      date: "2024-12-29",
      imageUrl: "../Java.png",
    },

    {
      id: "7",
      title: "JavaScript: Bringing the Web to Life",
      description:
        "JavaScript is a versatile, high-level programming language primarily used to create dynamic and interactive content on websites",
      date: "2024-12-29",
      imageUrl: "../Javascript.jpeg",
    },

    {
      id: "8",
      title: "Next.js: Building the Future of React Applications",
      description:
        "Next.js is a popular React framework that enables developers to build fast, scalable, and SEO-friendly web applications",
      date: "2024-12-29",
      imageUrl: "../Nextjs.png",
    },

    {
      id: "9",
      title: "Python: The Language of Simplicity and Power",
      description:
        "Python is a high-level, general-purpose programming language known for its simplicity and readability",
      date: "2024-12-29",
      imageUrl: "../Python.png",
    },

    {
      id: "10",
      title: "React: Building Dynamic User Interfaces with Ease",
      description:
        "React is a popular JavaScript library developed by Facebook for building user interfaces",
      date: "2024-12-29",
      imageUrl: "../React.png",
    },

    {
      id: "11",
      title: "TypeScript: Enhancing JavaScript with Strong Typing",
      description:
        "TypeScript is a superset of JavaScript that introduces static typing, enabling developers to catch errors early and improve code quality",
      date: "2024-12-29",
      imageUrl: "../Typescript.jpeg",
    },
  ];
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
        {" "}
        Exploring the World of AI and Technology{" "}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
           <BlogCard post={post} isDarkBackground={index % 2 === 0}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
