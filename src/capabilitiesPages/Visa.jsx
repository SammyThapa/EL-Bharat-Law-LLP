import style from "../capabilitiesPages/cap.module.css";
import img from "../assets/visa.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";

function Visa() {
  const [showAns, setShowAns] = useState(null);

  const Questions = [
    {
      id: 1,
      ques: "Can a visa refusal be challenged or appealed?",
      ans: "Yes, depending on the case, refusals can be appealed or refiled with stronger documentation and legal support.",
      plus: "+",
      minus: "−",
    },
    {
      id: 2,
      ques: "Do you analyze refusal reasons in detail?",
      ans: "Absolutely. We conduct a thorough assessment to identify issues and improve your application.",
      plus: "+",
      minus: "−",
    },
    {
      id: 3,
      ques: "Will you assist with reapplication as well?",
      ans: "Yes, we provide complete support for both appeals and reapplications.",
      plus: "+",
      minus: "−",
    },
    {
      id: 4,
      ques: "Can you handle complex or multiple refusals?",
      ans: "Yes, we specialize in handling complex cases and previous refusals with strategic solutions.",
      plus: "+",
      minus: "−",
    },
    {
      id: 5,
      ques: "How do I get started?",
      ans: "You can connect with our team by booking a consultation to discuss your business needs and receive expert legal guidance.",
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
              Strategic. Precise. Result-Focused.
            </span>

            <h1>Visa Refusal Appeal Services</h1>

            <p>
              We provide specialized legal support for visa refusal and appeal
              matters, helping individuals overcome rejections with a strong and
              well-structured legal approach. A visa refusal can be complex and
              discouraging, but with the right legal strategy, it can be
              effectively challenged and resolved. At EL Bharat, we analyze
              refusal reasons, identify gaps in documentation, and prepare
              detailed appeal submissions to strengthen your case. Our team
              ensures that every application is supported by accurate
              documentation, legal justification, and a clear presentation
              aligned with immigration laws and requirements.
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
            We understand that visa refusals can be stressful. Here are some
            common queries to guide you.
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

export default Visa;
