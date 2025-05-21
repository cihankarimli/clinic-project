import Header from "@/components/Header";
import LatestUptude from "@/components/LatestUptude";
import MeetDoctor from "@/components/MeetDoctor";
import Navbar from "@/components/Navbar";
import ServicesCard from "@/components/ServicesCard";
import SliderDoctors from "@/components/SliderDoctors";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <ServicesCard />
      <MeetDoctor />
      <LatestUptude />
      <SliderDoctors />
    </>
  );
}
