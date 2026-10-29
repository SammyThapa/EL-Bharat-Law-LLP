import img3 from "../assets/featuredNews/fnews4.png";
import style from "../pages/News.module.css";
import oldData from "../data/oldNewsData";
import { Link } from "react-router-dom";
import img4 from "../assets/featuredNews/fnews2.png";
import img2 from "../assets/featuredNews/fnews8.png";
import img1 from "../assets/featuredNews/fnews9.png";
import img from "../assets/featuredNews/fnews7.png";

import { motion } from "motion/react";

function News() {
  const newsData = [
    {
      id: 1,
      image: img1,
      date: "28 Oct, 2026",
      type: "Legal Update",

      title:
        "PRESS FREEDOM VS. RIGHT TO PRIVACY: SUPREME COURT EXAMINES THE CONSTITUTIONAL BALANCE UNDER INDIA'S DIGITAL PERSONAL DATA PROTECTION FRAMEWORK",

      slug: "press-freedom-vs-right-to-privacy-supreme-court-constitutional-balance-india-digital-personal-data-protection-framework",
    },
    {
      id: 2,
      image: img2,
      date: "26 Oct, 2026",
      type: "Legal Update",

      title:
        "SUPREME COURT DIRECTS ALTERNATIVE LAND FOR FLAT OWNERS BEFORE DEMOLITION OF APARTMENTS BUILT ON WATER-BODY LAND",

      slug: "supreme-court-directs-alternative-land-flat-owners-before-demolition-apartments-water-body-land",
    },
    {
      id: 3,
      image: img3,
      date: "15 Oct, 2026",
      type: "Legal Update",

      title:
        "SUPREME COURT ON MID-COURSE FEE HIKES: PROTECTING STUDENTS THROUGH FEE TRANSPARENCY AND REGULATORY COMPLIANCE",

      slug: "supreme-court-mid-course-fee-hikes-student-protection-fee-transparency-regulatory-compliance",
    },
    {
      id: 4,
      image: img4,
      type: "Legal Update",
      date: "14 Oct, 2026",
      title:
        "SUPREME COURT EXAMINES LEGAL IMMUNITY OF ELECTION COMMISSIONERS: CONSTITUTIONAL ACCOUNTABILITY UNDER SCRUTINY",
      slug: "supreme-court-examines-legal-immunity-of-election-commissioners",
    },
  ];

  const featuredNews = {
    image: img,
    type: "Featured Insight",
    date: "29 Oct, 2026",
    title:
      "Supreme Court Questions Election Commission Over Form 6 Requirement for Deleted Voters in Delhi SIR",

    slug: "supreme-court-questions-election-commission-form-6-deleted-voters-delhi-sir",
  };

  return (
    <section className={style.newsSec}>
      <motion.h2
        className={style.headingCon}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Insights
      </motion.h2>

      <div className={style.background}>
        <motion.h2
          className={style.featured}
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Newly Featured
        </motion.h2>

        <div className={style.flex}>
          {/* Smaller news articles */}
          <motion.div
            className={style.grid}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {newsData.map((data) => (
              <Link to={`/newsdetails/${data.slug}`} key={data.id}>
                <article className={style.designNew}>
                  <img src={data.image} alt={data.title} />

                  <div className={style.newsContent}>
                    <div className={style.typeDate}>
                      <span>{data.type}</span>
                      <span>|</span>
                      <span>{data.date}</span>
                    </div>

                    <h2>{data.title}</h2>
                    <button>Read More</button>
                  </div>
                </article>
              </Link>
            ))}
          </motion.div>

          {/* Featured article */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Link to="/newsdetails/supreme-court-questions-election-commission-form-6-deleted-voters-delhi-sir">
              <article className={style.bigNews}>
                <img src={featuredNews.image} alt={featuredNews.title} />

                <div className={style.bigNewsContent}>
                  <div className={style.typeDate}>
                    <span>{featuredNews.type}</span>
                    <span>|</span>
                    <span>{featuredNews.date}</span>
                  </div>

                  <h2>{featuredNews.title}</h2>

                  <p>{featuredNews.description}</p>

                  <button className={style.readMore}>Read More</button>
                </div>
              </article>
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        className={style.oldNews}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className={style.oldGrid}>
          {oldData.map((old) => {
            return (
              <Link
                to={`/newsdetails/${old.slug}`}
                className={style.cardLink}
                key={old.id}
              >
                <div className={style.card}>
                  <img src={old.image} alt={old.title} />

                  <div className={style.cardContent}>
                    <div className={style.flexedContents}>
                      <span className="text-(--colr-accent)">{old.type}</span>

                      <span>| {old.date}</span>
                    </div>

                    <h2>{old.title}</h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default News;
