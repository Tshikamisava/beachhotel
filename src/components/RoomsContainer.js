import React from "react";
import RoomsList from "./RoomsList";
import RoomsFilter from "./RoomFilter"; // Add this import
import { withRoomConsumer} from "../context";
import Loading from "./Loading";
import '../App.css';


function RoomsContainer ({context}){
  const {loading, sortedRooms, rooms} = context;

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />

    </div>
  )

}

export default withRoomConsumer(RoomsContainer)






// / import React from "react";
// import RoomsList from "./RoomsList";
// import RoomsFilter from "./RoomsFilter"; // Add this import
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";

// function RoomsContainer() {
//   // const { loading, sortedRooms, rooms } = context;

//   return(
//   <RoomConsumer>
//   {value => {
//     const {loading,sortedRooms,rooms} = value

//     if(loading){
//       return <Loading/>
//     }

//     return (
//       <div>
//         Hello from rooms
//         <RoomsFilter rooms={rooms} />
//         <RoomsList rooms={sortedRooms}/>
//       </div>
//     );
//   }}
//   </RoomConsumer>
//   );
// }
// export default RoomsContainer;
