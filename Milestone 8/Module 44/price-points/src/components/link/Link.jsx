import PropTypes from "prop-types";

function Link({ route }) {
  return (
    <div>
      <li>
        <a className="mr-10" href={route.path}>
          {route.name}
        </a>
      </li>
    </div>
  );
}

Link.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Link;
