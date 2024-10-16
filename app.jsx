import React from 'react';
import './App.css';

const Header = () => (
  <header className="header">
    <div className="logo">InsureAI</div>
    <nav>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

const Hero = () => (
  <section className="hero">
    <h1>Revolutionizing Auto Insurance with AI</h1>
    <p>AI-powered risk assessment, personalized pricing, and fraud detection—driving the future of auto insurance.</p>
    <div className="hero-buttons">
      <a href="#get-started" className="btn">Get Started</a>
      <a href="#learn-more" className="btn">Learn More</a>
    </div>
    <img src="https://your-image-link-here.com/ai-insurance.png" alt="AI Illustration" />
  </section>
);

const ProblemStatement = () => (
  <section className="problem-statement">
    <h2>The Problem with Traditional Auto Insurance</h2>
    <p>Outdated risk assessment models, inconsistent premium pricing, and delays in claims processing and fraud detection.</p>
    <div className="problems-icons">
      <img src="https://your-image-link-here.com/problem-icon1.png" alt="Problem Icon" />
      <img src="https://your-image-link-here.com/problem-icon2.png" alt="Problem Icon" />
      <img src="https://your-image-link-here.com/problem-icon3.png" alt="Problem Icon" />
    </div>
  </section>
);

const Solution = () => (
  <section className="solution">
    <h2>Our AI-Powered Solution</h2>
    <p>Integrating telematics, machine learning, and AI for risk assessment, dynamic pricing, fraud detection, and claims management.</p>
    <img src="https://your-image-link-here.com/solution-flowchart.png" alt="Solution Flowchart" />
  </section>
);

const Features = () => (
  <section id="features" className="features">
    <h2>Key Features</h2>
    <ul>
      <li>AI-Powered Risk Assessment</li>
      <li>Dynamic Pricing Using Telematics</li>
      <li>Advanced Fraud Detection</li>
      <li>Real-Time Claims Processing</li>
      <li>Personalized Customer Communication with Generative AI</li>
    </ul>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="how-it-works">
    <h2>How InsureAI Works</h2>
    <div className="steps">
      <div className="step">
        <h3>Step 1</h3>
        <p>Get a personalized insurance plan based on driving data.</p>
      </div>
      <div className="step">
        <h3>Step 2</h3>
        <p>AI-driven monitoring and real-time risk updates.</p>
      </div>
      <div className="step">
        <h3>Step 3</h3>
        <p>Claims processed efficiently with AI-powered fraud detection.</p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="quick-links">
      <a href="#features">Features</a>
      <a href="#pricing">Pricing</a>
      <a href="#contact">Contact</a>
    </div>
    <div className="contact-info">
      <p>Email: support@insureai.com</p>
      <p>Phone: +123 456 7890</p>
    </div>
    <div className="social-media">
      <a href="#"><i className="fab fa-facebook"></i></a>
      <a href="#"><i className="fab fa-twitter"></i></a>
      <a href="#"><i className="fab fa-linkedin"></i></a>
    </div>
  </footer>
);

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProblemStatement />
      <Solution />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
