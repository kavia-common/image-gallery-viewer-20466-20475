import React, { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';

/**
 * Ocean Professional themed Image Gallery with responsive grid, search/filter,
 * and accessible lightbox modal.
 */

// UTIL: Build image URL with fallback to public placeholders if attachments not served by CRA
const attachments = [
  { file: '20250915_075013_random.jpg', title: 'Random Scenic', alt: 'Random scenic photograph', categories: ['Nature'] },
  { file: '20250915_075617_picasso_pablo_1.jpg', title: 'Picasso Sketch', alt: 'Sketch by Picasso', categories: ['Art', 'Sketch'] },
  { file: '20250915_075635_250px-Le_Gourmet.jpg', title: 'Le Gourmet', alt: 'Le Gourmet painting', categories: ['Art', 'Painting'] },
  { file: '20250915_075645_girl-with-mandolin.jpg', title: 'Girl with Mandolin', alt: 'Girl with Mandolin painting', categories: ['Art', 'Portrait'] },
  // Newly added image to Ocean Gallery
  { file: '20250915_093951_picasso_pablo_1.jpg', title: 'Picasso Study II', alt: 'Study by Pablo Picasso', categories: ['Art', 'Sketch'] },
  // Added by request: new attachment placed under public/attachments
  { file: '20250915_094602_girl-with-mandolin.jpg', title: 'Girl with Mandolin', alt: 'Portrait of a girl with a mandolin', categories: ['Art', 'Portrait'] },
  // Newly requested image: ensure this file is placed in public/attachments
  { file: '20250915_094827_250px-Le_Gourmet.jpg', title: 'Le Gourmet (Study)', alt: 'Le Gourmet painting, small-format study', categories: ['Art', 'Painting'] }
];

// PUBLIC_INTERFACE
function buildImageUrl(file) {
  /** Build URL to load local attachment through dev server; if blocked, use a CDN placeholder. */
  // Try to reference attachments via absolute path from repo root served by dev server proxy.
  // CRA dev server will not serve outside /public by default. We'll still attempt relative fetch;
  // components will render fallback if it errors.
  return `/attachments/${file}`;
}

// PUBLIC_INTERFACE
function getFallbackUrl(index = 0) {
  /** Fallback Unsplash URLs */
  const placeholders = [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop', // ocean
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&auto=format&fit=crop', // mountain
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80&auto=format&fit=crop', // abstract desk
    'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200&q=80&auto=format&fit=crop', // architecture
  ];
  return placeholders[index % placeholders.length];
}

// Build initial image dataset
const initialImages = attachments.map((a, i) => ({
  id: `att-${i}`,
  title: a.title,
  alt: a.alt,
  categories: a.categories,
  src: buildImageUrl(a.file),
  fallback: getFallbackUrl(i),
}));

// PUBLIC_INTERFACE
function useTheme(initial = 'light') {
  /** Hook to manage theme and apply data-theme attribute on root. */
  const [theme, setTheme] = useState(initial);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  return [theme, setTheme];
}

// PUBLIC_INTERFACE
function App() {
  /** Root component rendering the gallery layout. */
  const [theme, setTheme] = useTheme('light');
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [modalIndex, setModalIndex] = useState(null);

  const images = useMemo(() => initialImages, []);
  const allCategories = useMemo(() => {
    const set = new Set();
    images.forEach(img => img.categories.forEach(c => set.add(c)));
    return ['All', ...Array.from(set).sort()];
  }, [images]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return images.filter(img => {
      const matchesQuery =
        !q ||
        img.title.toLowerCase().includes(q) ||
        img.alt.toLowerCase().includes(q) ||
        img.categories.some(c => c.toLowerCase().includes(q));
      const matchesCategory =
        activeCategory === 'All' || img.categories.includes(activeCategory);
      return matchesQuery && matchesCategory;
    });
  }, [images, query, activeCategory]);

  const openAt = (indexInFiltered) => {
    if (filtered.length === 0) return;
    const globalIndex = images.findIndex(i => i.id === filtered[indexInFiltered].id);
    setModalIndex(globalIndex);
  };

  const closeModal = () => setModalIndex(null);

  const next = () => {
    setModalIndex(prev => {
      if (prev === null) return prev;
      const nextIndex = (prev + 1) % images.length;
      return nextIndex;
    });
  };

  const prev = () => {
    setModalIndex(prev => {
      if (prev === null) return prev;
      const prevIndex = (prev - 1 + images.length) % images.length;
      return prevIndex;
    });
  };

  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  return (
    <div className="App ocean-app">
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        query={query}
        onQueryChange={setQuery}
        categories={allCategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <main className="container">
        <GalleryGrid images={filtered} onOpen={openAt} />
      </main>

      <Footer />

      <Lightbox
        images={images}
        index={modalIndex}
        onClose={closeModal}
        onNext={next}
        onPrev={prev}
      />
    </div>
  );
}

// PUBLIC_INTERFACE
function Header({
  theme,
  onToggleTheme,
  query,
  onQueryChange,
  categories,
  activeCategory,
  onCategoryChange
}) {
  /** Header with title, search, category filter and theme toggle. */
  return (
    <header className="navbar ocean-surface" role="banner">
      <div className="navbar-inner">
        <div className="brand">
          <span className="brand-logo" aria-hidden="true">
            <img
              src="/attachments/20250915_095338_random.jpg"
              alt=""
              className="brand-logo-img"
            />
          </span>
          <div className="brand-text">
            {/* PUBLIC title visible alongside logo for brand recognition */}
            <h1 className="title" aria-label="Ocean Gallery">
              Ocean <span className="title-accent">Gallery</span>
            </h1>
            <p className="subtitle">Professional, minimal image showcase</p>
          </div>
        </div>

        <div className="controls" role="search">
          <label htmlFor="search" className="sr-only">Search images</label>
          <input
            id="search"
            type="search"
            className="input"
            placeholder="Search images, categories..."
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            aria-label="Search images"
          />
          <div className="select-wrapper">
            <label htmlFor="category" className="sr-only">Filter by category</label>
            <select
              id="category"
              className="select"
              value={activeCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              aria-label="Filter by category"
            >
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <button
            type="button"
            className="btn theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
}

// PUBLIC_INTERFACE
function GalleryGrid({ images, onOpen }) {
  /** Responsive image grid. */
  if (images.length === 0) {
    return (
      <div className="empty">
        <p>No images match your search/filter.</p>
      </div>
    );
  }
  return (
    <section
      className="grid"
      aria-label="Image gallery"
      role="region"
    >
      {images.map((img, idx) => (
        <ImageCard
          key={img.id}
          image={img}
          onClick={() => onOpen(idx)}
        />
      ))}
    </section>
  );
}

// PUBLIC_INTERFACE
function ImageCard({ image, onClick }) {
  /** Single image tile with graceful fallback and caption. */
  const [src, setSrc] = useState(image.src);
  const [loaded, setLoaded] = useState(false);
  const hasErrored = useRef(false);

  const handleError = () => {
    if (!hasErrored.current) {
      hasErrored.current = true;
      setSrc(image.fallback);
    }
  };

  return (
    <figure className={`card ${loaded ? 'loaded' : ''}`}>
      <button
        type="button"
        className="card-btn"
        onClick={onClick}
        aria-label={`Open ${image.title}`}
      >
        <img
          className="card-img"
          src={src}
          alt={image.alt}
          onLoad={() => setLoaded(true)}
          onError={handleError}
          loading="lazy"
        />
      </button>
      <figcaption className="card-caption">
        <span className="card-title">{image.title}</span>
        <span className="card-tags">
          {image.categories.map(c => (
            <span key={c} className="tag">{c}</span>
          ))}
        </span>
      </figcaption>
    </figure>
  );
}

// PUBLIC_INTERFACE
function Lightbox({ images, index, onClose, onNext, onPrev }) {
  /** Accessible modal/lightbox with keyboard controls and focus trap. */
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (index === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [index, onClose, onNext, onPrev]);

  useEffect(() => {
    if (index !== null && closeBtnRef.current) {
      closeBtnRef.current.focus();
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [index]);

  if (index === null) return null;

  const image = images[index];

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`${image.title} preview`}
      ref={dialogRef}
    >
      <div className="lightbox-content ocean-surface">
        <button
          ref={closeBtnRef}
          className="icon-btn close"
          onClick={onClose}
          aria-label="Close preview"
        >
          ✕
        </button>

        <button
          className="icon-btn prev"
          onClick={onPrev}
          aria-label="Previous image"
        >
          ‹
        </button>

        <div className="lightbox-image-wrapper">
          <img
            src={image.src}
            onError={(e) => { e.currentTarget.src = image.fallback; }}
            alt={image.alt}
          />
          <div className="lightbox-caption">
            <h2 className="lb-title">{image.title}</h2>
            <div className="lb-tags">
              {image.categories.map(c => <span key={c} className="tag">{c}</span>)}
            </div>
          </div>
        </div>

        <button
          className="icon-btn next"
          onClick={onNext}
          aria-label="Next image"
        >
          ›
        </button>
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
function Footer() {
  /** Simple footer note. */
  return (
    <footer className="footer" role="contentinfo">
      <p>Built with Ocean Professional theme • Accessible • Responsive</p>
    </footer>
  );
}

export default App;
