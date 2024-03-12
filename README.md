
# React News Api

A simple React application that fetches and displays the latest news articles based on different categories using the [News API](https://newsapi.org/).

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/react-news-app.git
    cd react-news-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Get an API key from [News API](https://newsapi.org/) by signing up.

4. Create a `.env` file in the root directory and add your API key:

    ```env
    VITE_API_KEY=your_api_key_here
    ```

5. Start the development server:

    ```bash
    npm start
    ```

    The app will be available at `http://localhost:3000/`.

## Usage

- Select a news category from the navigation bar to view the latest articles in that category.
- Click "Read More" on a news item to read the full article.
- You can view different country's news modifying fetch call in NewsBoard component 

## Components

### App.jsx

The main component rendering the application. Manages the selected news category.

### NewsBoard.jsx

Renders the news board with a list of all available news items. Fetches news articles based on the selected category.

### Navbar.jsx

Represents the navigation bar with news categories.

### NewsItem.jsx

Represents an individual news item. Displays the title, description, image, date, and a "Read More" button.

## Dependencies

- [React](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [News API](https://newsapi.org/)


