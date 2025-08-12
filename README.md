# React Browse Games

A React application built with Vite that fetches and displays free-to-play game listings from the FreeToGame API. Features include paginated game cards and clickable card modals.

## Features

- **Game Cards**: Display game title, thumbnail, release year, and truncated short description (max 60 characters).
- **Load More**: Load games in batches (15 per click) for efficient browsing.
- **Modal Detail View**: Click a card to open a modal showing the full description and game info.
- **Responsive Layout**: Flex and grid setup ensures cards wrap and align elegantly.

## Technologies Used

| Component        | Stack                                 |
| ---------------- | ------------------------------------- |
| Tooling          | React, Vite, JavaScript               |
| Styling          | CSS (modular styles)                  |
| Data Fetching    | `fetch` API + FreeToGame API          |
| State Management | React Hooks (`useState`, `useEffect`) |

## Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/imamulkadir/React_browseGames.git
   cd React_browseGames
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Visit the local app at _http://localhost:5173_

## Usage

- Browse games displayed as cards.
- Click Load More Games to add more to the view.
- Click a card to open a detailed modal.

## Project Structure

    ```text
    React_browseGames/
    ├── public/                # Static assets
    ├── src/
    │   ├── components/        # React UI components
    │   │   └── GetGames.jsx
    │   ├── services/
    │   │   └── api.js         # Fetch logic
    │   ├── styles/
    │   │   └── GetGames.css   # Component-specific CSS
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── README.md              # Project overview
    ```

## License

This project is open source and available under the **MIT License**.
