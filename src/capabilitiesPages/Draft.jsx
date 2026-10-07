import style from "../capabilitiesPages/cap.module.css";
import img from "../assets/draft.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function Draft() {
  const [showAns, setShowAns] = useState(null);

  const Questions = [
    {
      id: 1,
      ques: "Are your legal documents legally enforceable?",
      ans: "Yes, all documents are drafted in compliance with applicable laws and are structured to be legally valid and enforceable.",
      plus: "+",
      minus: "−",
    },
    {
      id: 2,
      ques: "Can you customize documents based on my requirements?",
      ans: "Absolutely. Every document is tailored to your specific needs, objectives, and legal situation.",
      plus: "+",
      minus: "−",
    },
    {
      id: 3,
      ques: "Do you review and revise existing legal documents?",
      ans: "Yes, we offer detailed review and redrafting services to improve clarity, compliance, and legal strength.",
      plus: "+",
      minus: "−",
    },
    {
      id: 4,
      ques: "Will my information remain confidential?",
      ans: "Yes, we maintain strict confidentiality and ensure that all your information is secure and protected.",
      plus: "+",
      minus: "−",
    },
    {
      id: 5,
      ques: "How do I get started?",
      ans: "You can connect with our team by booking a consultation to discuss your requirements and receive expert drafting support.",
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
              Precise. Compliant. Legally Sound.
            </span>

            <h1>Legal Documentation & Drafting</h1>

            <p>
              We provide comprehensive legal documentation and drafting services
              tailored to your specific requirements, ensuring accuracy,
              compliance, and strong legal protection. In today’s complex legal
              environment, well-structured documents are essential to safeguard
              your rights, minimize risks, and prevent future disputes. At EL
              Bharat, we understand that every legal document carries
              significant legal, financial, and operational implications.
              Whether it is contracts, agreements, notices, affidavits, or
              corporate documents, our team ensures that every draft is clear,
              enforceable, and aligned with current legal standards. We focus on
              precision, clarity, and strategic structuring to protect your
              interests at every stage.
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
            We understand that legal documentation can raise important
            questions. Here are some common queries to guide you through our
            process.
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

export default Draft;
