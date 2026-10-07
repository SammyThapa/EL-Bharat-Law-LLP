import style from "../capabilitiesPages/cap.module.css";
import img from "../assets/family.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";

function FamilyLaw() {
  const [showAns, setShowAns] = useState(null);

  const Questions = [
    {
      id: 1,
      ques: "Do you handle divorce and seperation cases  ?",
      ans: "Yes, we assist with mutual and contested divorce, legal separation, and related proceedings.",
      plus: "+",
      minus: "−",
    },
    {
      id: 2,
      ques: "Can you help with child custody and maintenance matters?",
      ans: "Absolutely. We provide legal support for custody arrangements, child support, and maintenance claims.",
      plus: "+",
      minus: "−",
    },
    {
      id: 3,
      ques: "Will my case remain confidential?",
      ans: "Yes, all family law matters are handled with strict confidentiality and sensitivity.",
      plus: "+",
      minus: "−",
    },
    {
      id: 4,
      ques: "Can family disputes be resolved without going to court?",
      ans: "In many cases, we aim for mediation and settlement to achieve faster and less stressful resolutions.",
      plus: "+",
      minus: "−",
    },
    {
      id: 5,
      ques: "How do I get started?",
      ans: "You can connect with our team by booking a consultation to discuss your matter and receive expert legal support.",
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
            <span className={style.tag}>Our Practice Area</span>

            <h1>Family Law</h1>

            <h2>Sensitive Matters. Strong Legal Support.</h2>

            <p>
              We provide compassionate and comprehensive legal services in
              family law matters, ensuring that your rights and interests are
              protected during sensitive and often emotional situations. Family
              disputes require not only legal expertise but also understanding,
              discretion, and a balanced approach.
            </p>

            <p>
              At EL Bharat, we assist with divorce proceedings, child custody,
              maintenance, domestic violence cases, property settlements, and
              other family-related legal issues. Our team is committed to
              guiding you with clarity, protecting your interests, and working
              towards fair and practical resolutions.
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
            We understand that family matters can be complex and personal. Here
            are some common queries to guide you.
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

export default FamilyLaw;
