import React from "react";
// import "./AboutUs.css"; // Optional for extra styling

const AboutUs = () => {
  const team = [
    {
      name: "Sarah Khan",
      role: "Founder & Recipe Curator",
      desc: "Sarah loves exploring cuisines around the world. She started RecipeFinder to make cooking simple, smart, and joyful for everyone.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Ali Raza",
      role: "Lead Developer",
      desc: "Ali built the core of our RecipeFinder app using MERN stack. He ensures smooth backend logic and seamless user experience.",
      img: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      name: "Maria Ahmed",
      role: "Nutrition Expert",
      desc: "Maria focuses on nutrition insights. She ensures every recipe comes with healthy and balanced nutrition values.",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <div className="about-container" style={{ backgroundColor: "#fafafa", color: "#333" }}>
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          // backgroundImage:
          //   "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // padding: "100px 20px",
          // textAlign: "center",
          // color: "white",
        }}
      >
        <h1 style={{ fontSize: "48px", fontWeight: "bold", textShadow: "0px 2px 10px rgba(0,0,0,0.5)" }}>
          About RecipeFinder 🍲
        </h1>
        <p style={{ maxWidth: "700px", margin: "20px auto", fontSize: "20px" }}>
          Discover, Cook, and Enjoy. Our goal is to help you find the perfect recipe for every occasion — 
          whether it’s a quick breakfast or a fancy dinner night.
        </p>
      </section>

      {/* Story Section */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ color: "#e67e22" }}>Our Story</h2>
        <p style={{ maxWidth: "800px", margin: "20px auto", fontSize: "18px", lineHeight: "1.8" }}>
          RecipeFinder began as a small project during a university hackathon. We noticed how difficult it was 
          for people to decide what to cook with limited ingredients at home. Today, RecipeFinder uses intelligent 
          search and filtering features to suggest delicious recipes based on what you already have in your kitchen.
          <br /><br />
          Our vision is simple: **make cooking stress-free and fun for everyone**. Whether you’re a student, parent, 
          or chef, RecipeFinder helps you cook smarter, not harder.
        </p>
      </section>

      {/* How It Works Section */}
      <section
        style={{
          backgroundColor: "#fff",
          padding: "60px 20px",
          textAlign: "center",
          borderTop: "1px solid #eee",
          borderBottom: "1px solid #eee",
        }}
      >
        <h2 style={{ color: "#e67e22", marginBottom: "30px" }}>How RecipeFinder Works</h2>
        <div
          className="steps"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          {[
            {
              img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
              title: "1️⃣ Enter Ingredients",
              desc: "Tell us what ingredients you have — from eggs to vegetables.",
            },
            {
              img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
              title: "2️⃣ Explore Recipes",
              desc: "We instantly show you creative recipes that fit your ingredients.",
            },
            {
              img: "https://images.unsplash.com/photo-1601050690597-96b52d39b6d2?auto=format&fit=crop&w=800&q=80",
              title: "3️⃣ Cook & Enjoy!",
              desc: "Follow easy step-by-step instructions with nutrition details.",
            },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                width: "280px",
                background: "#fdfdfd",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                overflow: "hidden",
              }}
            >
              <img
                src={s.img}
                alt={s.title}
                style={{ width: "100%", height: "180px", objectFit: "cover" }}
              />
              <div style={{ padding: "15px" }}>
                <h3 style={{ color: "#e67e22" }}>{s.title}</h3>
                <p style={{ color: "#555" }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values Section */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ color: "#e67e22" }}>Our Values</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "40px",
            marginTop: "30px",
          }}
        >
          {[
            {
              icon: "🥦",
              title: "Health First",
              desc: "We believe good food should also be good for your health.",
            },
            {
              icon: "💡",
              title: "Simplicity",
              desc: "Every feature is designed to make cooking easier and faster.",
            },
            {
              icon: "🌍",
              title: "Community",
              desc: "We promote sharing and discovering recipes from around the world.",
            },
          ].map((v, i) => (
            <div
              key={i}
              style={{
                width: "250px",
                padding: "20px",
                background: "#fff",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h1 style={{ fontSize: "40px" }}>{v.icon}</h1>
              <h3 style={{ color: "#e67e22" }}>{v.title}</h3>
              <p style={{ color: "#555" }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section
        style={{
          padding: "60px 20px",
          backgroundColor: "#fff",
          textAlign: "center",
          borderTop: "1px solid #eee",
        }}
      >
        <h2 style={{ color: "#e67e22" }}>Meet Our Team</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
            marginTop: "30px",
          }}
        >
          {team.map((member, i) => (
            <div
              key={i}
              style={{
                width: "260px",
                background: "#fff",
                borderRadius: "15px",
                padding: "20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <img
                src={member.img}
                alt={member.name}
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "15px",
                }}
              />
              <h3 style={{ color: "#e67e22" }}>{member.name}</h3>
              <p style={{ fontWeight: "bold", color: "#777" }}>{member.role}</p>
              <p style={{ fontSize: "15px", color: "#555" }}>{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section
        style={{
          backgroundColor: "#e67e22",
          color: "white",
          textAlign: "center",
          padding: "60px 20px",
          marginTop: "50px",
        }}
      >
        <h2>Ready to Start Your Cooking Journey?</h2>
        <p style={{ fontSize: "18px", marginTop: "10px" }}>
          Join thousands of users who discover new recipes every day on RecipeFinder.
        </p>
        <a
          href="/register"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 24px",
            backgroundColor: "white",
            color: "#e67e22",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Join Now
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
