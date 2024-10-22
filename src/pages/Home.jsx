import React from "react";
import Header from "../components/Header";
import AllAlarm from "../components/HomeComponents/AllAlarm";
import HomeMachines from "../components/HomeComponents/HomeMachines";
import UpcomingOrders from "../components/HomeComponents/UpcomingOrders";
import HomeAppointments from "../components/HomeComponents/HomeAppointments";
import Footer from "../components/Footer";

function Home() {
  return (
    <section className="bg-white">
      <Header />
      <div className="lg:grid grid-cols-7  mb-2">
        <AllAlarm />
        <HomeMachines />
      </div>
      <UpcomingOrders />
      <HomeAppointments />
      <Footer />
    </section>
  );
}

export default Home;
