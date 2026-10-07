import style from "../capabilitiesPages/cap.module.css";
import img from "../assets/mari.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function Criminal() {
  const [showAns, setShowAns] = useState(null);

  const Questions = [
    {
      id: 1,
      ques: "Do you handle bail and urgent criminal matters?",
      ans: "Yes, we assist with bail applications, anticipatory bail, and urgent legal representation.",
      plus: "+",
      minus: "−",
    },
    {
      id: 2,
      ques: "Can you represent clients during investigations and trials?",
      ans: "Absolutely. We provide complete legal support from investigation to trial and appeals.",
      plus: "+",
      minus: "−",
    },
    {
      id: 3,
      ques: "Will my case be handled confidentially?",
      ans: "Yes, all criminal matters are handled with strict confidentiality and professional discretion.",
      plus: "+",
      minus: "−",
    },
    {
      id: 4,
      ques: "Do you assist with FIR-related issues?",
      ans: "Yes, we provide guidance and representation for FIR registration, quashing, and related legal procedures.",
      plus: "+",
      minus: "−",
    },
    {
      id: 5,
      ques: "How do I get started?",
      ans: "You can connect with our team immediately by booking a consultation for urgent and expert legal assistance.",
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
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <img src={img} alt="Family law consultation" />
          </motion.div>

          <motion.div
            className={style.content}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            <span className={style.tag}>
              Defending Rights. Delivering Justice.
            </span>

            <h1>⁠⁠Criminal Law Services</h1>

            <p>
              We provide strong and strategic legal representation in criminal
              matters, ensuring that your rights are protected at every stage of
              the legal process. Criminal cases demand precision, urgency, and a
              deep understanding of the law to secure the best possible outcome.
            </p>

            <p>
              At EL Bharat, we represent clients in a wide range of criminal
              matters including bail applications, FIR-related issues,
              investigations, trials, and appeals. Our team is committed to
              building a robust defense strategy, handling sensitive matters
              with discretion, and advocating effectively before the courts.
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
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <h3>Frequently Asked Questions</h3>

          <h2>Everything You Need to Know</h2>

          <p>
            We understand that criminal matters can be urgent and complex. Here
            are some common queries to guide you.
          </p>
        </motion.div>

        <motion.div
          className={style.faqList}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
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

export default Criminal;
