import PropTypes from "prop-types";

function Link({ route }) {
  return (
    <div>
      <li className="w-24 md:w-fit">
        <a className="md:mr-10 shadow-sm md:shadow-none hover:bg-amber-500 rounded-md p-1" href={route.path}>
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
