import { useEffect, useState } from "react"

function Phones() {

    const [phones, setPhones] = useState([]);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
          .then((res) => res.json())
          .then((data) => setPhones(data.data));
    }, [])

    return (
        <div className="mx-10 mb-20">
            <h2 className="text-4xl font-bold">Phones: {phones.length}</h2>
        </div>
    )
}

export default Phones
