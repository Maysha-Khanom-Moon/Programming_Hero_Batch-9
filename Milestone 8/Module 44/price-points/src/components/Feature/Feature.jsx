import PropTypes from 'prop-types'

function Feature({feature}) {
  return (
    <div>
      <li className="text-sm text-gray-300">
        {feature}
      </li>
    </div>
  );
}

Feature.propTypes = {
    features: PropTypes.string.isRequired
}

export default Feature

