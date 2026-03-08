"use client";

export default function ImageModal({ selectedImage, onClose }) {
  if (!selectedImage) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          onClose();
        }
      }}
    >
      <img
        src={selectedImage.src}
        alt={selectedImage.alt}
        className="max-h-[90vh] w-auto max-w-full rounded-2xl border border-white/20 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
}
