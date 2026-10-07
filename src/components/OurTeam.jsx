import style from "../components/OurTeam.module.css";
import img from "../assets/team.png";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function OurTeam() {
  return (
    <section className={style.ourTeam}>
      <motion.div
        className={style.content}
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <span className={style.sectionLabel}>OUR TEAM</span>

        <h2>
          Our lawyers bring together deep legal knowledge, practical experience,
          and a commitment to achieving the best possible outcomes for our
          clients.
        </h2>

        <p className="text-(--color-primary)">
          Meet our team of dedicated legal professionals who provide strategic
          advice and effective representation across a wide range of legal
          matters.
        </p>

        <button>
          <Link to="/people">→</Link>
        </button>
      </motion.div>

      <motion.img
        src={img}
        alt="Our Team"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: "easeOut",
        }}
      />
    </section>
  );
}

export default OurTeam;
