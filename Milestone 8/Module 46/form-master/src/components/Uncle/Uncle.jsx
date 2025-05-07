import Cousin from "../Cousin/Cousin"


function Uncle() {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name="Kochi" />
                <Cousin name="Babu" />
            </section>
        </div>
    )
}

export default Uncle
