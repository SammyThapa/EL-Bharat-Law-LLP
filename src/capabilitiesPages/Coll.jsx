import style from "../capabilitiesPages/cap.module.css";
import img from "../assets/coll.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function Coll() {
  const [showAns, setShowAns] = useState(null);

  const Questions = [
    {
      id: 1,
      ques: "What is covered under collective bargaining agreements?",
      ans: "CBAs typically include wages, working hours, benefits, dispute resolution mechanisms, and workplace policies.",
      plus: "+",
      minus: "−",
    },
    {
      id: 2,
      ques: "Who represents employees in negotiations?",
      ans: "Employees are usually represented by trade unions or authorized representatives.",
      plus: "+",
      minus: "−",
    },
    {
      id: 3,
      ques: "Do you represent clients in civil court cases?",
      ans: "Yes, our team provides complete representation in civil litigation and dispute resolution.",
      plus: "+",
      minus: "−",
    },
    {
      id: 4,
      ques: "Can disputes be resolved without going to court?",
      ans: "In many cases, we explore negotiation and mediation to achieve faster and cost-effective resolutions.",
      plus: "+",
      minus: "−",
    },
    {
      id: 5,
      ques: "How do I get started?",
      ans: "You can connect with our team by booking a consultation to discuss your matter and receive expert legal assistance.",
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
              Strengthening Workplace Agreements
            </span>

            <h1>Collective Bargaining & Labor Negotiation Services</h1>

            <p>
              Collective bargaining plays a critical role in shaping fair and
              legally compliant relationships between employers and employees.
              It involves structured negotiation between management and employee
              representatives to establish terms related to wages, working
              conditions, benefits, and workplace policies. At El Bharat Law
              Firm, we provide strategic legal support in collective bargaining
              processes—ensuring that all agreements are aligned with labor
              laws, organizational objectives, and industry standards. Our
              approach focuses on minimizing disputes, protecting client
              interests, and building sustainable workplace frameworks.
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
            Collective bargaining requires a balance between legal compliance
            and practical negotiation. Here are key aspects:
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

export default Coll;
