import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./routes/AllRoutes";
import Loading from "./components/Loading"

function App() {
  return (
    <div>
      <Navbar/>
      <AllRoutes />
    </div>
  );
}

export default App;
