import { useState, useEffect } from "react";
import { getAllGames } from "../services/api";
import "./GetGames.css";

const GetGames = () => {
  const [games, setGames] = useState([]);
  const [visibleCount, setVisibleCount] = useState(15);
  const [selectedGame, setSelectedGame] = useState(null); // For modal

  useEffect(() => {
    async function fetchGames() {
      const gamesData = await getAllGames();
      setGames(gamesData);
    }
    fetchGames();
  }, []);

  const loadMoreGames = () => {
    setVisibleCount((prevCount) => prevCount + 15);
  };

  const openModal = (game) => {
    setSelectedGame(game);
  };

  const closeModal = () => {
    setSelectedGame(null);
  };

  return (
    <div className="games-wrapper">
      <div className="games-container">
        {games.slice(0, visibleCount).map((game) => (
          <div
            key={game.id}
            className="game-card"
            onClick={() => openModal(game)}
          >
            <div className="thumbnail-wrapper">
              <img
                src={game.thumbnail}
                alt={game.title}
                className="game-thumbnail"
              />
              <span className="release-year">
                {game.release_date
                  ? new Date(game.release_date).getFullYear()
                  : ""}
              </span>
            </div>
            <div className="game-info">
              <h3 className="game-title">{game.title}</h3>
              <p className="game-description">
                {game.description.length > 60
                  ? game.description.slice(0, 60) + "..."
                  : game.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < games.length && (
        <div className="load-more-container">
          <button onClick={loadMoreGames} className="load-more-btn">
            Load More Games
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedGame && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
          >
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <img
              src={selectedGame.thumbnail}
              alt={selectedGame.title}
              className="modal-thumbnail"
            />
            <h2>{selectedGame.title}</h2>
            <p className="modal-release-year">
              {selectedGame.release_date
                ? new Date(selectedGame.release_date).getFullYear()
                : ""}
            </p>
            <p className="modal-description">{selectedGame.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetGames;
