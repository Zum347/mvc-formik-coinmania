import React, { useEffect, useState } from "react";
import MainPageView from "./../views/MainPageView";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const MainPageController = () => {
  const [coins, setCoins] = useState([]);
  const [popular, setPopular] = useState(null);

  const [params] = useSearchParams();

  const page = params.get("page");
  useEffect(() => {
    axios
      .get(`/assets?limit=15&offset=${page ? page : 1}`)
      .then((res) => {
        setCoins(coins.concat(res.data.data));
        if (!popular) {
          setPopular(res.data.data.slice(0, 4));
        }
      })
      .catch((err) => console.log(err));
  }, [params]);
  return <MainPageView popular={popular} coins={coins} />;
};

export default MainPageController;