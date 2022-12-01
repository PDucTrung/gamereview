import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addItem } from "../../store/features/favorite/favorite.slice";
import "./GameCard.css";

const GameCard = ({ game }) => {
  const dispatch = useDispatch();
  const handleAddToCartClick = () => {
    dispatch(addItem({ gameId: game.id, quantity: 1 }));
  };
  return (
    <div className="game position-relative">
      <NavLink
        className="text-decoration-none text-black d-flex flex-column justify-content-center align-items-center gap-3"
        to={`./detail/${game.id}`}
      >
        <div className="img-thumb">
          <img src={game.thumbnail} alt={game.title} />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="name text-wrap">{game.title}</div>
          <div className="genre text-gray">
            <strong>Genre:</strong> {game.genre}
          </div>
          <div className="platform text-gray">
            <strong>Platform:</strong> {game.platform}
          </div>
          <div className="publisher text-gray">
            <strong>Publisher:</strong> {game.publisher}
          </div>
          <div className="developer text-gray">
            <strong>Developer:</strong> {game.developer}
          </div>
          <div className="release-date text-gray">
            <strong>Release date:</strong> {game.release_date}
          </div>
        </div>
      </NavLink>
      <div
        className="favorite position-absolute"
        onClick={handleAddToCartClick}
      >
        <i className="bi bi-bookmark-heart-fill"></i>
      </div>
    </div>
  );
};

export default GameCard;
