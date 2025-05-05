import DaisyNav from "./components/daisy_nav/DaisyNav";
import Navbar from "./components/navbar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <DaisyNav></DaisyNav>
      <Navbar></Navbar>

      <span className="my-20"></span>

      <h2 className="text-4xl font-bold text-center mb-6">Choose Your Plan</h2>
      <PriceOptions></PriceOptions>

      <h2 className="text-4xl font-bold mx-10 my-16">Recharts</h2>
    </>
  );
}

export default App;
