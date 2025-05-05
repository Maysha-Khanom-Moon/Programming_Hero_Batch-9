import DaisyNav from "./components/daisy_nav/DaisyNav";
import Navbar from "./components/navbar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <DaisyNav></DaisyNav>
      <Navbar></Navbar>

      <span className="my-20"></span>

      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;
