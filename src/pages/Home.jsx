import { useState } from "react";
// import "./Home.css"; // optional if you want separate CSS file

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
    // Later, you'll integrate real API call here
  };

  // Mock featured recipes (for now)
  const featuredRecipes = [
    {
      id: 1,
      title: "Creamy Alfredo Pasta",
      image: "https://images.unsplash.com/photo-1604908811750-1b4d9aefed14",
      description: "A rich and creamy pasta dish with garlic and parmesan."
    },
    {
      id: 2,
      title: "Grilled Chicken Salad",
      image: "https://images.unsplash.com/photo-1562967916-eb82221dfb36",
      description: "Healthy, colorful, and full of fresh flavor."
    },
    {
      id: 3,
      title: "Homemade Veggie Pizza",
      image: "https://images.unsplash.com/photo-1601924582971-dbb7d83ef9f9",
      description: "Crispy crust loaded with fresh vegetables and mozzarella."
    },
  ];

  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Search for a Recipe 🍲</h1>
          {/* <p>Discover delicious recipes, explore new cuisines, and start cooking today!</p> */}

          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search recipes by name or ingredient..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </section>

      {/* FEATURED RECIPES */}
      <section className="featured">
        <h2>Featured Recipes 🍴</h2>
        <div className="recipe-grid">
          {featuredRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.title} />
              <div className="card-content">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <button>View Recipe</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
