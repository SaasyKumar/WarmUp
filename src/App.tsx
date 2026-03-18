import { useState, useMemo } from "react";
import { categories } from "./data/warmups";
import CategorySection from "./components/CategorySection";
import WarmUpCard from "./components/WarmUpCard";
import "./App.css";

export default function App() {
  const [query, setQuery] = useState("");

  const searchResults = useMemo(() => {
    if (!query.trim()) return null;
    const q = query.toLowerCase();
    const results: {
      categoryLabel: string;
      categoryColor: string;
      categoryEmoji: string;
      item: import("./data/warmups").WarmUpItem;
    }[] = [];
    for (const cat of categories) {
      for (const item of cat.items) {
        if (
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          cat.label.toLowerCase().includes(q) ||
          item.steps.some((s) => s.toLowerCase().includes(q))
        ) {
          results.push({
            categoryLabel: cat.label,
            categoryColor: cat.color,
            categoryEmoji: cat.emoji,
            item,
          });
        }
      }
    }
    return results;
  }, [query]);

  return (
    <div className="app">
      {/* Hero */}
      <header className="hero">
        <div className="hero-badge">warm up for life</div>
        <h1 className="hero-title">
          Every session starts <br />
          <span className="hero-accent">before</span> it starts.
        </h1>
        <p className="hero-sub">
          Warm-ups for fitness, coding, music, writing, meditation & more.
        </p>

        {/* Search */}
        <div className="search-wrap">
          <span className="search-icon">⌕</span>
          <input
            className="search-input"
            type="text"
            placeholder="Search warm-ups… try 'breathing' or 'coding'"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button className="search-clear" onClick={() => setQuery("")}>
              ✕
            </button>
          )}
        </div>
      </header>

      <main className="main">
        {searchResults !== null ? (
          <div className="search-results">
            <p className="results-label">
              {searchResults.length} result
              {searchResults.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
            </p>
            {searchResults.length > 0 ? (
              <div className="results-grid">
                {searchResults.map(
                  ({ item, categoryColor, categoryEmoji, categoryLabel }) => (
                    <WarmUpCard
                      key={item.id}
                      item={item}
                      color={categoryColor}
                      emoji={categoryEmoji}
                      category={categoryLabel}
                    />
                  ),
                )}
              </div>
            ) : (
              <p className="no-results">
                Nothing found. Try a different keyword.
              </p>
            )}
          </div>
        ) : (
          <div className="categories">
            {categories.map((cat) => (
              <CategorySection key={cat.id} category={cat} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
