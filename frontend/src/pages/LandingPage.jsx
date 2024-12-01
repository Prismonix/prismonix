import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="navbar">
        <div className="logo">
          {/* Replace with your logo image */}
          <img src="/logo.png" alt="Prismonix Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#about" aria-label="About Us">About Us</a></li>
            <li><a href="#how-it-works" aria-label="How It Works">How It Works</a></li>
            <li><a href="#features" aria-label="Features">Features</a></li>
            <li><a href="#contact" aria-label="Contact Us">Contact Us</a></li>
          </ul>
        </nav>
        <div className="auth-links">
          <Link to="/signup">Join Us</Link>
          <Link to="/login">Sign In</Link>
        </div>
      </header>
      <main>
        <section className="hero-section">
          <h1>Welcome to Prismonix!</h1>
          <h2 className="tagline">Where Innovation Meets Opportunity</h2>
          <p>
            At Prismonix, we bring innovators, developers, and investors
            together, enabling the seamless exchange of ideas, expertise, and resources. 
            Our AI-powered system guides users from concept to realization.
          </p>
          <Link to="/signup">
            <button className="cta-button">Start Your Journey</button>
          </Link>
        </section>

        <section id="about" className="about-section">
          <h2>About Us</h2>
          <p>
            At Prismonix, we believe innovation thrives when the right people connect. Our platform is designed to bring innovators, developers,
            and investors together, enabling the seamless exchange of ideas, expertise, and resources. Whether you have a groundbreaking idea, 
            the technical skills to bring visions to life, or the investment capabilities to fuel innovation, Prismonix is where collaboration 
            meets opportunity. Our AI-powered system ensures personalized support, guiding innovators from concept to realization. 
          </p>
        </section>

        <section id="how-it-works" className="how-it-works-section">
          <h2>How It Works</h2>
          <div className="steps">
            {[
              "Sign Up: Join as an Innovator, Developer, or Investor.",
              "Submit Ideas: Innovators share their concepts with clear details.",
              "Skill Verification: Developers take skill tests to enhance credibility.",
              "AI Matchmaking: Our system connects innovators, developers, and investors.",
            ].map((step, index) => (
              <div key={index} className="step">
                <span>{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="features-section">
          <h2>Features</h2>
          <ul>
            {[
              "🌟 AI-Powered Idea Refinement",
              "🧪 Skill Verification Tests",
              "🤝 Intelligent Matchmaking",
              "📊 Idea Submission and Tracking",
              "👥 Comprehensive Profiles",
              "🛠️ Collaboration Tools",
              "📚 Skill Development Opportunities",
              "🌐 Community Engagement",
              "🔒 Secure Investments",
              "📈 Industry-Specific Insights",
            ].map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        <section id="contact" className="contact-section">
          <h2>Contact Us</h2>
          <p>Reach out to us for any queries, support, or feedback.</p>
          <ul>
            <li>Email: <a href="mailto:support@Prismonix.com">support@Prismonix.com</a></li>
            <li>Phone: <a href="tel:+911234567890">+91-123-456-7890</a></li>
            <li>Address: Prismonix HQ, 2nd Floor, Innovation Tower, Bengaluru, India</li>
          </ul>
          <div className="social-links">
            <a href="https://linkedin.com/Prismonix" aria-label="Visit LinkedIn">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://twitter.com/Prismonix" aria-label="Visit Twitter">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://instagram.com/Prismonix" aria-label="Visit Instagram">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
