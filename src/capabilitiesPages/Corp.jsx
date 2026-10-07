import style from "../capabilitiesPages/cap.module.css";
import img from "../assets/corp.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";

function Corp() {
  const [showAns, setShowAns] = useState(null);

  const Questions = [
    {
      id: 1,
      ques: "Do you assist with company formation and registration?",
      ans: "Yes, we provide end-to-end support for company incorporation and business setup.",
      plus: "+",
      minus: "−",
    },
    {
      id: 2,
      ques: "Can you help with contracts and agreements?",
      ans: "Absolutely. We draft, review, and negotiate business contracts to protect your interests.",
      plus: "+",
      minus: "−",
    },
    {
      id: 3,
      ques: "Do you handle compliance and regulatory requirements?",
      ans: "Yes, we ensure your business meets all legal, tax, and regulatory obligations.",
      plus: "+",
      minus: "−",
    },
    {
      id: 4,
      ques: "Do you provide legal support for startups?",
      ans: "Yes, we offer tailored legal solutions for startups including structuring, funding, and compliance.",
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
              Strategic. Compliant. Growth-Focused.
            </span>

            <h1>Corporate & Business Law</h1>

            <p>
              We provide comprehensive legal solutions for businesses, startups,
              and enterprises, ensuring full compliance, risk management, and
              sustainable growth. In today’s dynamic business environment,
              strong legal structuring and advisory are essential for long-term
              success.
            </p>

            <p>
              At EL Bharat, we assist with company formation, corporate
              governance, contracts, regulatory compliance, taxation, labour
              laws, mergers, and business structuring. Our team works closely
              with clients to deliver practical, business-oriented legal
              solutions that align with their operational and strategic goals.
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
            We understand that business legal matters require clarity and
            precision. Here are some common queries to guide you.
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

export default Corp;
