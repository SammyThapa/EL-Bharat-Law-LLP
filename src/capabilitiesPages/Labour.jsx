import style from "../capabilitiesPages/cap.module.css";
import img from "../assets/labour.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";

function Labour() {
  const [showAns, setShowAns] = useState(null);

  const Questions = [
    {
      id: 1,
      ques: "Do you assist employers with labour law compliance?",
      ans: "Yes, we help businesses comply with labour laws, draft policies, and manage legal requirements.",
      plus: "+",
      minus: "−",
    },
    {
      id: 2,
      ques: "Can you handle employee disputes and termination issues?",
      ans: "Absolutely. We provide legal support for disputes, wrongful termination, and disciplinary matters.",
      plus: "+",
      minus: "−",
    },
    {
      id: 3,
      ques: "Do you draft employment contracts and policies?",
      ans: "Yes, we draft and review employment agreements, HR policies, and workplace regulations.",
      plus: "+",
      minus: "−",
    },
    {
      id: 4,
      ques: "Can disputes be resolved without litigation?",
      ans: "In many cases, we aim for mediation and negotiation to achieve efficient and amicable resolutions.",
      plus: "+",
      minus: "−",
    },
    {
      id: 5,
      ques: "How do I get started?",
      ans: "You can connect with our team by booking a consultation to discuss your business needs and receive expert legal guidance.You can connect with our team by booking a consultation to discuss your employment-related concerns and receive expert legal guidance.",
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
              Balanced. Compliant. Workplace-Focused.
            </span>

            <h1>Labour & Employment Law</h1>

            <p>
              We provide comprehensive legal solutions in labour and employment
              matters, ensuring compliance with applicable laws while protecting
              the rights and interests of both employers and employees. In
              today’s evolving workplace environment, clear policies and legally
              sound practices are essential to avoid disputes and maintain
              organizational stability. At EL Bharat, we assist with employment
              contracts, workplace policies, labour law compliance, employee
              disputes, wrongful termination, disciplinary actions, and
              regulatory matters. Our team works closely with businesses and
              individuals to ensure fair practices, legal compliance, and
              effective dispute resolution.
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
            We understand that employment matters can be sensitive and complex.
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

export default Labour;
