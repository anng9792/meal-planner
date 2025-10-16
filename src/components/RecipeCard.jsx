import { useState, useEffect } from 'react'

/**
 * Props expected from your Gallery (example):
 * <RecipeCard
 *   title="Katsudon"
 *   image="https://..."
 *   blurb="Crispy cutlet simmered with onion and egg over rice."
 *   time="35 min"
 *   serves="2"
 *   tags={['Japanese', 'Rice']}
 *   ingredients={[
 *     '2 pork shoulder/loin steaks or chicken thigh (150g)',
 *     '1 white onion, thinly sliced',
 *     '1 egg',
 *     '2 cups cooked white rice',
 *     'Chives for garnish'
 *   ]}
 *   steps={[
 *     'Dip cutlets in batter, coat with panko, and fry until golden.',
 *     'Simmer onion with sauce, add beaten egg, serve over rice.'
 *   ]}
 * />
 */

export default function RecipeCard({
  title,
  image,
  blurb,
  time = '—',
  serves = '—',
  tags = [],
  ingredients = [],
  steps = [],
}) {
  const [open, setOpen] = useState(false)

  // Close on Esc
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      {/* Card in the gallery */}
      <button
        className="recipe-card"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-label={`Open ${title}`}
      >
        {image ? (
          <img className="recipe-card__img" src={image} alt={title} loading="lazy" />
        ) : (
          <div className="img-placeholder" aria-hidden="true" />
        )}

        <div className="recipe-card__body">
          <h3 className="recipe-card__title">{title}</h3>
          {blurb && <p className="recipe-card__blurb">{blurb}</p>}
          <div className="recipe-card__meta">
            <span>⏱ {time}</span>
            <span>👥 {serves}</span>
          </div>
          {!!tags.length && (
            <div className="recipe-card__tags">
              {tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          )}
        </div>
      </button>

      {/* Popup modal */}
      {open && (
        <div
          className="modal-overlay"
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label={title}
            onClick={(e) => e.stopPropagation()} // keep clicks inside from closing
          >
            <button
              className="modal__close"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ×
            </button>

            {image && <img className="modal__hero" src={image} alt={title} />}

            <header className="modal__header">
              <h2 className="modal__title">{title}</h2>
              <div className="modal__meta">
                <span>⏱ {time}</span>
                <span>👥 {serves}</span>
                {!!tags.length && <span>🏷 {tags.join(', ')}</span>}
              </div>
              {blurb && <p className="modal__blurb">{blurb}</p>}
            </header>

            <div className="modal__scroll">
              {!!ingredients.length && (
                <section>
                  <h3>Ingredients</h3>
                  <ul>
                    {ingredients.map((it, i) => (
                      <li key={i}>{it}</li>
                    ))}
                  </ul>
                </section>
              )}

              {!!steps.length && (
                <section>
                  <h3>Steps</h3>
                  <ol>
                    {steps.map((st, i) => (
                      <li key={i}>{st}</li>
                    ))}
                  </ol>
                </section>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
