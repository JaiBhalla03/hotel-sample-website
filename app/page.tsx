import Booking from "./components/Booking";
import Culture from "./components/Culture";
import Facilities from "./components/Facilities";
import Feedback from "./components/Feedback";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero/>
      <Booking/>
      <Facilities/>
      <Culture/>
      <Feedback/>
    </div>
  );
}