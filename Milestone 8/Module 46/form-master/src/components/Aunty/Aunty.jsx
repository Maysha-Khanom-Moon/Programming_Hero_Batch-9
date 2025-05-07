import Cousin from "../Cousin/Cousin"

function Aunty() {
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={"Manik"} />
                <Cousin name={"Hira"} />
            </section>
        </div>
    )
}

export default Aunty
