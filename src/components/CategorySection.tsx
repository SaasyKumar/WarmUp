import { type WarmUpCategory } from "../data/warmups";
import WarmUpCard from "./WarmUpCard";
import "./CategorySection.css";

type Props = {
  category: WarmUpCategory;
};

export default function CategorySection({ category }: Props) {
  return (
    <section className="cat-section">
      <div className="cat-heading">
        <span className="cat-dot" style={{ background: category.color }} />
        <h2 className="cat-title">
          {category.emoji} {category.label}
        </h2>
      </div>
      <div className="cat-grid">
        {category.items.map((item) => (
          <WarmUpCard
            key={item.id}
            item={item}
            color={category.color}
            emoji={category.emoji}
            category={category.label}
          />
        ))}
      </div>
    </section>
  );
}
