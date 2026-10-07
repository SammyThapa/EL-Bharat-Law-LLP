import style from "../capabilitiesPages/cap.module.css";
import img from "../assets/legal.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";

function Legal() {
  const [showAns, setShowAns] = useState(null);

  const Questions = [
    {
      id: 1,
      ques: "What areas do you provide legal consultation in?",
      ans: "We offer advisory across civil, criminal, corporate, family, taxation, and international legal matters.",
      plus: "+",
      minus: "−",
    },
    {
      id: 2,
      ques: "Is the consultation personalized to my case?",
      ans: "Yes, every consultation is tailored to your specific situation, ensuring relevant and practical guidance.",
      plus: "+",
      minus: "−",
    },
    {
      id: 3,
      ques: "Can I consult before taking legal action?",
      ans: "Absolutely. We encourage early consultation to help you understand your position and avoid potential legal complications.",
      plus: "+",
      minus: "−",
    },
    {
      id: 4,
      ques: "Will my consultation remain confidential?",
      ans: "Yes, all consultations are handled with strict confidentiality and professional discretion.",
      plus: "+",
      minus: "−",
    },
    {
      id: 5,
      ques: "How do I get started?",
      ans: "You can connect with our team by booking a consultation to discuss your legal concerns and receive expert guidance.",
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
              Insightful. Strategic. Result-Oriented.
            </span>

            <h1>Legal Advisory & Consultation</h1>

            <p>
              We provide comprehensive legal advisory and consultation services
              designed to help individuals and businesses make informed,
              confident decisions. In today’s evolving legal landscape, timely
              and accurate legal advice is essential to mitigate risks, ensure
              compliance, and protect your interests. At EL Bharat, we
              understand that every legal situation is unique and requires a
              tailored approach. Whether you are facing a complex legal issue,
              planning a business decision, or seeking clarity on your rights
              and obligations, our experts deliver practical, solution-oriented
              guidance with complete transparency and professionalism.
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
            We understand that seeking legal advice often comes with important
            questions. Here are some common queries to guide you.
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

export default Legal;
