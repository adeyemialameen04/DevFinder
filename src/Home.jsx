import React from "react";
import useFetchData from "./utils/useFetchData";
import { useEffect } from "react";
import Header from "./components/header/Header";

const Home = () => {
  const { data, isLoading, isError, error } = useFetchData("adeyemialameen04");

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;
