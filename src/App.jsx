import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import { useState } from "react";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col max-w-7xl mx-auto">
      <Header onSearch={setSearchText} />
      <main className="flex-1 p-4 mt-2">
        <Outlet context={{ searchText, currentPath: location.pathname }} />
      </main>
    </div>
  );
};

export default App;
