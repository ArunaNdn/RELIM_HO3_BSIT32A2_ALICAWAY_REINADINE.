import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PropsPage from "./PropsPage";
import TodoList from "./TodoList";
import Navbar from "./Navbar"; // ✅ Import Navbar
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Import Bootstrap

export default function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Navbar is included */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/props"
            element={
              <PropsPage
                name="ALL ABOUT PROGRAMMER"
                academicBackground={{
                  primary: "Muntinlupa Elementary School (MES)",
                  secondary: [
                    "Muntinlupa National HighSchool-Main (MNHS-Main)",
                    "Lyceum of Alabang-Shs (LOA)",
                  ],
                  tertiary: "Lyceum of Alabang-College (LOA)",
                }}
                activities={["LACES", "SSC", "Red Cross"]}
                skills={[
                  "Time Management",
                  "Computer Skills",
                  "Research",
                  "Active Listening",
                ]}
              />
            }
          />
          <Route path="/todo" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
}
