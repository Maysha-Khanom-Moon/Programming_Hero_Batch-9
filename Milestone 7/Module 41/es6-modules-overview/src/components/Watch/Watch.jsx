import * as Calculate from '../../utils/calculate';
import './Watch.css'

function Watch({watch, handleAddToCart}) {

    const first = 55;
    const second = 199;
    const Sum = Calculate.Add(first, second);
    const Multi = Calculate.Multiply(first, second);
    const Div = Calculate.DivideTheFirstNumberByTheSecondNumber(first, second);

    return (
        <div className='watch'>
            <p>Watch: {watch.model}</p>
            <p>Price: ${watch.price}</p>
            <button style={{backgroundColor: 'tomato', color: 'white'}} onClick={() => handleAddToCart(watch.id)}>Add to Cart</button>
        </div>
    )
}

export default Watch