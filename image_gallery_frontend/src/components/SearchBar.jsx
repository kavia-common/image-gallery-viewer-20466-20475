/* SearchBar.jsx
 * Provides keyword search and category filter.
 */
import PropTypes from "prop-types";
import { CATEGORIES } from "../data/images";

// PUBLIC_INTERFACE
export default function SearchBar({
  query,
  category,
  onQueryChange,
  onCategoryChange,
  onClear
}) {
  /** Header search and filters; accessible labels included. */
  return (
    <div className="searchbar" role="search">
      <div className="searchbar-row">
        <div className="input-wrap">
          <label htmlFor="query" className="sr-only">
            Search images
          </label>
          <input
            id="query"
            type="search"
            className="input"
            placeholder="Search by keyword or tag..."
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            aria-label="Search by keyword or tag"
          />
        </div>

        <div className="select-wrap">
          <label htmlFor="category" className="sr-only">
            Filter by category
          </label>
          <select
            id="category"
            className="select"
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
            aria-label="Filter by category"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          className="btn"
          onClick={onClear}
          aria-label="Clear search and filters"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onQueryChange: PropTypes.func.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired
};
