import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import Areas from "@/app/components/Suburbs";
import Testimonials from "@/app/components/Testimonials";
import Booking from "@/app/components/Booking";
import ClickToCall from "@/app/components/ClickToCall";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Areas />
        <Testimonials />
        <Booking />
      </main>
      <ClickToCall />
      <Footer />
    </>
  );
}
