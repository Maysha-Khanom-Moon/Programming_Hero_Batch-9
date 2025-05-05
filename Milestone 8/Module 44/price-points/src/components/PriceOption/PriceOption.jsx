import PropTypes from 'prop-types'

function PriceOption({ option }) {
  return (
    <div>
      <h1>{option.name}</h1>
    </div>
  );
}

PriceOption.propTypes = {
    option: PropTypes.object.isRequired
}

export default PriceOption

