"use client";
import React from "react";
import { useRouter, useParams } from "next/navigation";
import CommentSection from "@/components/CommentSection";
import AuthorCard from "@/components/AuthoreCard";

const posts = [
  {
    id: 1,
    title: "The Age of AI: Shaping the Future of Humanity",
    description:
      "Artificial Intelligence (AI) is the simulation of human intelligence in machines designed to think, learn, and make decisions.",
    image: "/Ai.jpeg",
  },
 
  {
    id: 2,
    title: "C Unleashed: The Foundation of Modern Programming",
    description:
      "C is a powerful and versatile programming language that serves as the foundation for many modern technologies and systems",
    imageUrl: "../C.png",
  },

  {
    id: 3,
    title: "C++ Demystified: The Language of Modern Software Development",
    description:
      "C++ is a versatile and powerful programming language that combines the efficiency of C with the added benefits of object-oriented and generic programming",
    imageUrl: "../C++.png",
  },

  {
    id: 4,
    title: "CSS: Designing the Web with Style and Precision",
    description:
      "CSS (Cascading Style Sheets) is a cornerstone technology for web development, used to control the layout, styling, and visual presentation of web pages",
   imageUrl: "../Css.jpeg",
  },

  {
    id: 5,
    title: "HTML: The Backbone of the Web",
    description:
      "HTML (HyperText Markup Language) is the standard language for creating web pages and applications",
    imageUrl: "../Html.jpeg",
  },

  {
    id: 6,
    title: "Java: Powering the Modern Digital World",
    description:
      "Java is a high-level, object-oriented programming language known for its portability, scalability, and security",
    imageUrl: "../Java.png",
  },

  {
    id: 7,
    title: "JavaScript: Bringing the Web to Life",
    description:
      "JavaScript is a versatile, high-level programming language primarily used to create dynamic and interactive content on websites",
    imageUrl: "../Javascript.jpeg",
  },

  {
    id: 8,
    title: "Next.js: Building the Future of React Applications",
    description:
      "Next.js is a popular React framework that enables developers to build fast, scalable, and SEO-friendly web applications",
    imageUrl: "../Nextjs.png",
  },

  {
    id: 9,
    title: "Python: The Language of Simplicity and Power",
    description:
      "Python is a high-level, general-purpose programming language known for its simplicity and readability",
    imageUrl: "../Python.png",
  },

  {
    id: 10,
    title: "React: Building Dynamic User Interfaces with Ease",
    description:
      "React is a popular JavaScript library developed by Facebook for building user interfaces",
    imageUrl: "../React.png",
  },

  {
    id: 11,
    title: "TypeScript: Enhancing JavaScript with Strong Typing",
    description:
      "TypeScript is a superset of JavaScript that introduces static typing, enabling developers to catch errors early and improve code quality",
    imageUrl: "../Typescript.jpeg",
  },

];

export default function Post() {
  const router = useRouter();
  const { id } = useParams();
  const post = posts.find((p) => p.id.toString() === id);

  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
        {post.title}
      </h1>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-md mt-4"
        />
      )}
      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>
      <CommentSection postId={post.id.toString()} />
      <AuthorCard />
    </div>
  );
}
