import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { NewsBoard } from "./components/NewsBoard";

// App component - the main component rendering the application
const App = () => {
  // State to manage the selected news category
  const [category, setCategory] = useState("general");

  return (
    <div>
      {/* Render the Navbar component with a callback function to update the selected category */}
      <Navbar setCategory={setCategory}></Navbar>
      
      {/* Render the NewsBoard component with the selected category */}
      <NewsBoard category={category}></NewsBoard>
    </div>
  );
}

// Export the App component as the default export of the module
export default App;
