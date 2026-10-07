import style from "./HeroSec.module.css";
import img from "../assets/img1.png";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function HeroSec() {
  return (
    <section className={style.heroSection}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        viewport={{ once: true }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut",
        }}
        className={style.content}
      >
        <h3>TRUSTED LEGAL & GLOBAL ADVISORY SERVICES</h3>

        <h2>
          Strategic Legal Solutions
          <br />
          For a Changing World
        </h2>

        <p>
          EL Bharat provides comprehensive legal and global advisory services to
          individuals, families, and businesses, helping clients navigate
          complex legal matters with clarity and confidence.
        </p>

        <div className={style.buttons}>
          <button>
            <Link to="/contact">Book a Consultation</Link>
          </button>
        </div>
      </motion.div>

      <motion.div
        className={style.imageWrapper}
        initial={{ opacity: 0, x: 50 }}
        viewport={{ once: true }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut",
        }}
      >
        <img src={img} alt="Legal services" />
      </motion.div>
    </section>
  );
}

export default HeroSec;
