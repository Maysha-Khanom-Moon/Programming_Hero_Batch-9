import Special from "../Special/Special"
import Friend from "../Friend/Friend"


function Cousin({name, asset}) {
  return (
    <div>
      <h2>Cousin</h2>
      <p>{name}</p>
      <section>
        {
          asset && <Special asset={asset} />
        }
        {name === "Manik" && <Friend></Friend>}
      </section>
    </div>
  )
}

export default Cousin
