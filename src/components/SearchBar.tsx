import "./__css__/SearchBar.css";
import { useCallback, useEffect, useRef } from "react";
import searchIcon from "../assets/search.svg";

const BASE_URL = "https://www.google.com/search?q=";

/**
 * SearchBar component renders an input field and handles Reddit-iting.
 */
export default function SearchBar() {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const redditIt = useCallback(() => {
    const query = searchInputRef.current?.value;
    if (!query) {
      return;
    }
    const searchQSP = query.replaceAll(" ", "+");
    window.open(`${BASE_URL}${searchQSP}+reddit`);
  }, []);

  useEffect(() => {
    // Set initial focus to the input field.
    searchInputRef.current?.focus();

    const onKeypress = (event: KeyboardEvent) => {
      if (event.key === "Enter" && event.target instanceof HTMLInputElement) {
        redditIt();
      }
    };

    window.addEventListener("keypress", onKeypress);

    return () => {
      window.removeEventListener("keypress", onKeypress);
    };
  });

  return (
    <div className="SearchBar">
      <input className="_searchInput" ref={searchInputRef} />
      <button className="_searchButton" title="Reddit it" onClick={redditIt}>
        REDDIT IT <img src={searchIcon} alt="Search" />
      </button>
    </div>
  );
}
