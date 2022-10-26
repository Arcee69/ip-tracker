import React from "react";
import background from "./asset/images/pattern-bg.png"
import Search from "./components/Search";
import StreetMap from "./components/StreetMap";

function App() {
  return (
      <div className="w-full">
        <div className="w-full h-64" style={{ backgroundImage: `url(${background})` }}>
          <div className="flex flex-row justify-center">
            <div className="text-3xl font-bold mt-4 text-white">IP Address Tracker</div>
          </div>
          <Search />
        </div>
        <StreetMap />
      </div>
  );
}

export default App;
