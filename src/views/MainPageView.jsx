import millify from "millify";
import React from "react";
import { FaBtc } from "react-icons/fa";
import LoadMoreController from "../controller/LoadMoreController";
import CardView from "./CardView";
import { useNavigate } from "react-router-dom";

const MainPageView = ({ coins, popular }) => {
  console.log(popular);

  const navigate = useNavigate();
  return (
    <div className="container-xl mt-5">
      <h3 className="d-flex align-items-center gap-3">
        <span>
          <FaBtc />
        </span>{" "}
        Bitcoin'in Yükselişi
      </h3>
      <p>
        Bitcoin, kripto para dünyasında büyük bir çıkış yakaladı. Son birkaç
        haftada değeri hızla arttı ve birçok yatırımcı tarafından ilgiyle takip
        ediliyor. Peki, bu yükseliş ne anlama geliyor?
      </p>
      <div className="d-flex gap-4 justify-content-around">
        {popular?.map((i) => (
          <CardView data={i} />
        ))}
      </div>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Fiyat</th>
            <th>Market Hacmi</th>
            <th>Değişim (24s)</th>
            <th>% Değişim (24s)</th>
          </tr>
        </thead>
        <tbody>
          {coins ? (
            coins.map((coin, id) => (
              <tr onClick={() => navigate(`/coin/${coin.id}`)} key={id}>
                <td>{id + 1}</td>
                <td>
                  <span className="text-warning text-nowrap fw-bold me-2">
                    {coin.symbol}
                  </span>
                  <span>{coin.name}</span>
                </td>
                <td>${millify(coin.priceUsd)}</td>
                <td>${millify(coin.marketCapUsd)}</td>
                <td>${millify(coin.volumeUsd24Hr)}</td>
                <td className={coin.changePercent24Hr >= 0 ? "up" : "down"}>
                  {millify(Number(coin.changePercent24Hr).toFixed(1))} %
                </td>
              </tr>
            ))
          ) : (
            <p>Yükleniyor</p>
          )}
        </tbody>
      </table>
      <LoadMoreController />
    </div>
  );
};

export default MainPageView;