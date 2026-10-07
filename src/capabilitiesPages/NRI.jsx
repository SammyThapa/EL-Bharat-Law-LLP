import style from "../capabilitiesPages/cap.module.css";
import img from "../assets/NRI.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";

function NRI() {
  const [showAns, setShowAns] = useState(null);

  const Questions = [
    {
      id: 1,
      ques: "Can you handle my legal matters without my presence in India?",
      ans: "Yes, we manage cases remotely through proper authorization such as Power of Attorney.",
      plus: "+",
      minus: "−",
    },
    {
      id: 2,
      ques: "Do you assist with property and inheritance matters?",
      ans: "Absolutely. We handle property disputes, title verification, succession, and inheritance cases.",
      plus: "+",
      minus: "−",
    },
    {
      id: 3,
      ques: "Is my information and documentation secure?",
      ans: "Yes, we maintain strict confidentiality and secure handling of all documents.",
      plus: "+",
      minus: "−",
    },
    {
      id: 4,
      ques: "Will I receive updates on my case?",
      ans: "Yes, we ensure regular communication and updates throughout the process.",
      plus: "+",
      minus: "−",
    },
    {
      id: 5,
      ques: "How do I get started?",
      ans: "You can connect with our team by booking a consultation to discuss your requirements and receive expert legal assistance.",
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
              Reliable. Secure. Cross-Border Expertise.
            </span>

            <h1>⁠⁠NRI Legal Services</h1>

            <p>
              We provide specialized legal services for Non-Resident Indians
              (NRIs), ensuring seamless handling of legal matters in India while
              you are abroad. Managing legal issues across borders requires
              trust, clarity, and experienced legal support to protect your
              interests effectively. At EL Bharat, we assist NRIs with property
              management, documentation, power of attorney, inheritance and
              succession matters, family disputes, and legal representation in
              India. Our team ensures that your matters are handled efficiently,
              securely, and in full compliance with Indian laws—without the need
              for frequent travel
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
            We understand that managing legal matters from abroad can be
            challenging. Here are some common queries to guide you.
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

export default NRI;
