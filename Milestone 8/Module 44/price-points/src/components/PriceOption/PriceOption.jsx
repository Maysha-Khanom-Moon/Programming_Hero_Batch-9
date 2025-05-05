import PropTypes from 'prop-types'
import Feature from '../Feature/Feature'

function PriceOption({ option }) {
  return (
    <div className="py-10 p-4 rounded-lg shadow-lg bg-black hover:bg-green-950 transition-bg duration-300 text-white cursor-pointer text-center flex flex-col justify-center items-center gap-5">
      <h2 className="text-2xl font-bold">{option.name}</h2>
      <p className="text-xl"><span className='text-sm'>BDT </span> 
        {option.price} / <span className="text-sm">{option.duration}</span>
      </p>

      <div className='ul w-2/3 text-left list-disc list-inside'>
        {
          option.features.map((feature, index) => (
            <Feature key={index} feature={feature}></Feature>
          )
        )
        }
      </div>

      <button className="bg-neutral-700 hover:bg-blue-800 transition-bg duration-300 text-white py-2 px-4 rounded-lg mt-5">Buy Now</button>
    </div>
  );
}

PriceOption.propTypes = {
    option: PropTypes.object.isRequired
}

export default PriceOption

