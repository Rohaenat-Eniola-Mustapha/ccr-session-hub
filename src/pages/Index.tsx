import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import BookingForm from "@/components/BookingForm";
import ContactPreview from "@/components/ContactPreview";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      <Hero onBookNow={() => {
        const bookingSection = document.getElementById("booking-section");
        bookingSection?.scrollIntoView({ behavior: "smooth" });
      }} />
      <AboutUs />
      <Services />
      <div id="booking-section">
        <BookingForm />
      </div>
      <ContactPreview />
      <Footer />
    </main>
  );
};

export default Index;
