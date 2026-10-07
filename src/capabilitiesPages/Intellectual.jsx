import style from "../capabilitiesPages/cap.module.css";
import img from "../assets/intellectual.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";

function Intellectual() {
  const [showAns, setShowAns] = useState(null);

  const Questions = [
    {
      id: 1,
      ques: "What types of intellectual property do you handle?",
      ans: "We assist with trademarks, copyrights, patents, industrial designs, and related legal matters.",
      plus: "+",
      minus: "−",
    },
    {
      id: 2,
      ques: "Can you help with registration of IP rights?",
      ans: "Yes, we provide end-to-end support for registration, documentation, and filing processes.",
      plus: "+",
      minus: "−",
    },
    {
      id: 3,
      ques: "Do you handle IP infringement cases?",
      ans: "Absolutely. We offer legal support for enforcement, infringement disputes, and litigation.",
      plus: "+",
      minus: "−",
    },
    {
      id: 4,
      ques: "Can you help protect my brand name and logo?",
      ans: "Yes, we specialize in trademark registration and brand protection strategies.",
      plus: "+",
      minus: "−",
    },
    {
      id: 5,
      ques: "How do I get started?",
      ans: "You can connect with our team by booking a consultation to discuss your requirements and secure your intellectual property rights.",
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
              Protecting Innovation. Securing Ownership.
            </span>

            <h1>Intellectual Property (IPR) Services</h1>

            <p>
              We provide comprehensive legal services to protect, manage, and
              enforce your intellectual property rights. In today’s competitive
              landscape, safeguarding your ideas, creations, and brand identity
              is essential to maintaining your business advantage and preventing
              unauthorized use. At EL Bharat, we assist with trademarks,
              copyrights, patents, designs, and brand protection strategies.
              From registration and documentation to enforcement and dispute
              resolution, our team ensures that your intellectual assets are
              legally secured and effectively protected.
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
            We understand that intellectual property can be complex. Here are
            some common queries to guide you.
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

export default Intellectual;
