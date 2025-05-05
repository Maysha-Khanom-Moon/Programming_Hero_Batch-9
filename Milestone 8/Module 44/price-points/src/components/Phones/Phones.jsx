import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { useEffect, useState } from "react"

function Phones() {

    const [phones, setPhones] = useState([]);

    useEffect(() => {
        // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
        //   .then((res) => res.json())
        //   .then((data) => setPhones(data.data));

        axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
            .then(res => {
                const phonesData = res.data.data;

                // intercepting the data
                const phonesWithFakeData = phonesData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split("-")[1]),
                    }

                    return obj;
                })

                console.log(phonesWithFakeData);
                setPhones(phonesWithFakeData);
            })
            
    }, [])

    return (
      <div className="mx-10 mb-20">
        <h2 className="text-4xl font-bold">Phones: {phones.length}</h2>

        <BarChart width={600} height={400} data={phones}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
      </div>
    );
}

export default Phones
