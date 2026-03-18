import { useState } from "react";
import { type WarmUpItem } from "../data/warmups";
import WarmUpModal from "./WarmUpModal";
import "./WarmUpCard.css";

type Props = {
  item: WarmUpItem;
  color: string;
  emoji: string;
  category: string;
};

export default function WarmUpCard({ item, color, emoji, category }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="wuc"
        style={{ "--accent": color } as React.CSSProperties}
        onClick={() => setOpen(true)}
      >
        <div className="wuc-header">
          <span className="wuc-emoji">{emoji}</span>
          <span className="wuc-category">{category}</span>
          <span className="wuc-duration">{item.duration}</span>
        </div>
        <h3 className="wuc-title">{item.title}</h3>
        <p className="wuc-desc">{item.description}</p>
        <ol className="wuc-steps">
          {item.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
        <div className="wuc-cta">View details →</div>
      </div>

      {open && (
        <WarmUpModal
          item={item}
          color={color}
          emoji={emoji}
          category={category}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
