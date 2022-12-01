import React from "react";
import { Container } from "react-bootstrap";

const GameDetail = ({ game }) => {
  console.log(game);
  return (
    <Container>
      <div className="game-detail">
        <div className="row">
          <div className="img-game-detail col-4">
            <div className="img-thumbnail-top">
              <img src={game.thumbnail} alt="" />
            </div>
            <div className="img-thumbanil-bottom"></div>
          </div>
          <div className="content-game-detail col-6 d-flex flex-column gap-2">
            <div className="name">
              <strong>Name: </strong>
              {game.title}
            </div>
            <div className="genre">
              <strong>Genre:</strong> {game.genre}
            </div>
            <div className="platform">
              <strong>Platform:</strong> {game.platform}
            </div>
            <div className="publisher">
              <strong>Publisher:</strong> {game.publisher}
            </div>
            <div className="developer">
              <strong>Developer:</strong> {game.developer}
            </div>
            <div className="release-date">
              <strong>Release date:</strong> {game.release_date}
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="description">Description: {game.short_description}</div>
    </Container>
  );
};

export default GameDetail;
