import style from "../components/AboutUsSec.module.css";
import img from "../assets/about.png";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function AboutUsSec() {
  return (
    <section className={style.aboutSection}>
      <div className={style.mainCon}>
        <motion.div
          className={style.content}
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut",
          }}
        >
          <h3>About Us</h3>

          <h1>Leading Legal & Global Advisory Experts in India</h1>

          <p>
            EL Bharat is a trusted law firm committed to delivering
            comprehensive legal solutions to individuals, families, and
            businesses. With expertise across legal advisory, documentation,
            dispute resolution, and international legal matters, we provide
            transparent and result-oriented services tailored to our clients'
            needs.
          </p>

          <button>
            <Link to="/about">Read More About Us</Link>
          </button>
        </motion.div>

        <motion.img
          src={img}
          alt="EL Bharat legal services"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut",
          }}
        />
      </div>
    </section>
  );
}

export default AboutUsSec;
