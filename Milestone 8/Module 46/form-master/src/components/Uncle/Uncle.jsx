import Cousin from "../Cousin/Cousin"


function Uncle({asset}) {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin asset={asset} name="Kochi" />
                <Cousin name="Babu" />
            </section>
        </div>
    )
}

export default Uncle
