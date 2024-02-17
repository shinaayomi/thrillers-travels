import React, { useState } from "react";
import SidebarNav from "./SidebarNav";
import Flights from "@/containers/Flights";

export default function PageLayout() {
  const [activeBtn, setActiveBtn] = useState("FLIGHTS");
  function renderComponents() {
    switch (activeBtn) {
      case "FLIGHTS":
        return <Flights />;

      default:
        break;
    }
  }

  return (
    <main>
      <SidebarNav activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
      <section className="ml-[280px] p-8">{renderComponents()}</section>
    </main>
  );
}
