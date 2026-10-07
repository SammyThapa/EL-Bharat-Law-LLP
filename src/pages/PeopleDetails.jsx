import style from "../pages/PeopleDetails.module.css";
import { useParams } from "react-router-dom";
import { motion } from "motion/react";

import user1 from "../data/userdata/user1";
import user2 from "../data/userdata/user2";
import user3 from "../data/userdata/user3";

function PeopleDetails() {
  const { id } = useParams();

  const people = {
    1: user1,
    2: user2,
    3: user3,
  };

  const person = people[id];

  if (!person) {
    return <h2>Person not found</h2>;
  }

  return (
    <section className={style.userDetails}>
      <motion.div
        className={style.flexed}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src={person.image}
          alt={person.name}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.div
          className={style.flexedCol}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <h2>{person.name}</h2>

          <p>{person.occupation}</p>
        </motion.div>
      </motion.div>

      <motion.div
        className={style.overview}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2>Overview</h2>

        {person.overview.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </motion.div>
    </section>
  );
}

export default PeopleDetails;
