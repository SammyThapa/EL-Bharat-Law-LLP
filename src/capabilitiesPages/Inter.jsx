import style from "../capabilitiesPages/cap.module.css";
import img from "../assets/inter.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";

function Inter() {
  const [showAns, setShowAns] = useState(null);

  const Questions = [
    {
      id: 1,
      ques: "What does international trade law cover?",
      ans: "It includes import-export regulations, trade agreements, customs compliance, and dispute resolution.",
      plus: "+",
      minus: "−",
    },
    {
      id: 2,
      ques: "Who requires international trade legal services?",
      ans: "Exporters, importers, manufacturers, logistics companies, and multinational businesses.",
      plus: "+",
      minus: "−",
    },
    {
      id: 3,
      ques: "How are cross-border disputes handled?",
      ans: "Through international arbitration, mediation, or jurisdiction-based litigation.",
      plus: "+",
      minus: "−",
    },
    {
      id: 4,
      ques: "Why is compliance critical in global trade?",
      ans: "Non-compliance can result in penalties, shipment delays, and legal liabilities.",
      plus: "+",
      minus: "−",
    },
    {
      id: 5,
      ques: "Do you provide complete legal support?",
      ans: "Yes, from advisory and documentation to compliance and dispute resolution.",
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
            <span className={style.tag}>Enabling Secure Global Trade</span>

            <h1>International Trade Law & Cross-Border Advisory</h1>

            <p>
              International trade involves complex legal frameworks, regulatory
              compliance, and cross-border risk management. Businesses engaged
              in global trade must navigate import-export regulations, trade
              agreements, customs laws, and international commercial terms to
              ensure smooth operations and legal security. At El Bharat Law
              Firm, we provide comprehensive legal advisory in international
              trade law, supporting businesses, exporters, importers, and global
              enterprises. Our focus is on structuring compliant transactions,
              mitigating risks, and ensuring alignment with international and
              domestic trade regulations.
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
            International trade law requires careful planning and legal clarity.
            Here are key aspects:
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

export default Inter;
