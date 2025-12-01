import { useRef } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const Index = () => {
  const bookingRef = useRef<HTMLElement>(null);

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <MobileNav onBookNow={scrollToBooking} />
      <Hero onBookNow={scrollToBooking} />
      <Services />
      <BookingForm ref={bookingRef} />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
