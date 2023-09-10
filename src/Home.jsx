import React from "react";
import useFetchData from "./utils/useFetchData";
import { useEffect } from "react";
import Header from "./components/header/Header";
import User from "./components/user/User";

const Home = () => {
  const { data, isLoading, isError, error } = useFetchData("adeyemialameen04");

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <main>
      <Header loading={isLoading} />
      <User user={data} />
    </main>
  );
};

export default Home;
