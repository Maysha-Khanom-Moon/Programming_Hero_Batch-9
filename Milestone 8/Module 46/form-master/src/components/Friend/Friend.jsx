import { useContext } from "react"
import { AssetContext } from "../Grandpa/Grandpa"


function Friend() {

  const gift = useContext(AssetContext);

  return (
    <div>
        <h3>Friend</h3>
        <p>has: {gift}</p>
    </div>
  )
}

export default Friend
