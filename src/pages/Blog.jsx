import style from "../pages/Blog.module.css";
import blogData from "../data/blogData";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function Blog() {
  return (
    <section className={style.BlogSec}>
      <motion.div
        className={style.background}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className={style.headingCon}>Our Blogs</h2>
      </motion.div>

      <motion.div
        className={style.cardCon}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {blogData.map((data) => {
          return (
            <Link to={`/blogdetails/${data.slug}`} key={data.slug}>
              <div className={style.card}>
                <img src={data.img} alt="Blog" />

                <div className={style.cardContent}>
                  <h2>{data.title}</h2>

                  <button className={style.readMore}>Read More</button>
                </div>
              </div>
            </Link>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Blog;
