const API_URL = "/api/games"; // This now points to your backend

export async function getAllGames() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    return data.map((game) => ({
      id: game.id || "",
      title: game.title || "",
      thumbnail: game.thumbnail || "",
      description: game.short_description || "",
      release_date: game.release_date || "",
    }));
  } catch (error) {
    console.log("Error fetching games: ", error);
    return [];
  }
}
