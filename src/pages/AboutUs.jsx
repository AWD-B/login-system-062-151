import { useState, useEffect } from "react";

function AboutUs() {
  return (
    <div className="page about-page">
      <h1>About RecipeFinder 🍽️</h1>
      <p>
        Welcome to <strong>RecipeFinder</strong> — your ultimate cooking companion!
        Whether you’re a beginner or a master chef, we help you discover, save,
        and organize delicious recipes from all over the world.
      </p>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make cooking fun, easy, and inspiring. 
          We believe that everyone can cook something amazing with the right recipe — 
          and we’re here to help you find it!
        </p>
      </section>

      <section className="about-section">
        <h2>Features</h2>
        <ul>
          <li>🔍 Search thousands of recipes by ingredients or categories</li>
          <li>❤️ Save your favorite recipes to your dashboard</li>
          <li>🍳 Personalized recipe suggestions</li>
          <li>👩‍🍳 Create your own cooking profile</li>
        </ul>
      </section>

      <p>Start exploring today — and make every meal special! 🌿</p>
    </div>
  );
}

export default AboutUs;
