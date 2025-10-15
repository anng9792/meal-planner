function Gallery() {
  const recipies = [
    {
      id: 1,
      title: "Olive Garden Zuppa Toscana Soup",
      image: "https://www.lecremedelacrumb.com/wp-content/uploads/2019/03/easy-zuppa-toscano-soup-3.jpg",
      cookTime: "40 Mins",
    },

    {
      id: 2,
      title: "Better Boxed Vegan Cake",
      image: "https://bigboxvegan.com/wp-content/uploads/2023/04/IMG_5110.jpeg",
      cookTime: "30 Mins",
    },

    {
      id: 3,
      title: "Katsudon",
      image: "https://doobydobap.com/wp-content/uploads/2021/08/IMG_0846-1688x2048.jpg",
      cookTime: "15 Mins",
    },

    {
      id: 4,
      title: "Homemade Hamburger Helper Beef Noodle",
      image: "https://cincyshopper.com/wp-content/uploads/2016/02/Homemade-Hamburger-Helper-Beef-Noodle-5.jpg",
      cookTime: "30 Mins",
    },
  ];
  
  return (
    <div id="gallery" className="gallery">
      <h2 className="gallery_title">Gallery</h2>
      <div id="gallery_grid" className="gallery_grid">
        {recipies.map((recipie) => (
          <div key={recipie.id} className="gallery_card">
            <img
              src={recipie.image}
              alt={recipie.title}
              className="gallery_image"
            />
            <h3 className="card-title">{recipie.title}</h3>
            <p className="cooktime">⏱ {recipie.cookTime}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Gallery
