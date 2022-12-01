import React from "react";
import { Container, Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import GameCard from "../../components/game-card/GameCard";
import {
  selectGameList,
  selectGames,
} from "../../store/features/product/product.slice";
import "./Home.css";

const Home = () => {
  const { games, currentPage, totalPage, pageChanged } =
    useSelector(selectGameList);
  const dispatch = useDispatch();
  // pagination
  const paginationItems = new Array(totalPage)
    .fill(null)
    .map((value, index) => (
      <Pagination.Item
        key={index}
        active={index === currentPage}
        onClick={() => dispatch(pageChanged(index))}
      >
        {index + 1}
      </Pagination.Item>
    ));
  return (
    <Container>
      <div className="game-list d-flex flex-wrap align-items-center justify-content-center gap-5">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      <div className="pagination-game-list">
        <Pagination>{paginationItems}</Pagination>
      </div>
      <br></br>
    </Container>
  );
};

export default Home;
