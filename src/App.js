import { Link } from "react-router-dom";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Link to="/home" className="block p-5 bg-neutral-100">
        <div className="bg-neutral-500 p-5">
          <h1 className="font-bold text-black text-sm">hello world</h1>
          <h1 className="font-bold text-black text-sm">hello adesh</h1>
        </div>
      </Link>
    </BrowserRouter>
  );
}

export default App;
