import FeaturedRooms from "../../components/FeaturedRooms/FeaturedRooms";
import Footer from "../../components/Footer/Footer";
import LandingPage from "../../components/LandingPage/LandingPage";
import Services from "../../components/Services/Services";

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
