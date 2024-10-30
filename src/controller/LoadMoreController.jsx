import React from "react";
import LoadMoreView from "../views/LoadMoreView";
import { useSearchParams } from "react-router-dom";

const LoadMoreController = () => {
  const [params, setParams] = useSearchParams();
  const handleClick = () => {
    const pageNumber = params.get("page") || 1;
    setParams({ page: Number(pageNumber) + 1 });
    console.log(pageNumber);
  };
  return <LoadMoreView handleClick={handleClick} />;
};

export default LoadMoreController;