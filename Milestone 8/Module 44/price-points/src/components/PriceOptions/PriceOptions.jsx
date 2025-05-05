import { useEffect, useState } from "react"
import PriceOption from '../PriceOption/PriceOption';

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
          priceOptions.map((option) => (
            <PriceOption
              key={option.id}
              option={option}
            ></PriceOption>
          )
        )
        }
      </div>
    );
}

export default PriceOptions
