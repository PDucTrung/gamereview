import React from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { selectfavorite } from "../../store/features/favorite/favorite.slice";
import "./Favorite.css";

const Favorite = () => {
  const { items, removeItem, clearItem } = useSelector(selectfavorite);

  const dispatch = useDispatch();

  const handleDelete = (gameId) => {
    Swal.fire({
      title: "Do you want to delete ?",
      showDenyButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("OK!", "", "success");
        dispatch(removeItem(gameId));
      }
    });
  };

  const handleClear = () => {
    Swal.fire({
      title: "Do you want to delete all ?",
      showDenyButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("OK!", "", "success");
        dispatch(clearItem());
      }
    });
  };
  if (items.length === 0) {
    return (
      <Container className="d-flex align-items-center justify-content-center flex-column gap-4">
        <div className="no-product text-center font-mali fw-500">
          There are no game in favorite
        </div>
        <NavLink className="btn text-decoration-none" to={"/"}>
          View Game
        </NavLink>
      </Container>
    );
  }
  return (
    <div className="list-favorite">
      <h2 className="text-center">List favorite</h2>
      <br />
      <table className="text-center">
        <tr>
          <th colSpan={2}>game</th>
          <th>Genre</th>
          <th>platform</th>
          <th>Developer</th>
          <th></th>
        </tr>
        {items.map((item) => (
          <tr>
            <td>
              <img src={item.game.thumbnail} alt={item.game.title} />
            </td>
            <td>{item.game.title}</td>
            <td>{item.game.genre}</td>
            <td>{item.game.platform}</td>
            <td>{item.game.developer}</td>
            <td>
              <button
                className="btn"
                onClick={() => handleDelete(item.game.id)}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </td>
          </tr>
        ))}

        <tr>
          <td colSpan={7}>
            <button className="clear-all btn" onClick={handleClear}>
              Clear all
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Favorite;
