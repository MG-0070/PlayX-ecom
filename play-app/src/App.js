import "./App.css";
import { Toast } from "./Components";
import { Navbar } from "./Components/Navbar/Navbar";
import Routespath from "./Route/Routepath";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Toast />
     <Routespath />
    </div>
  );
}

export default App;
