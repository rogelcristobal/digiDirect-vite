
import { useLocation} from "react-router-dom";
import Login from "./components/Login";
import { useEffect } from "react";
function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Login />
  );
}

export default App;
