import style from "../capabilitiesPages/cap.module.css";
import img from "../assets/pre.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";

function Pre() {
  const [showAns, setShowAns] = useState(null);

  const Questions = [
    {
      id: 1,
      ques: "What is pre-litigation legal support?",
      ans: "It involves resolving disputes before filing a case in court through notices, negotiations, and mediation.",
      plus: "+",
      minus: "−",
    },
    {
      id: 2,
      ques: "Can disputes be resolved without going to court?",
      ans: "Yes, many disputes can be settled efficiently through negotiation and alternative dispute resolution methods.",
      plus: "+",
      minus: "−",
    },
    {
      id: 3,
      ques: "Do you assist with drafting legal notices?",
      ans: "Absolutely. We draft and respond to legal notices with a strategic and legally sound approach.",
      plus: "+",
      minus: "−",
    },
    {
      id: 4,
      ques: "What if the dispute is not resolved?",
      ans: "If necessary, we prepare your case for litigation with a strong legal foundation.",
      plus: "+",
      minus: "−",
    },
    {
      id: 5,
      ques: "How do I get started?",
      ans: "You can connect with our team by booking a consultation to discuss your requirements and receive expert legal guidance.",
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
              Strategic. Efficient. Result-Oriented.
            </span>

            <h1>Pre-Litigation & Dispute Resolution</h1>

            <p>
              We provide effective pre-litigation and dispute resolution
              services designed to resolve conflicts efficiently without the
              need for prolonged court proceedings. Early legal intervention can
              save time, reduce costs, and preserve relationships while ensuring
              your rights are fully protected. At EL Bharat, we assist with
              legal notices, negotiations, mediation, settlements, and
              alternative dispute resolution (ADR). Our team focuses on
              identifying practical solutions and achieving favorable outcomes
              through structured and strategic approaches.
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
            We understand that disputes can be stressful and complex. Here are
            some common queries to guide you.
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

export default Pre;
