import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./components/Read";
import Create from "./components/Create";
import Update from "./components/Update";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import ViewEmployeedata from "./components/ViewEmployeedata";
import { useState,useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
      console.log(items);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Signin />} />
          {items && <Route path="/Read" element={<Read />} />}
          <Route path="/Create" element={<Create />} />
          <Route path="/Update" element={<Update />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/viewemployeedata" element={<ViewEmployeedata />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
