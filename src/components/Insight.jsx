import style from "../components/Insight.module.css";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

import img1 from "../assets/newsImage/img1.png";
import img2 from "../assets/newsImage/img2.png";
import img3 from "../assets/newsImage/img3.png";

function Insight() {
  const cards = [
    {
      id: 1,
      image: img1,
      type: "Legal Update",
      date: "8 Aug, 2026",
      title:
        "Supreme Court examines validity of single-member PMLA adjudicating authority",
      slug: "supreme-court-examines-validity-of-single-member-pmla-adjudicating-authority",
    },
    {
      id: 2,
      image: img2,
      type: "Legal Update",
      date: "12 Aug, 2026",
      title:
        "Supreme Court Sets Aside Compulsory Retirement of Government Officer",
      slug: "supreme-court-sets-aside-compulsory-retirement-of-government-officer",
    },
    {
      id: 3,
      image: img3,
      type: "Legal Update",
      date: "18 Aug, 2026",
      title:
        "Supreme Court Seeks Centre's Response on Safeguards for Minors Using Social Media",
      slug: "supreme-court-seeks-centres-response-on-safeguards-for-minors-using-social-media",
    },
  ];

  return (
    <section className={style.insightSec}>
      <motion.div
        className={style.content}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <span className={style.sectionLabel}>INSIGHT</span>

        <h2>News and Insights</h2>

        <p className="text-(--color-primary)">
          Providing news and legal matters to our audience
        </p>
      </motion.div>

      <motion.div
        className={style.grid}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: "easeOut",
        }}
      >
        {cards.map((card) => (
          <Link
            to={`/newsdetails/${card.slug}`}
            className={style.card}
            key={card.id}
          >
            <img src={card.image} alt={card.title} />

            <div className={style.cardContent}>
              <div className={style.flexedContents}>
                <span className="text-(--color-accent)">{card.type}</span>

                <span>| {card.date}</span>
              </div>

              <h2>{card.title}</h2>
            </div>
          </Link>
        ))}
      </motion.div>

      <Link to="/news" className={style.readMore}>
        Read More ➔
      </Link>
    </section>
  );
}

export default Insight;
