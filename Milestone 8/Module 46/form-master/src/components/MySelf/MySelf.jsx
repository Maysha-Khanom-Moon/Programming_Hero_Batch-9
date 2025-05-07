import Special from "../Special/Special"


function MySelf({asset}) {
    return (
        <div>
            <h2>MySelf</h2>
            <section className="flex">
                <Special asset={asset} />
            </section>
        </div>
    )
}

export default MySelf
