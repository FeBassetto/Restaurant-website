import Routing from "./routes";
import { ThemeProvider } from "@material-ui/core";


function App() {

  const themes = {
    colors:{
      //white
      white:"#ffffff",
      //black
      black:"#000000",
      //grey
      greyMenu:"#C8BFBF",
      lightGreyBackground:"#C4C4C4",
      darkGreyTxt:"#4D4D4D",
      darkGreyBorder:"#414141",
      //red
      red:"#C90000",
      //yellow
      lightYellow:"#FAAB34",
      darkYellow:"#D88200",
      gold:"#D88200",
      //green
      green:"#017E0D"
    }
  }

  return (
    <div className="App">
      <ThemeProvider theme={themes}>
        <Routing />
      </ThemeProvider>
    </div>
  );
}

export default App;
