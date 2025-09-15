import React, { useEffect, useMemo, useState, useCallback } from "react";
import "./App.css";
import imagesData, { CATEGORIES } from "./data/images";
import SearchBar from "./components/SearchBar.jsx";
import GalleryGrid from "./components/GalleryGrid.jsx";
import LightboxModal from "./components/LightboxModal.jsx";

// PUBLIC_INTERFACE
function App() {
  /**
   * Ocean Professional Image Gallery
   * - Manages theme, filtering, selection, and modal navigation.
   */

  // Theme handling (light/dark)
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Search/filter state
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  // Selected modal state
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const normalizedQuery = useMemo(
    () => query.trim().toLowerCase(),
    [query]
  );

  const filteredImages = useMemo(() => {
    return imagesData.filter((img) => {
      const matchesCategory =
        category === "All" ? true : img.category === category;
      const matchesQuery =
        normalizedQuery.length === 0
          ? true
          : img.alt.toLowerCase().includes(normalizedQuery) ||
            (img.tags || []).some((t) =>
              t.toLowerCase().includes(normalizedQuery)
            );
      return matchesCategory && matchesQuery;
    });
  }, [category, normalizedQuery]);

  // Handlers
  // PUBLIC_INTERFACE
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const handleClear = useCallback(() => {
    setQuery("");
    setCategory("All");
  }, []);

  const openModalAt = useCallback((index) => {
    setActiveIndex(index);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setActiveIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    if (filteredImages.length === 0 || activeIndex == null) return;
    setActiveIndex((prev) =>
      prev - 1 >= 0 ? prev - 1 : filteredImages.length - 1
    );
  }, [filteredImages.length, activeIndex]);

  const showNext = useCallback(() => {
    if (filteredImages.length === 0 || activeIndex == null) return;
    setActiveIndex((prev) => (prev + 1) % filteredImages.length);
  }, [filteredImages.length, activeIndex]);

  return (
    <div className="App">
      <header className="app-header ocean-gradient">
        <div className="container header-inner">
          <div className="branding">
            <h1 className="app-title">Ocean Gallery</h1>
            <p className="app-subtitle">Explore images across categories</p>
          </div>
          <div className="header-actions">
            <div className="filters">
              <SearchBar
                query={query}
                category={category}
                onQueryChange={setQuery}
                onCategoryChange={setCategory}
                onClear={handleClear}
              />
            </div>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
          </div>
        </div>
        <nav className="category-nav" aria-label="Quick categories">
          <div className="container cat-scroll">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                className={`cat-btn ${category === c ? "active" : ""}`}
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
              >
                {c}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main className="container main">
        <GalleryGrid images={filteredImages} onSelect={openModalAt} />
      </main>

      <LightboxModal
        isOpen={isOpen}
        images={filteredImages}
        activeIndex={activeIndex ?? 0}
        onClose={closeModal}
        onPrev={showPrev}
        onNext={showNext}
      />

      <footer className="container footer">
        <span className="muted">
          Showing {filteredImages.length} of {imagesData.length} images
        </span>
      </footer>
    </div>
  );
}

export default App;
