import FeaturedRooms from "../components/FeaturedRooms";
import LandingPage from "../components/LandingPage";
import Services from "../components/Services";

export default function Home() {
  return (
    <section>
      <LandingPage />
      <Services />
      <FeaturedRooms />
    </section>
  );
}
