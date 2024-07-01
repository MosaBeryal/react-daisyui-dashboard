import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="drawer drawer-mobile lg:drawer-open fixed bg-[rgb(14,5,34)]">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-[#f4f2f2] rounded-none md:rounded-3xl h-screen overflow-y-scroll">
        {/* Page content here */}
        <div className="flex flex-col">
          {/* Navbar Section */}
          <Navbar />
          {/* Main Content */}
          <Home />
        </div>
      </div>
      {/* Sidebar */}
      <Sidebar />
    </div>
  );
}
export default App;
