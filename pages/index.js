import Arrivals from "../components/Home/Arrivals";
import Category from "../components/Home/Category";
import Deals from "../components/Home/Deals";
import Hero from "../components/Home/Hero";
export default function Home() {
  return (
    <section className="z-0">
      <Hero />
      <Category />
      <Arrivals />
      <Deals />
    </section>
  );
}
