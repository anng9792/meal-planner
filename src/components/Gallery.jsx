function Gallery({ results }) {
  if (!results || results.length === 0) {
    return <p>No recipes found.</p>
  }

  return (
    <div>
      <h2>Results</h2>
      <ul>
        {results.map(r => (
          <li key={r.id}>
            {r.title} — {r.type} ⭐ {r.rating}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Gallery
