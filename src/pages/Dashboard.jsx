import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const recipes = [
    { id: 1, name: "Spaghetti Bolognese", description: "Classic Italian pasta." },
    { id: 2, name: "Chicken Curry", description: "Spicy and flavorful Indian curry." },
    { id: 3, name: "Pancakes", description: "Sweet and fluffy breakfast treat." },
    { id: 4, name: "Caesar Salad", description: "Crispy and refreshing salad." },
  ];

  const filtered = recipes.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchMe = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/me", {
          headers: {
            "Content-Type": "application/json",
            "auth-token": token,
          },
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        } else {
          localStorage.removeItem("authToken");
          localStorage.removeItem("authUser");
          navigate("/login");
        }
      } catch (_) {
        navigate("/login");
      }
    };
    fetchMe();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    navigate("/login");
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>🍲 Recipe Finder Dashboard</h1>
        {user && <p>Welcome, {user.name}</p>}
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="recipes-grid">
        {filtered.length ? (
          filtered.map((r) => (
            <div className="recipe-card" key={r.id}>
              <h3>{r.name}</h3>
              <p>{r.description}</p>
            </div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
}
