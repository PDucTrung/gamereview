import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectGameById } from "../../store/features/product/product.slice";
import GameDetail from "./game-detail/GameDetail";

const Detail = () => {
  const { gameId } = useParams();
  const game = useSelector(selectGameById(gameId));
  return (
    <div className="detail">
      <GameDetail game={game}></GameDetail>
    </div>
  );
};

export default Detail;
