"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const navRef = useRef<HTMLElement>(null);
  const [submitLabel, setSubmitLabel] = useState("Send Message →");
  const [submitStyle, setSubmitStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        navRef.current.style.background =
          window.scrollY > 60
            ? "rgba(5,10,6,0.98)"
            : "rgba(5,10,6,0.85)";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = document.querySelectorAll(
      ".service-card, .product-card, .why-card, .testi-card, .port-card, .student-feat, .pillar"
    );
    targets.forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(24px)";
      (el as HTMLElement).style.transition =
        "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitLabel("✓ Message Sent!");
    setSubmitStyle({ background: "#0f5c20" });
    setTimeout(() => {
      setSubmitLabel("Send Message →");
      setSubmitStyle({});
      (e.target as HTMLFormElement).reset();
    }, 3000);
  }

  return (
    <>
      {/* NAV */}
      <nav ref={navRef}>
        <div className="nav-logo">
          <span>BG THUB</span>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#student">Students</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Get Started</a>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>
        <div className="hero-orb orb1"></div>
        <div className="hero-orb orb2"></div>
        <div className="hero-content">
          <div className="hero-badge">From Idea to Impact</div>
          <h1>
            Building <span>Ideas</span>
            <br />
            Into Reality
          </h1>
          <p>
            We design, develop, and launch apps, websites, and AI-powered
            solutions for startups, businesses, and students.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Get Started</a>
            <a href="#portfolio" className="btn-outline">View Our Work</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-num">50<span>+</span></div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat">
              <div className="stat-num">2<span>+</span></div>
              <div className="stat-label">Own Products</div>
            </div>
            <div className="stat">
              <div className="stat-num">100<span>%</span></div>
              <div className="stat-label">Startup Focused</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-inner">
          <div>
            <div className="section-label">Who We Are</div>
            <h2 className="section-title">
              Turning <span>Ideas</span> Into Impactful Products
            </h2>
            <div className="divider"></div>
            <p className="section-sub">
              BG THUB is a technology company built to empower startups,
              businesses, and students. We don&apos;t just build software — we
              partner with you to bring your vision to life with speed,
              creativity, and real-world expertise.
            </p>
            <p className="section-sub" style={{ marginTop: "1rem" }}>
              From mobile apps and web platforms to AI integrations and student
              project support, we are the launchpad for your next big idea.
            </p>
          </div>
          <div className="about-visual">
            <div className="about-pillars">
              <div className="pillar">
                <div className="pillar-icon">💡</div>
                <h4>Innovation First</h4>
                <p>We build with cutting-edge tech that keeps you ahead of the curve.</p>
              </div>
              <div className="pillar">
                <div className="pillar-icon">🚀</div>
                <h4>Fast Execution</h4>
                <p>MVP to launch in record time without compromising quality.</p>
              </div>
              <div className="pillar">
                <div className="pillar-icon">🤝</div>
                <h4>Full Support</h4>
                <p>We stay with you from idea stage to post-launch growth.</p>
              </div>
              <div className="pillar">
                <div className="pillar-icon">🎯</div>
                <h4>Impact Driven</h4>
                <p>Every solution is designed to create real-world value.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="max-center text-center">
          <div className="section-label" style={{ justifyContent: "center" }}>What We Do</div>
          <h2 className="section-title">Our <span>Services</span></h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            Everything you need to build, launch, and scale your digital product — under one roof.
          </p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3>App Development</h3>
            <p>
              Native and cross-platform mobile apps for Android and iOS. From
              concept to Play Store with polished UX and robust architecture.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">🌐</div>
            <h3>Web Design &amp; Development</h3>
            <p>
              Modern, fast, and responsive websites and web apps built with the
              latest frameworks — tailored to your brand and goals.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">🤖</div>
            <h3>AI Solutions</h3>
            <p>
              Integrate intelligent features — chatbots, recommendation engines,
              automation — into your products using the latest AI tools.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">🎓</div>
            <h3>Student Project Support</h3>
            <p>
              End-to-end mentorship and development support for students building
              real-world projects, from idea validation to final product.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products" id="products">
        <div className="max-center text-center">
          <div className="section-label" style={{ justifyContent: "center" }}>Our Products</div>
          <h2 className="section-title">Built by <span>BG THUB</span></h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            We don&apos;t just build for clients — we build for the world. Here are our flagship products.
          </p>
        </div>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-badge">Travel · AI · Community</div>
            <h3>RideXe</h3>
            <p>
              A smart travel comparison and social travel platform. Compare
              rides, discover routes, share experiences, and connect with a
              community of travellers — all in one app.
            </p>
            <a href="#" className="product-link">Learn More</a>
          </div>
          <div className="product-card">
            <div className="product-badge">Productivity · Tasks · Focus</div>
            <h3>PROtask</h3>
            <p>
              A powerful yet minimal task management and productivity tool
              designed for individuals, teams, and students who want to get
              things done — without the clutter.
            </p>
            <a href="#" className="product-link">Learn More</a>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why">
        <div className="max-center text-center">
          <div className="section-label" style={{ justifyContent: "center" }}>Why BG THUB</div>
          <h2 className="section-title">Why Choose <span>Us</span></h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            We&apos;re not a generic agency. We&apos;re a team of builders who care about your success.
          </p>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-num">01</div>
            <h3>Fast Execution</h3>
            <p>We ship MVPs and full products at startup speed — without cutting corners on quality.</p>
          </div>
          <div className="why-card">
            <div className="why-num">02</div>
            <h3>Startup Mindset</h3>
            <p>We understand the startup journey. Our approach is lean, agile, and results-focused.</p>
          </div>
          <div className="why-card">
            <div className="why-num">03</div>
            <h3>Affordable Solutions</h3>
            <p>Premium quality doesn&apos;t have to be expensive. We offer flexible pricing for every stage.</p>
          </div>
          <div className="why-card">
            <div className="why-num">04</div>
            <h3>Real-World Experience</h3>
            <p>Our team has built and launched real products — we bring that experience to your project.</p>
          </div>
        </div>
      </section>

      {/* STUDENT SUPPORT */}
      <section className="student" id="student">
        <div className="student-inner">
          <div>
            <div className="section-label">For Students</div>
            <h2 className="section-title">
              We Help Students <span>Build Real Projects</span>
            </h2>
            <div className="divider"></div>
            <p className="section-sub">
              Not just ideas on paper — real, working products that you can show
              to the world, add to your portfolio, and even launch as a startup.
            </p>
            <div className="student-features">
              <div className="student-feat">
                <div className="feat-dot"></div>
                <div>
                  <h4>1-on-1 Mentorship</h4>
                  <p>Personal guidance from experienced builders who&apos;ve shipped real products.</p>
                </div>
              </div>
              <div className="student-feat">
                <div className="feat-dot"></div>
                <div>
                  <h4>Idea Validation</h4>
                  <p>We help you refine your concept into a viable, buildable product.</p>
                </div>
              </div>
              <div className="student-feat">
                <div className="feat-dot"></div>
                <div>
                  <h4>Full Development Support</h4>
                  <p>Technical help from architecture to deployment — we&apos;ve got your back.</p>
                </div>
              </div>
              <div className="student-feat">
                <div className="feat-dot"></div>
                <div>
                  <h4>Portfolio Ready</h4>
                  <p>Walk away with a live product you can proudly present to the world.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="student-cta-box">
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎓</div>
            <h3>Are you a student with a big idea?</h3>
            <p>
              Join the BG THUB student program and turn your academic project
              into a real-world product. We provide the tools, mentorship, and
              development support you need to succeed.
            </p>
            <a href="#contact" className="btn-primary">Apply Now</a>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio">
        <div className="max-center text-center">
          <div className="section-label" style={{ justifyContent: "center" }}>Our Work</div>
          <h2 className="section-title">Portfolio <span>&amp;</span> Projects</h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            A glimpse of what we&apos;ve built — apps, platforms, and digital
            experiences that make an impact.
          </p>
        </div>
        <div className="portfolio-grid">
          <div className="port-card">
            <div className="port-bg port-bg-1">🚗</div>
            <div className="port-info">
              <div className="port-tag">Mobile App</div>
              <h4>RideXe — Travel Platform</h4>
            </div>
          </div>
          <div className="port-card">
            <div className="port-bg port-bg-2">✅</div>
            <div className="port-info">
              <div className="port-tag">Productivity Tool</div>
              <h4>PROtask — Task Manager</h4>
            </div>
          </div>
          <div className="port-card">
            <div className="port-bg port-bg-3">🛒</div>
            <div className="port-info">
              <div className="port-tag">Web App</div>
              <h4>E-Commerce Platform</h4>
            </div>
          </div>
          <div className="port-card">
            <div className="port-bg port-bg-4">📊</div>
            <div className="port-info">
              <div className="port-tag">Dashboard</div>
              <h4>Analytics Dashboard</h4>
            </div>
          </div>
          <div className="port-card">
            <div className="port-bg port-bg-5">🤖</div>
            <div className="port-info">
              <div className="port-tag">AI Solution</div>
              <h4>AI Chatbot Integration</h4>
            </div>
          </div>
          <div className="port-card">
            <div className="port-bg port-bg-6">🎓</div>
            <div className="port-info">
              <div className="port-tag">Student Project</div>
              <h4>Campus Connect App</h4>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials" id="testimonials">
        <div className="max-center text-center">
          <div className="section-label" style={{ justifyContent: "center" }}>Testimonials</div>
          <h2 className="section-title">What People <span>Say</span></h2>
        </div>
        <div className="testi-grid">
          <div className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <blockquote>
              BG THUB took our rough idea and turned it into a polished product
              in just 6 weeks. Their team is incredibly fast, communicative, and
              genuinely invested in your success.
            </blockquote>
            <div className="testi-author">
              <div className="testi-avatar">AK</div>
              <div>
                <div className="testi-name">Arjun Kapoor</div>
                <div className="testi-role">Founder, LogiStart</div>
              </div>
            </div>
          </div>
          <div className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <blockquote>
              As a final year student, I didn&apos;t know where to start. BG THUB
              mentored me through every step and helped me launch my first real
              app. Couldn&apos;t have done it without them.
            </blockquote>
            <div className="testi-author">
              <div className="testi-avatar">PS</div>
              <div>
                <div className="testi-name">Priya Sharma</div>
                <div className="testi-role">CS Student, NMIT Bangalore</div>
              </div>
            </div>
          </div>
          <div className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <blockquote>
              We needed an AI-powered solution on a tight budget. BG THUB
              delivered something beyond what we expected — clean, scalable, and
              exactly on time. Highly recommend.
            </blockquote>
            <div className="testi-author">
              <div className="testi-avatar">RN</div>
              <div>
                <div className="testi-name">Rohit Nair</div>
                <div className="testi-role">Co-founder, BuildWave</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="contact-inner">
          <div className="section-label" style={{ justifyContent: "center" }}>Contact Us</div>
          <h2 className="section-title text-center">
            Let&apos;s Build Something <span>Amazing</span> Together
          </h2>
          <p className="section-sub" style={{ margin: "0.5rem auto 0", textAlign: "center" }}>
            Have an idea? A project? A question? We&apos;d love to hear from you.
            Drop us a message and we&apos;ll get back within 24 hours.
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="e.g. Ravi Kumar" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="you@email.com" required />
              </div>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell us about your idea or project..." required />
            </div>
            <button type="submit" className="form-submit" style={submitStyle}>
              {submitLabel}
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <span className="footer-brand-name">BG THUB</span>
              <p>
                Building the next generation of digital products. From idea to
                impact — we make it happen.
              </p>
              <div className="footer-socials">
                <a className="social-btn" href="#" title="Twitter">𝕏</a>
                <a className="social-btn" href="#" title="LinkedIn">in</a>
                <a className="social-btn" href="#" title="Instagram">ig</a>
                <a className="social-btn" href="#" title="GitHub">gh</a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <a href="#services">App Development</a>
              <a href="#services">Web Development</a>
              <a href="#services">AI Solutions</a>
              <a href="#student">Student Support</a>
            </div>
            <div className="footer-col">
              <h4>Products</h4>
              <a href="#products">RideXe</a>
              <a href="#products">PROtask</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#about">About Us</a>
              <a href="#portfolio">Our Work</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 BG THUB. All rights reserved.</p>
            <div className="tagline-footer">From Idea to Impact</div>
          </div>
        </div>
      </footer>
    </>
  );
}
