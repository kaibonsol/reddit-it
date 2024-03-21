import "./__css__/App.css";
import googleRedditIcon from "../assets/google-reddit-icon.svg";
import SearchBar from "./SearchBar";

/**
 * Top level component
 */
export default function App() {
  return (
    <div className="App">
      <div className="_searchBarContainer">
        <img className="_icon" src={googleRedditIcon} alt="Google and Reddit" />
        <SearchBar />
      </div>
    </div>
  );
}
