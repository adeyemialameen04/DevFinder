import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "./constants";

const useFetchData = (endpoint) => {
  const getData = async () => {
    try {
      const fetchUrl = `${BASE_URL}/${endpoint}`;
      const response = await axios.get(fetchUrl);
      const data = await response.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const { data, isLoading, isError, error } = useQuery(
    ["data", endpoint],
    getData,
    { enabled: !!endpoint }
  );

  return { data, isLoading, isError, error };
};

export default useFetchData;
