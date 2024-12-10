
import { LastCustomers } from "./components/LastCustomers";


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
