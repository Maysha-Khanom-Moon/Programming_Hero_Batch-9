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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-10">
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
