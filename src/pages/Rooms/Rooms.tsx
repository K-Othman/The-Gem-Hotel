import Footer from "../../components/Footer/Footer";
import RoomsBanner from "../../components/RoomsBanner/RoomsBanner";
import SearchRooms from "../../components/SearchRooms/SearchRooms";

export default function Rooms() {
  return (
    <section>
      <RoomsBanner />
      <SearchRooms />
      <Footer />
    </section>
  );
}
