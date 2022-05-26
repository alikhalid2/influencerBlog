// import React & React-router-dom
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import other components
import TopBar from "./Components/TopBar/TopBar.jsx";
import Home from "./Pages/Home/Home.jsx";
import Single from "./Pages/Single/Single.jsx";
import Write from "./Pages/Write/Write.jsx";
import Settings from "./Pages/Settings/Settings.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";

// import style sheet
import "./app.css";
import { Context } from "./Context/Context.js";
import Admin from "./Pages/Admin/Admin.jsx";

function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route
          path="/post/:postId"
          element={user ? <Single /> : <Register />}
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
