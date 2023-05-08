import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { RoomsContext } from "../../context/SearchRoomsContext";

interface SingleRoomParams {
  roomId: number | undefined;
}

export default function SingleRoom() {
  const { rooms } = useContext(RoomsContext);
  const { roomId } = useParams<SingleRoomParams>();
  console.log(roomId);

  const filteredRooms = rooms.filter((room) => {
    return room.id === roomId;
  });

  return (
    <section>
      <article></article>
    </section>
  );
}
