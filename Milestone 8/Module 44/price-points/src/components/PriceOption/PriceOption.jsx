import PropTypes from 'prop-types'

function PriceOption({ option }) {
  return (
    <div className="py-10 p-4 rounded-lg shadow-lg bg-black hover:bg-green-950 transition-bg duration-300 text-white cursor-pointer text-center flex flex-col justify-center items-center gap-5">
      <h2 className="text-2xl font-bold">{option.name}</h2>
      <p className="text-xl">
        {option.price} / <span className="text-sm">{option.duration}</span>
      </p>

      <div className='ul  text-left'>
        {
          option.features.map((feature, index) => (
            <li key={index} className="text-md text-gray-300">
              {feature}
            </li>
          )
        )
        }
      </div>
    </div>
  );
}

PriceOption.propTypes = {
    option: PropTypes.object.isRequired
}

export default PriceOption

