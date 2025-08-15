export default async function handler(req, res) {
  try {
    const apiRes = await fetch("https://www.freetogame.com/api/games");
    if (!apiRes.ok) {
      throw new Error(`API request failed with ${apiRes.status}`);
    }
    const data = await apiRes.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
