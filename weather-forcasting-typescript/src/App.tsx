import React, {useState} from "react";
import { Typography } from "@material-ui/core";
import City from './components/City/cityPicker'

const App = () => {
  const [nx, setNx] = useState(0)
  const [ny, setNy] = useState(0)
  const CityChange = (cityNx: React.SetStateAction<number>, cityNy: React.SetStateAction<number>) => {
    setNx(cityNx)
    setNy(cityNy)
    console.log(nx, ny)
  }
  return(
    <div>
      <Typography>Hello Typescript</Typography>
      <City CityChange = {CityChange} />
    </div>
  )
}

export default App;
