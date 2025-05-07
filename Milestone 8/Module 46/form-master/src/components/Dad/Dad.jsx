import MySelf from "../MySelf/MySelf"
import Brother from './../Brother/Brother';
import Sister from './../Sister/Sister';


function Dad() {
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex">
                <MySelf />  
                <Brother />
                <Sister /> 
            </section>
        </div>
    )
}

export default Dad
