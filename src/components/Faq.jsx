import { useState } from "react";
import style from "../components/Faq.module.css";
import { motion } from "motion/react";

function Faq() {
  const [showAns, setShowAns] = useState(null);

  const Questions = [
    {
      id: 1,
      ques: "What services does EL Bharat offer ?",
      ans: "We provide a comprehensive range of legal services including legal advisory, documentation & drafting, civil and criminal litigation, corporate & business law, taxation, family law, intellectual property rights, and international legal services.",
      plus: "+",
      minus: "−",
    },
    {
      id: 2,
      ques: "Do you provide legal consultation?",
      ans: "Yes, we offer expert legal consultation tailored to your specific situation, helping you understand your rights, obligations, and the best course of action.",
      plus: "+",
      minus: "−",
    },
    {
      id: 3,
      ques: "Can EL Bharat handle court cases and disputes ?",
      ans: "Absolutely. Our legal team represents clients in civil, criminal, family, and corporate disputes, along with pre-litigation and alternative dispute resolution.",
      plus: "+",
      minus: "−",
    },
    {
      id: 4,
      ques: "Do you assist with corporate and business legal matters?",
      ans: "Yes, we support businesses with company formation, compliance, contracts, taxation, labour law, and overall legal structuring.",
      plus: "+",
      minus: "−",
    },
    {
      id: 5,
      ques: "Do you offer services for international and NRI clients ?",
      ans: "Yes, we specialize in NRI legal matters, cross-border disputes, international legal advisory, and global compliance services.",
      plus: "+",
      minus: "−",
    },
    {
      id: 6,
      ques: "How can your legal services help me achieve my goals ?",
      ans: "We provide tailored legal strategies designed to protect your interests, minimize risks, and deliver effective results across personal, business, and international matters.",
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
          Find clear answers to common queries about legal services, advisory,
          litigation, and cross-border legal matters at EL Bharat.
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
  );
}

export default Faq;
