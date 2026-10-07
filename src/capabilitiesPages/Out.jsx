import style from "../capabilitiesPages/cap.module.css";
import img from "../assets/out.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";

function Out() {
  const [showAns, setShowAns] = useState(null);

  const Questions = [
    {
      id: 1,
      ques: "What is Legal Process Outsourcing (LPO)?",
      ans: "LPO involves outsourcing legal tasks such as documentation, research, and compliance to specialized legal professionals.",
      plus: "+",
      minus: "−",
    },
    {
      id: 2,
      ques: "Do you work with international clients and law firms?",
      ans: "Yes, we collaborate with global clients, businesses, and law firms across multiple jurisdictions.",
      plus: "+",
      minus: "−",
    },
    {
      id: 3,
      ques: "How do you ensure confidentiality and data security?",
      ans: "We follow strict confidentiality protocols and secure systems to protect all client information.",
      plus: "+",
      minus: "−",
    },
    {
      id: 4,
      ques: "Can you handle cross-border legal compliance and documentation?",
      ans: "Absolutely. We provide comprehensive support for international legal requirements and documentation.",
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
              Global Reach. Legal Precision. Scalable Support.
            </span>

            <h1>International Legal Services & Legal Process Outsourcing</h1>

            <p>
              We provide comprehensive international legal services and legal
              process outsourcing (LPO) solutions to businesses, law firms, and
              global clients. In an increasingly interconnected world, managing
              cross-border legal requirements demands expertise, efficiency, and
              a deep understanding of multiple jurisdictions. At EL Bharat, we
              assist with cross-border legal advisory, international compliance,
              contract management, legal research, documentation, due diligence,
              and outsourced legal support. Our services are designed to help
              clients reduce operational costs while maintaining high standards
              of accuracy, confidentiality, and legal excellence.
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
            We understand that international legal services require clarity and
            trust. Here are some common queries to guide you.
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

export default Out;
