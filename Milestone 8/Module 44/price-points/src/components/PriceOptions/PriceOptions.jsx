import { useEffect } from "react"
import PriceOptions from '../PriceOption/PriceOption';

function PriceOptions() {
  
    const [priceOptions, setPriceOptions] = useState([]);

    useEffect(() => {
        fetch('price-options.json')
        .then(res => res.json())
        .then(data => setPriceOptions(data));
      }, []);
  
    return (
    <div>
      {
        priceOptions.map((option) => <PriceOptions key={option.id} option={option} />)
      }
    </div>
  )
}

export default PriceOptions
