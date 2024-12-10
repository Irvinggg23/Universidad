import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import CardSummary from "./components/CardSummary/CardSummary";
import { BookOpenCheck, UsersRound, Waypoints } from "lucide-react";
import { LastCustomers } from "./components/LastCustomers";
import { Salesdistributor } from "./components/Salesdistributor";

export const dataCardSummary = [
  {
  icon: UsersRound,
  total: "12.450",
  average: 15,
  title:"Companies Created",
  tooltipText: "See all of the companies created"
  },
  {
  icon: Waypoints,
  total: "86.5",
  average: 80,
  title:"Total Revenue",
  tooltipText: "Se all of the summary"
  },
  {
  icon: BookOpenCheck,
  total: "$363.95",
  average: 30,
  title:"Bounce Rate",
  tooltipText: "Se all of the Bounce rate"
  }
]
export default function Home() {
  return (
    <div>
      <h2 className="text-2xl mb-4">DashBoard</h2>
      
      <div className="grid grid-cols-1 mt-12 xl:grid-cols-2 md:gap-x-10">
        <LastCustomers />
        
      </div>
    </div>
  );
}
