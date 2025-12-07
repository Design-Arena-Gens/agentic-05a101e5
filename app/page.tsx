import Image from "next/image";

const featureHighlights = [
  {
    title: "AI-Assisted Flow Control",
    description:
      "Adaptive sensors adjust output in real time for steady pressure across residential, agricultural, and industrial use cases."
  },
  {
    title: "Energy Optimizer Core",
    description:
      "Variable frequency drive and precision-engineered impellers deliver up to 38% lower energy consumption than legacy pumps."
  },
  {
    title: "Rugged Reliability",
    description:
      "IP68-rated enclosure, ceramic bearings, and self-cleaning intakes keep AquaPulse Pro operating in harsh environments."
  }
];

const specGrid = [
  { label: "Flow Rate", value: "12,000 L/hr" },
  { label: "Max Head", value: "65 m" },
  { label: "Motor Output", value: "3.5 kW VFD" },
  { label: "Connectivity", value: "Wi-Fi + Modbus" },
  { label: "Operating Temp", value: "-20°C to 70°C" },
  { label: "Warranty", value: "10 Years" }
];

const testimonials = [
  {
    quote:
      "We replaced legacy pumps across three treatment plants and saw a 24% reduction in operating costs within the first quarter.",
    name: "Priya Desai",
    role: "Director of Engineering, ClearFlow Utilities"
  },
  {
    quote:
      "The predictive maintenance dashboard flagged a bearing issue nine days before failure—saved us an entire crop cycle.",
    name: "Carlos Medina",
    role: "Farm Operations Manager, Verde Harvest"
  }
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero__content">
          <span className="badge">New Release</span>
          <h1>
            AquaPulse Pro<span>™</span>
          </h1>
          <p>
            The intelligent water pump engineered for mission-critical flow
            control. Ultra-efficient. Cloud connected. Field proven.
          </p>
          <div className="cta-group">
            <a className="btn btn--primary" href="#demo">
              Schedule a live demo
            </a>
            <a className="btn btn--ghost" href="#specs">
              Download spec sheet
            </a>
          </div>
          <div className="hero__metrics">
            <div>
              <strong>38%</strong>
              <span>Energy savings (avg)</span>
            </div>
            <div>
              <strong>9x</strong>
              <span>Longer service intervals</span>
            </div>
            <div>
              <strong>&lt;48h</strong>
              <span>Deployment timeline</span>
            </div>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__orbital">
            <div className="hero__pump">
              <Image
                src="/pump-render.svg"
                alt="AquaPulse Pro smart water pump"
                width={480}
                height={480}
                priority
              />
            </div>
            <div className="hero__ring hero__ring--outer" />
            <div className="hero__ring hero__ring--inner" />
          </div>
          <div className="hero__status">
            <span>Live Telemetry</span>
            <strong>Optimal flow</strong>
            <p>
              Pressure 5.9 bar · Power 1.8 kW · Predictive maintenance score 98%
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <header className="section__header">
          <span className="section__tag">Performance</span>
          <h2>Precision pumping, orchestrated by intelligence</h2>
          <p>
            AquaPulse Pro blends mechanical excellence with real-time analytics
            so you can scale water delivery without sacrificing stability.
          </p>
        </header>
        <div className="features">
          {featureHighlights.map((feature) => (
            <article key={feature.title} className="card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--dark" id="specs">
        <div className="section__header">
          <span className="section__tag section__tag--accent">
            Technical specs
          </span>
          <h2>Engineered for demanding missions</h2>
          <p>
            Certified for municipal, industrial, and agricultural compliance.
            Seamlessly integrates with SCADA, IoT, and building management
            systems.
          </p>
        </div>
        <div className="specs">
          {specGrid.map((item) => (
            <div key={item.label} className="specs__item">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
        <div className="specs__diagram">
          <Image
            src="/pump-cutaway.svg"
            alt="Pump cutaway diagram"
            width={620}
            height={400}
          />
          <ul>
            <li>Dual-stage impeller chamber</li>
            <li>Ceramic ultra-low-friction bearings</li>
            <li>Smart diagnostics core</li>
            <li>Rapid-drain maintenance ports</li>
          </ul>
        </div>
      </section>

      <section className="section" id="platform">
        <div className="data">
          <div className="data__copy">
            <span className="section__tag">Connected intelligence</span>
            <h2>Command center for predictive maintenance</h2>
            <p>
              Monitor fleet-wide performance, automate alerts, and trigger
              self-calibration routines from the AquaPulse Pilot platform.
              Native integrations with Azure, AWS IoT Core, and secure APIs.
            </p>
            <ul>
              <li>24/7 telemetry with ISO 27001 compliant data handling</li>
              <li>Machine learning models trained on 2.7B hours of pump data</li>
              <li>Automated compliance reporting and SLA tracking</li>
            </ul>
            <div className="cta-group">
              <a className="btn btn--primary" href="#demo">
                Explore Pilot dashboard
              </a>
              <a className="btn btn--ghost" href="#contact">
                Talk to an engineer
              </a>
            </div>
          </div>
          <div className="data__visual">
            <Image
              src="/pilot-dashboard.svg"
              alt="AquaPulse Pilot dashboard"
              width={520}
              height={360}
            />
          </div>
        </div>
      </section>

      <section className="section section--accent" id="testimonials">
        <header className="section__header">
          <span className="section__tag section__tag--light">Case studies</span>
          <h2>Trusted by utilities, growers, and smart cities</h2>
        </header>
        <div className="testimonials">
          {testimonials.map((item) => (
            <blockquote key={item.name}>
              <p>{item.quote}</p>
              <footer>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section section--edge" id="demo">
        <div className="edge">
          <div className="edge__copy">
            <span className="section__tag section__tag--accent">
              Deployment
            </span>
            <h2>Rapid rollout program</h2>
            <p>
              From assessment to live telemetry in under 48 hours with our
              certified field engineers. We handle the heavy lifting—site
              surveys, hydraulic modeling, commissioning, and operator training.
            </p>
          </div>
          <div className="edge__stats">
            <div>
              <strong>Global</strong>
              <span>Service coverage across 42 countries</span>
            </div>
            <div>
              <strong>Tier III</strong>
              <span>Data center grade redundancy</span>
            </div>
            <div>
              <strong>99.97%</strong>
              <span>Average uptime across deployments</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--contact" id="contact">
        <div className="contact">
          <div className="contact__copy">
            <h2>Let&apos;s build resilient water infrastructure</h2>
            <p>
              Submit your project requirements and our engineering team will
              deliver a tailored proposal with hydraulic modeling, ROI analysis,
              and integration scope.
            </p>
            <div className="contact__details">
              <div>
                <span>Direct support</span>
                <a href="tel:+18005551234">+1 800 555 1234</a>
              </div>
              <div>
                <span>Enterprise inquiries</span>
                <a href="mailto:solutions@aquapulse.io">
                  solutions@aquapulse.io
                </a>
              </div>
            </div>
          </div>
          <form className="contact__form">
            <label>
              Full name
              <input type="text" name="name" placeholder="Jordan Lee" />
            </label>
            <label>
              Company
              <input type="text" name="company" placeholder="Silverline Water" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@company.com" />
            </label>
            <label>
              Project scope
              <textarea
                name="message"
                placeholder="Tell us about your pumping challenge..."
                rows={3}
              />
            </label>
            <button className="btn btn--primary" type="submit">
              Request project consultation
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>AquaPulse Technologies</strong>
          <p>
            Delivering resilient water infrastructure with intelligent pumping
            systems since 1998.
          </p>
        </div>
        <div>
          <span>Headquarters</span>
          <p>
            1820 Cascade Avenue
            <br />
            Portland, OR 97205
          </p>
        </div>
        <div>
          <span>Follow</span>
          <ul>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">YouTube</a>
            </li>
            <li>
              <a href="#">Resource Library</a>
            </li>
          </ul>
        </div>
        <p className="footer__legal">
          © {new Date().getFullYear()} AquaPulse. All rights reserved. | ISO
          9001 | IEC 60034-30 | UL 778
        </p>
      </footer>
    </main>
  );
}
