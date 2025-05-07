import { createContext, useState } from 'react'
import Aunty from '../Aunty/Aunty'
import Dad from '../Dad/Dad'
import Uncle from '../Uncle/Uncle'
import './Grandpa.css'

// eslint-disable-next-line react-refresh/only-export-components
export const AssetContext = createContext('gold');
// eslint-disable-next-line react-refresh/only-export-components
export const MoneyContext = createContext(1000);

function Grandpa() {

  // prop drilling: Grandpa -> Dad -> Myself -> Special
  // Grandpa -> Uncle -> Cousin(Kochi) -> Special

  const asset = 'diamond';
  const [money, setMoney] = useState(0);

  const totalMoney = 20000;

  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <p>Money Left: {totalMoney - money}</p>

      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="gold">
          <section className="flex">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
}

export default Grandpa

/**
 * ### CONTEXT API - solution for prop drilling
 * --------------------------------------------
 * 1. Create a context and export it
 * 2. Add provider for the context with a value
 * 3. useContext to access the context
 */