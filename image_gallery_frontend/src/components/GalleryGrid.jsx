/* GalleryGrid.jsx
 * Renders a responsive grid of ImageCard components.
 */
import PropTypes from "prop-types";
import ImageCard from "./ImageCard";

// PUBLIC_INTERFACE
export default function GalleryGrid({ images, onSelect }) {
  /** Displays a grid of images; announces empty state for accessibility. */
  if (!images || images.length === 0) {
    return (
      <div
        className="empty-state"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        No images match your filters.
      </div>
    );
  }

  return (
    <div className="grid" role="list" aria-label="Image results">
      {images.map((img, idx) => (
        <div role="listitem" key={img.id} className="grid-item">
          <ImageCard image={img} index={idx} onSelect={onSelect} />
        </div>
      ))}
    </div>
  );
}

GalleryGrid.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired
};
