import AuthoreCard from "@/components/AuthoreCard";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Mega from "@/components/Mega";
import NavBar from "@/components/NavBar";
import React from "react";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Feature/>
      <Mega/>
      <AuthoreCard />
      <Footer/>
    </div>

  );
}