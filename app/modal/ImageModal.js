"use client";

export default function ImageModal({ selectedImage, onClose, onNavigate }) {
  if (!selectedImage) {
    return null;
  }

  const hasMultiple = selectedImage.images && selectedImage.images.length > 1;
  const currentIndex = selectedImage.currentIndex ?? 0;
  const canGoPrev = hasMultiple && currentIndex > 0;
  const canGoNext = hasMultiple && currentIndex < selectedImage.images.length - 1;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Escape") onClose();
        if (event.key === "ArrowRight" && canGoNext) onNavigate(currentIndex + 1);
        if (event.key === "ArrowLeft" && canGoPrev) onNavigate(currentIndex - 1);
      }}
    >
      <div
        className="relative inline-flex max-h-[90vh] max-w-full items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={selectedImage.src}
          alt={selectedImage.alt}
          className="max-h-[90vh] w-auto max-w-full rounded-2xl border border-white/20 shadow-2xl"
        />

        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute right-3 top-3 rounded-full bg-black/50 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-black/70"
        >
          Close
        </button>

        {canGoPrev && (
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onNavigate(currentIndex - 1); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-black/70"
          >
            ← Prev
          </button>
        )}
        {canGoNext && (
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onNavigate(currentIndex + 1); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-black/70"
          >
            Next →
          </button>
        )}

        {hasMultiple && (
          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white/90 backdrop-blur-sm">
            {currentIndex + 1} / {selectedImage.images.length}
          </span>
        )}
      </div>
    </div>
  );
}
