import Navbar from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <div className="flex justify-center h-[89vh] md:h-[86vh]">
        <div className="h-[89vh] md:h-[86vh] w-[90%]">
          <Hero />
        </div>
      </div>
    </>
  );
}
