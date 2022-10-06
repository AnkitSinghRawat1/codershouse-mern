import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Shared/Navigation/Navigation";
import GuestRoute from "./utility/ProtectedRoutes/GuestRoute";
import SemiProtectedRoutes from "./utility/ProtectedRoutes/SemiProtectedRoutes";
import ProtectedRoute from "./utility/ProtectedRoutes/ProtectedRoute";
import Home from "./Pages/Home/Home";
import Activate from "./Pages/Activate/Activate";
import Authenticate from "./Pages/Authenticate/Authenticate";
import Rooms from "./Pages/Rooms/Rooms";
import "./App.css";
import { useLoadingWithRefresh } from "./hooks/useLoadingWithRefresh";
import Loader from "./components/Shared/Loader/Loader";
import Room from "./Pages/Room/Room";

function App() {
  // call refresh endpoint
  const { loading } = useLoadingWithRefresh();
  return loading ? (
    <Loader message='Loading please wait'/>
  ) : (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/" element={<GuestRoute />}>
            <Route path="/authenticate" element={<Authenticate />} />
          </Route>
          <Route path="/activate" element={<SemiProtectedRoutes />}>
            <Route path="/activate" element={<Activate />} />
          </Route>
          <Route path="/rooms" element={<ProtectedRoute />}>
            <Route path="/rooms" element={<Rooms />} />
          </Route>
          <Route path="/room/:id" element={<ProtectedRoute />}>
            <Route path="/room/:id" element={<Room />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
