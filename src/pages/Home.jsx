import React from "react";
import { useSelector } from "react-redux";
import DataFilterComponent from "../components/DataFilterComponent";
function Home() {
  const data = useSelector((state) => state.item.items);
  return (
    <div>
      <DataFilterComponent data={data} />
    </div>
  );
}

export default Home;
