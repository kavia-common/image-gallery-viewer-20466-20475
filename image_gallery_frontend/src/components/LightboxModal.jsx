/* LightboxModal.jsx
 * Modal/lightbox for viewing a selected image with navigation.
 * Accessible: keyboard controls (Esc, Arrow keys), focus handling, ARIA attributes.
 */
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

// PUBLIC_INTERFACE
export default function LightboxModal({
  isOpen,
  images,
  activeIndex,
  onClose,
  onPrev,
  onNext
}) {
  /**
   * Accessible modal that:
   * - traps initial focus on open (focuses Close button)
   * - supports Esc/Arrow keys
   * - has descriptive labels
   */
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onPrev();
      } else if (e.key === "ArrowRight") {
        onNext();
      }
    };

    document.addEventListener("keydown", onKey);
    const t = setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 0);

    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || activeIndex == null || images.length === 0) return null;

  const current = images[activeIndex];

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`Image preview: ${current?.alt ?? ""}`}
    >
      <div className="modal">
        <div className="modal-header">
          <div className="modal-meta">
            <span className="badge">{current.category}</span>
            <span className="title" title={current.alt}>
              {current.alt}
            </span>
          </div>
          <div className="modal-actions">
            {current?.srcLink ? (
              <a
                className="link"
                href={current.srcLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            ) : null}
            <button
              ref={closeBtnRef}
              type="button"
              className="icon-btn"
              onClick={onClose}
              aria-label="Close preview"
              title="Close"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="modal-content">
          <button
            type="button"
            className="nav-btn left"
            onClick={onPrev}
            aria-label="Previous image"
            title="Previous"
          >
            ‹
          </button>

          <div className="modal-image-wrap">
            <img
              className="modal-image"
              src={current.src}
              alt={current.alt}
              loading="eager"
            />
          </div>

          <button
            type="button"
            className="nav-btn right"
            onClick={onNext}
            aria-label="Next image"
            title="Next"
          >
            ›
          </button>
        </div>

        <div className="modal-footer">
          <div className="tags">
            {(current.tags ?? []).map((t) => (
              <span key={t} className="chip">
                #{t}
              </span>
            ))}
          </div>
          {typeof activeIndex === "number" && images.length > 0 ? (
            <div className="counter" aria-live="polite" aria-atomic="true">
              {activeIndex + 1} / {images.length}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

LightboxModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  ).isRequired,
  activeIndex: PropTypes.number,
  onClose: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired
};
