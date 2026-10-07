import style from "../pages/People.module.css";
import img1 from "../assets/user1.png";
import img2 from "../assets/user2.png";
import img3 from "../assets/user3.png";
import img from "../assets/userimg.jpg";

import { Link } from "react-router-dom";
import { motion } from "motion/react";

function People() {
  const teamMembers = [
    {
      id: 1,
      image: img1,
      name: "Anastasia Chroni",
      occupation:
        "Golden Visa and Investment Immigration Expert, Athens, Greece Key External Partner",
    },
    {
      id: 2,
      image: img2,
      name: "Siddharth Pokhriyal",
      occupation: "Civil & Criminal Law",
    },
    {
      id: 3,
      image: img3,
      name: "Mahima Anand",
      occupation: "BBA.LLB | MBA | LLM",
    },
  ];

  return (
    <section className={style.People}>
      <motion.div
        className={style.content}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src={img}
          alt="Our Team"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.div
          className={style.alignment}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h2>OUR TEAM</h2>

          <p className="text-(--color-primary)">
            Our legal professionals bring together experience, knowledge and a
            client-focused approach.
          </p>

          <p>
            Meet our team of dedicated legal professionals who provide strategic
            advice and effective representation across a wide range of legal
            matters.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className={style.team}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Meet Our Team
        </motion.h2>

        <motion.div
          className={style.teamGrid}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {teamMembers.map((member) => (
            <Link
              to={`/people/${member.id}`}
              className={style.teamCard}
              key={member.id}
            >
              <div className={style.imageContainer}>
                <img src={member.image} alt={member.name} />
              </div>

              <div className={style.cardContent}>
                <h3>{member.name}</h3>
                <p>{member.occupation}</p>
              </div>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default People;
