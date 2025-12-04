import Navbar from "@/components/Navbar";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

const Booking = () => {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      <BookingForm />
      <Footer />
    </main>
  );
};

export default Booking;
