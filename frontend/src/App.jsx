import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Loans from "./pages/Loans";
import History from "./pages/History";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">

        {/* Sidebar left */}
        <Sidebar />

        {/* Right-hand content */}
        <div className="flex flex-col flex-1">

          {/* Navbar up */}
          <Navbar />

          {/* Pages */}
          <div className="flex-1 p-4 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/inventario" element={<Inventory />} />
              <Route path="/prestamos" element={<Loans />} />
              <Route path="/historial" element={<History />} />
            </Routes>
          </div>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;