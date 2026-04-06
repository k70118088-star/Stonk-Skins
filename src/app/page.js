import CategorySection from "@/components/CategorySection";
import Hero from "@/components/Hero";
import HowWorks from "@/components/HowWorks";
import Questions from "@/components/Questions";
import Start from "@/components/Start";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (

    <>
      <Hero />
      <CategorySection />
      <HowWorks />
      <Testimonials />
      <Questions />
      <Start />
    </>
  );
}
