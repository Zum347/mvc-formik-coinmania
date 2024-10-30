import React from "react";
import { useNavigate } from "react-router-dom";

const CardView = ({ data }) => {
  console.log(data);
  const navigate = useNavigate();
  return (
    <div
      className="cardd d-flex flex-column border rounded p-3"
      onClick={() => navigate(`/coin/${data.id}`)}
    >
      <div>
        <h3>{data.name}</h3>
        <h6>{data.symbol}</h6>
        <p>{Number(data.priceUsd).toFixed(2)}</p>
      </div>
      <p className="d-flex flex-column">
        <span>Günlük Değişim</span>

        <span className={data.changePercent24Hr >= 0 ? "up" : "down"}>
          %{Number(data.changePercent24Hr).toFixed(2)}
        </span>
      </p>
    </div>
  );
};

export default CardView;