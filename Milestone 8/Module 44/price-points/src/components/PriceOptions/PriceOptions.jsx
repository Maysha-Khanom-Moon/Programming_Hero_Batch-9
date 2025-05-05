import { useEffect } from "react"

function PriceOptions() {
  
    useEffect(() => {
        fetch('price-options.json')
        .then(res => res.json())
        .then(data => console.log(data));
      }, []);
  
    return (
    <div>
      
    </div>
  )
}

export default PriceOptions
