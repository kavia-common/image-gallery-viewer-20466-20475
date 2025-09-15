/* ImageCard.jsx
 * Renders a single image item with accessible semantics.
 */
import PropTypes from "prop-types";

// PUBLIC_INTERFACE
export default function ImageCard({ image, onSelect, index }) {
  /** Accessible image card with keyboard support. */
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(index);
    }
  };

  return (
    <figure
      className="img-card"
      role="group"
      aria-label={`${image.category}: ${image.alt}`}
    >
      <button
        type="button"
        className="img-btn"
        onClick={() => onSelect(index)}
        onKeyDown={handleKeyDown}
        aria-label={`Open preview: ${image.alt}`}
      >
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="img-media"
        />
        <span className="img-overlay" aria-hidden="true" />
      </button>
      <figcaption className="img-caption">
        <span className="img-category">{image.category}</span>
        <span className="img-alt" title={image.alt}>{image.alt}</span>
      </figcaption>
    </figure>
  );
}

ImageCard.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    author: PropTypes.string,
    srcLink: PropTypes.string
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};
