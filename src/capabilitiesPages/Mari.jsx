import style from "../capabilitiesPages/cap.module.css";
import img from "../assets/mari.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";

function Mari() {
  const [showAns, setShowAns] = useState(null);

  const Questions = [
    {
      id: 1,
      ques: "What areas does maritime law cover?",
      ans: "It includes shipping contracts, cargo claims, marine insurance, and international trade regulations.",
      plus: "+",
      minus: "−",
    },
    {
      id: 2,
      ques: "Who requires maritime legal advisory?",
      ans: "Ship owners, operators, exporters, logistics companies, and maritime service providers.",
      plus: "+",
      minus: "−",
    },
    {
      id: 3,
      ques: "How are maritime disputes resolved?",
      ans: "Through arbitration, mediation, or litigation depending on contractual terms.",
      plus: "+",
      minus: "−",
    },
    {
      id: 4,
      ques: "Are international laws applicable in maritime cases?",
      ans: "Yes, maritime law is largely governed by international conventions and treaties.",
      plus: "+",
      minus: "−",
    },
    {
      id: 5,
      ques: "Do you provide end-to-end legal support?",
      ans: "Yes, from advisory and documentation to dispute resolution and compliance.",
      plus: "+",
      minus: "−",
    },
  ];

  const handleClick = (id) => {
    setShowAns((currentId) => {
      return currentId === id ? null : id;
    });
  };

  return (
    <>
      <section className={style.capPage}>
        <div className={style.conFlex}>
          <motion.div
            className={style.imageBox}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img src={img} alt="Family law consultation" />
          </motion.div>

          <motion.div
            className={style.content}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className={style.tag}>
              Navigating Legal Waters with Confidence
            </span>

            <h1>Maritime Advisory & Shipping Law Services</h1>

            <p>
              The maritime industry operates within a complex framework of
              international conventions, national regulations, and commercial
              practices. From shipping operations to marine contracts and
              dispute resolution, legal precision is essential to ensure
              compliance and protect business interests. At El Bharat Law Firm,
              we provide specialized maritime advisory services to ship owners,
              operators, logistics companies, and stakeholders involved in
              global trade. Our approach focuses on risk mitigation, regulatory
              compliance, and efficient handling of maritime legal matters
              across jurisdictions.
            </p>

            <button className={style.consultBtn}>
              <Link to="/contact">Consult Now</Link>
            </button>
          </motion.div>
        </div>
      </section>

      <section className={style.faqCon}>
        <motion.div
          className={style.headingContent}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3>Frequently Asked Questions</h3>

          <h2>Everything You Need to Know</h2>

          <p>
            Maritime law requires a strong understanding of both legal and
            operational frameworks. Key considerations include:
          </p>
        </motion.div>

        <motion.div
          className={style.faqList}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {Questions.map((Question) => {
            const isOpen = showAns === Question.id;

            return (
              <div
                className={`${style.faq} ${isOpen ? style.activeFaq : ""}`}
                key={Question.id}
                onClick={() => handleClick(Question.id)}
              >
                <div className={style.question}>
                  <p>{Question.ques}</p>

                  <span className={style.icon}>
                    {isOpen ? Question.minus : Question.plus}
                  </span>
                </div>

                <div
                  className={`${style.answerWrapper} ${
                    isOpen ? style.answerOpen : ""
                  }`}
                >
                  <p className={style.answer}>{Question.ans}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </section>
    </>
  );
}

export default Mari;
