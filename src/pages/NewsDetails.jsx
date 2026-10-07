import { useParams } from "react-router-dom";
import { motion } from "motion/react";

import pmlaAdjudicatingAuthority from "../data/LegalNews/pmlaAdjudicatingAuthority";
import compulsoryRetirement from "../data/LegalNews/compulsoryRetirement";
import socialMediaMinors from "../data/LegalNews/socialMediaMinors";
import style from "../pages/NewsDetails.module.css";

import news1 from "../data/featurednews/news1";
import news2 from "../data/featurednews/news2";
import news3 from "../data/featurednews/news3";
import bigNews from "../data/featurednews/bignews";

function NewsDetails() {
  const { slug } = useParams();

  const newsData = [
    pmlaAdjudicatingAuthority,
    compulsoryRetirement,
    socialMediaMinors,
    news2,
    news3,
    news1,
    bigNews,
  ];

  const news = newsData.find((item) => item.slug === slug);

  if (!news) {
    return <h1>News Not Found</h1>;
  }

  return (
    <section className={style.NewsDetailsSec}>
      {/* Header */}
      <motion.div
        className={style.newsHeader}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className={style.typeDate}>
          <span>{news.type}</span>
          <span>|</span>
          <span>{news.date}</span>
        </div>

        <h1>{news.title}</h1>

        <p>{news.introduction}</p>
      </motion.div>

      {/* Hero Image */}
      <motion.img
        className={style.heroImage}
        src={news.img}
        alt={news.title}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      />

      {/* Article Content */}
      <article className={style.newsContent}>
        {news.content.map((section, index) => (
          <motion.section
            className={style.contentSection}
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
          >
            <h2>{section.heading}</h2>

            {/* Paragraphs */}
            {section.paragraphs?.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}

            {/* Highlight */}
            {section.highlight && <blockquote>{section.highlight}</blockquote>}

            {/* Bullet List */}
            {section.list && (
              <ul>
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {/* Numbered List */}
            {section.numberedList && (
              <ol>
                {section.numberedList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ol>
            )}

            {/* Paragraphs after list */}
            {section.paragraphsAfterList?.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}

            {/* Subsections */}
            {section.subsections?.map((sub, i) => (
              <div className={style.subSection} key={i}>
                <h3>{sub.heading}</h3>

                {sub.paragraphs?.map((paragraph, j) => (
                  <p key={j}>{paragraph}</p>
                ))}
              </div>
            ))}

            {/* Paragraphs after subsections */}
            {section.paragraphsAfterSubsections?.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </motion.section>
        ))}
      </article>
    </section>
  );
}

export default NewsDetails;
