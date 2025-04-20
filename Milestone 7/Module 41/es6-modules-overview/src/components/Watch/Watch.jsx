import * as Calculate from '../../utils/calculate';
import './Watch.css'

function Watch({watch}) {

    const first = 55;
    const second = 199;
    const Sum = Calculate.Add(first, second);
    const Multi = Calculate.Multiply(first, second);
    const Div = Calculate.DivideTheFirstNumberByTheSecondNumber(first, second);


    return (
        <div className='watch'>
            <p>Watch: {watch.name}</p>
            <p>Price: {watch.price}</p>
        </div>
    )
}

export default Watch