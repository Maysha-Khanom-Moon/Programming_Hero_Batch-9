import './Sunglass.css'
import '../Watch/Watch.css'

import Watch from '../Watch/Watch'
import { Add, Multiply, DivideTheFirstNumberByTheSecondNumber as Divide } from '../../utils/calculate'

function Sunglass() {

    const first = 55;
    const second = 199;
    const Sum = Add(first, second);
    const Multi = Multiply(first, second);
    const Div = Divide(first, second);

    return (
        <div>
        
        </div>
    )
}

export default Sunglass
