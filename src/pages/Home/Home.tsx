import FeaturedRooms from "../../components/FeaturedRooms/FeaturedRooms";
import Footer from "../../components/Footer";
import LandingPage from "../../components/LandingPage";
import Services from "../../components/Services";

export default function Home() {
  return (
    <section>
      <LandingPage />
      <Services />
      <FeaturedRooms />
      <Footer />
    </section>
  );
}
