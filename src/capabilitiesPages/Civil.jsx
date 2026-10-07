import style from "../capabilitiesPages/cap.module.css";
import img from "../assets/featuredNews/civil.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";

function Civil() {
  const [showAns, setShowAns] = useState(null);

  const Questions = [
    {
      id: 1,
      ques: "Do you handle property disputes and title issues?",
      ans: "Yes, we assist with ownership disputes, title verification, partition matters, and property-related litigation.",
      plus: "+",
      minus: "−",
    },
    {
      id: 2,
      ques: "Can you help with property documentation and verification?",
      ans: "Absolutely. We provide legal verification, due diligence, and drafting of property-related documents.",
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
          {/* Image */}
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
            <img src={img} alt="Civil and Property Law" />
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
              Protecting Rights. Resolving Disputes.
            </span>

            <h1>Civil & Property Law</h1>

            <p>
              We provide comprehensive legal services in civil and property
              matters, ensuring the protection of your rights, assets, and legal
              interests. From ownership disputes to contractual disagreements,
              civil and property issues require precise legal handling and a
              strategic approach.
            </p>

            <p>
              At EL Bharat, we assist individuals, families, and businesses in
              matters related to property ownership, title verification, land
              disputes, partition, possession, and civil litigation. Our team
              ensures that every case is handled with diligence, clarity, and a
              strong focus on achieving favorable outcomes while minimizing
              legal risks.
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
            We understand that civil and property matters can be complex. Here
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

export default Civil;
