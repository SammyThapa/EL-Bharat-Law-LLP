import style from "../capabilitiesPages/cap.module.css";
import img from "../assets/tax.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";

function Taxation() {
  const [showAns, setShowAns] = useState(null);

  const Questions = [
    {
      id: 1,
      ques: "Do you assist with tax planning and compliance?",
      ans: "Yes, we provide strategic tax planning and ensure compliance with all applicable tax laws.",
      plus: "+",
      minus: "−",
    },
    {
      id: 2,
      ques: "Can you handle tax disputes and notices?",
      ans: "Absolutely. We draft, review, and negotiate business contracts to protect your interests.",
      plus: "+",
      minus: "−",
    },
    {
      id: 3,
      ques: "Do you advise businesses on financial legal matters?",
      ans: "Yes, we offer comprehensive advisory for businesses on taxation, compliance, and financial structuring.",
      plus: "+",
      minus: "−",
    },
    {
      id: 4,
      ques: "Can you help with audits and regulatory issues?",
      ans: "Yes, we assist in handling audits, notices, and regulatory compliance matters effectively.",
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
              Compliant. Strategic. Financially Sound.
            </span>

            <h1>Taxation & Financial Legal Services</h1>

            <p>
              We provide comprehensive legal solutions in taxation and financial
              matters, helping individuals and businesses navigate complex
              regulatory frameworks with confidence. In today’s dynamic
              financial environment, effective tax planning and legal compliance
              are essential to minimize risks and ensure long-term stability. At
              EL Bharat, we assist with direct and indirect taxation, tax
              planning, compliance, audits, financial disputes, and regulatory
              advisory. Our team ensures that your financial matters are
              structured efficiently while adhering to all applicable legal and
              regulatory requirements.
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
            We understand that taxation and financial matters can be complex.
            Here are some common queries to guide you.
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

export default Taxation;
