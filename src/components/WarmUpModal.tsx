import { useEffect, useState } from "react";
import { type WarmUpItem } from "../data/warmups";
import "./WarmUpModal.css";

type Props = {
  item: WarmUpItem;
  color: string;
  emoji: string;
  category: string;
  onClose: () => void;
};

export default function WarmUpModal({
  item,
  color,
  emoji,
  category,
  onClose,
}: Props) {
  const [visible, setVisible] = useState(false);
  const [checkedSteps, setCheckedSteps] = useState<boolean[]>(
    new Array(item.steps.length).fill(false),
  );

  // Animate in
  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);
  function handleClose() {
    setVisible(false);
    setTimeout(onClose, 280);
  }
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [checkedSteps]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  function toggleStep(i: number) {
    setCheckedSteps((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  }

  const progress = Math.round(
    (checkedSteps.filter(Boolean).length / item.steps.length) * 100,
  );

  return (
    <div
      className={`modal-overlay ${visible ? "modal-overlay--in" : ""}`}
      style={{ "--accent": color } as React.CSSProperties}
      onClick={handleClose}
    >
      <div
        className={`modal-panel ${visible ? "modal-panel--in" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button className="modal-close" onClick={handleClose}>
          ✕
        </button>

        {/* Top accent bar */}
        <div className="modal-bar" style={{ background: color }} />

        {/* Header */}
        <div className="modal-header">
          <div className="modal-tag">
            <span>{emoji}</span>
            <span className="modal-category">{category}</span>
          </div>
          <span className="modal-duration">{item.duration}</span>
        </div>

        <h2 className="modal-title">{item.title}</h2>
        <p className="modal-desc">{item.description}</p>

        {/* Progress */}
        <div className="modal-progress-wrap">
          <div className="modal-progress-label">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="modal-progress-track">
            <div
              className="modal-progress-fill"
              style={{ width: `${progress}%`, background: color }}
            />
          </div>
        </div>

        {/* Steps */}
        <ol className="modal-steps">
          {item.steps.map((step, i) => (
            <li
              key={i}
              className={`modal-step ${checkedSteps[i] ? "modal-step--done" : ""}`}
              onClick={() => toggleStep(i)}
            >
              <span className="modal-step-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="modal-step-text">{step}</span>
              <span className="modal-step-check">
                {checkedSteps[i] ? "✓" : ""}
              </span>
            </li>
          ))}
        </ol>

        {progress === 100 && (
          <div className="modal-complete">
            🎉 Warm-up complete! You&apos;re ready to go.
          </div>
        )}
      </div>
    </div>
  );
}
