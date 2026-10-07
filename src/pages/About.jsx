import { useEffect, useState } from "react";
import style from "../pages/About.module.css";
import img from "../assets/blacklogo.png";
import WhyChooseUs from "../components/WhyChooseUs";
import { motion } from "motion/react";

function About() {
  const [stats, setStats] = useState({
    years: 0,
    clients: 0,
    partners: 0,
  });

  useEffect(() => {
    const target = {
      years: 10,
      clients: 100,
      partners: 20,
    };

    const counter = setInterval(() => {
      setStats((prev) => {
        const updatedStats = {
          years: Math.min(prev.years + 1, target.years),
          clients: Math.min(prev.clients + 1, target.clients),
          partners: Math.min(prev.partners + 1, target.partners),
        };

        const statsComplete =
          updatedStats.years === target.years &&
          updatedStats.clients === target.clients &&
          updatedStats.partners === target.partners;

        if (statsComplete) {
          clearInterval(counter);
        }

        return updatedStats;
      });
    }, 70);

    return () => clearInterval(counter);
  }, []);

  return (
    <main className={style.aboutPage}>
      {/* Introduction Section */}
      <section className={style.aboutIntro}>
        <motion.div
          className={style.introImage}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={img} alt="Our professional team" />
        </motion.div>

        <motion.div
          className={style.introContent}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span className={style.sectionLabel}>ABOUT US</span>

          <h1>Knowledge, experience, and trust behind every decision.</h1>

          <p>
            We are committed to providing reliable news, meaningful insights,
            and practical legal information to help people understand the world
            around them.
          </p>

          <p>
            Our goal is to make complex legal matters easier to understand.
            Through accurate reporting, professional expertise, and a
            people-first approach, we connect information with the people who
            need it most.
          </p>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <motion.section
        className={style.stats}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className={style.subStat}>
          <span>{stats.years}+</span>
          <h2>Years of Legacy</h2>
        </div>

        <div className={style.subStat}>
          <span>{stats.partners}+</span>
          <h2>Partners</h2>
        </div>

        <div className={style.subStat}>
          <span>2</span>
          <h2>Locations</h2>
          <p>Delhi, Dehradun</p>
        </div>

        <div className={style.subStat}>
          <span>{stats.clients}+</span>
          <h2>Clients</h2>
        </div>
      </motion.section>

      {/* Vision and Mission Section */}
      <section className={style.visionMission}>
        <motion.div
          className={style.visionHeader}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className={style.sectionLabel}>OUR PURPOSE</span>

          <h2>Vision and Mission</h2>
        </motion.div>

        <motion.div
          className={style.visionGrid}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <article className={style.visionCard}>
            <span className={style.cardNumber}>01</span>
            <h3>Our Vision</h3>
            <p>
              To become a trusted global advisory partner for individuals and
              families seeking education, mobility, and international
              opportunities with clarity and confidence.
            </p>
          </article>

          <article className={style.visionCard}>
            <span className={style.cardNumber}>02</span>
            <h3>Our Mission</h3>
            <p>
              To simplify complex legal matters, deliver accurate information,
              and create a platform where knowledge is accessible, clear, and
              useful to everyone.
            </p>
          </article>
        </motion.div>

        <WhyChooseUs />
      </section>
    </main>
  );
}

export default About;
