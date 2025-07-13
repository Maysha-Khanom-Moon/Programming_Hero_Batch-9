import GoogleMapReact from "google-map-react";
import { FaHouseUser } from "react-icons/fa";

const AnyReactComponent = ({ text }) => <div style={{ color: "white" }}>{text}</div>;
import "./App.css";

function App() {
  const defaultProps = {
    center: {
      lat: 24.374,
      lng: 88.6011,
    },
    zoom: 11,
  };

  return (
    <>
      // Important! Always set the container height explicitly
      <div style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={defaultProps.center.lat} lng={defaultProps.center.lng} text={<FaHouseUser />} />
        </GoogleMapReact>
      </div>
    </>
  );
}

export default App;
