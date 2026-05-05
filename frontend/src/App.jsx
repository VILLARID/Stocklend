import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Loans from "./pages/Loans";
import History from "./pages/History";


function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventario" element={<Inventory />} />
            <Route path="/prestamos" element={<Loans />} />
            <Route path="/historial" element={<History />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;