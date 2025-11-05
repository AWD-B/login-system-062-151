import React from "react";
// import "./Services.css"; // optional if you want custom styling

const Services = () => {
  const features = [
    {
      title: "Smart Recipe Search",
      desc: "Find recipes instantly by ingredients you already have at home. Save time and reduce food waste!",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Personalized Recommendations",
      desc: "Get AI-powered recipe suggestions tailored to your dietary preferences and cooking style.",
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Nutrition Insights",
      desc: "Understand the calories and nutrients in every recipe you make — perfect for healthy eating goals.",
      img: "https://images.unsplash.com/photo-1556911073-52527ac437f5?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const team = [
    {
      name: "Sarah Khan",
      role: "Founder & Recipe Curator",
      img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Ali Raza",
      role: "Lead Developer",
      img: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
      name: "Maria Ahmed",
      role: "Nutrition Expert",
      img: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <div className="services-container" style={{ padding: "50px 20px", backgroundColor: "#f8f9fa" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px", color: "#333" }}>
        Our <span style={{ color: "#e67e22" }}>Services</span>
      </h1>

      {/* Features Section */}
      <div className="features" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        {features.map((f, i) => (
          <div
            key={i}
            style={{
              width: "300px",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              overflow: "hidden",
              textAlign: "center"
            }}
          >
            <img src={f.img} alt={f.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <div style={{ padding: "20px" }}>
              <h3 style={{ color: "#e67e22" }}>{f.title}</h3>
              <p style={{ color: "#555" }}>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <h2 style={{ textAlign: "center", margin: "60px 0 20px", color: "#333" }}>Meet Our Team</h2>
      <div className="team" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px" }}>
        {team.map((member, i) => (
          <div
            key={i}
            style={{
              width: "220px",
              background: "#fff",
              borderRadius: "15px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}
          >
            <img
              src={member.img}
              alt={member.name}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "10px"
              }}
            />
            <h4 style={{ color: "#e67e22" }}>{member.name}</h4>
            <p style={{ color: "#555" }}>{member.role}</p>
          </div>
        ))}
      </div>

      {/* Recipe Showcase */}
      <h2 style={{ textAlign: "center", margin: "60px 0 20px", color: "#333" }}>Popular Recipes</h2>
      <div className="recipes" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        {["https://images.unsplash.com/photo-1504674900247-0877df9cc836",
          "https://images.unsplash.com/photo-1601050690597-96b52d39b6d2",
          "https://images.unsplash.com/photo-1603052875698-5ef2e49d5fbb"
        ].map((url, i) => (
          <img
            key={i}
            src={`${url}?auto=format&fit=crop&w=800&q=80`}
            alt="recipe"
            style={{
              width: "300px",
              height: "200px",
              borderRadius: "10px",
              objectFit: "cover",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
