import Special from "../Special/Special"


function Cousin({name, asset}) {
  return (
    <div>
      <h2>Cousin</h2>
      <p>{name}</p>
      <section>
        {
          asset && <Special asset={asset} />
        }
      </section>
    </div>
  )
}

export default Cousin
