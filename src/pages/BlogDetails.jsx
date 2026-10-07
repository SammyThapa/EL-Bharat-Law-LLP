import { useParams } from "react-router-dom";
import equalPay from "../data/blogs/equalPay";
import vehicleRepossession from "../data/blogs/VehicleRepossession";
import style from "../pages/BlogDetails.module.css";
import pmlaPropertyAttachment from "../data/blogs/pmlaPropertyAttachment";
import { motion } from "motion/react";

function BlogDetails() {
  const { slug } = useParams();

  const blogs = [equalPay, vehicleRepossession, pmlaPropertyAttachment];

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return <h1>Blog Not Found</h1>;
  }

  return (
    <section className={style.BlogDetailsSec}>
      <motion.div
        className={style.articleHeader}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className={style.typeDate}>
          <span>{blog.type}</span>
          <span>|</span>
          <span>{blog.date}</span>
        </div>

        <h1>{blog.title}</h1>

        <p>{blog.introduction}</p>
      </motion.div>

      <motion.img
        className={style.heroImage}
        src={blog.img}
        alt={blog.title}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      />

      <article className={style.articleContent}>
        {blog.content.map((section, index) => (
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

            {/* Normal paragraphs */}
            {section.paragraphs?.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}

            {/* Highlight */}
            {section.highlight && <blockquote>{section.highlight}</blockquote>}

            {/* Paragraph after highlight */}
            {section.paragraphsAfterHighlight?.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}

            {/* Second highlight */}
            {section.secondHighlight && (
              <blockquote>{section.secondHighlight}</blockquote>
            )}

            {/* Bullet points */}
            {section.list && (
              <ul>
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {/* Numbered points */}
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

            {/* A, B, C... subsections */}
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

export default BlogDetails;
