const API_URL =
  "https://browse-games.vercel.app/https://www.freetogame.com/api/games";

export async function getAllGames() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();

    // Map over the array and extract needed fields
    return data.map((game) => ({
      id: game.id || "",
      title: game.title || "",
      thumbnail: game.thumbnail || "",
      description: game.short_description || "",
      release_date: game.release_date || "",
    }));
  } catch (error) {
    console.log("Error fetching games: ", error);
    return {
      id: "",
      title: "",
      thumbnail: "",
      description: "",
      release_date: "",
    };
  }
}
