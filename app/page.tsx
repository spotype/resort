import Cover from "@/components/Cover";
import Documents from "@/components/Documents";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Product from "@/components/Product";
import Star from "@/components/Star";
import Swiper from "@/components/Swiper";
export default function Home() {
  return (
    <main className="">
      <Header />
      <Cover />
      <Product />
      <Features />
      <Star />
      <Swiper />
      <Documents />
    </main>
  );
}
