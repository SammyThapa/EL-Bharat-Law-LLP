import style from "../components/WhyChooseUs.module.css";
import { LiaAwardSolid } from "react-icons/lia";
import { BsGraphUpArrow } from "react-icons/bs";
import { LuUserRound } from "react-icons/lu";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaHandshakeAngle } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { motion } from "motion/react";

function WhyChooseUs() {
  const cards = [
    {
      id: 1,
      icon: <LiaAwardSolid />,
      title: "10+ Years of Legal Experience",
      description:
        "Proven expertise in handling complex legal matters across multiple practice areas.",
    },
    {
      id: 2,
      icon: <BsGraphUpArrow />,
      title: "Strong Track Record",
      description:
        "Consistent success in advisory, litigation, dispute resolution, and legal compliance.",
    },
    {
      id: 3,
      icon: <LuUserRound />,
      title: "Experienced Legal Professionals",
      description:
        "Skilled advocates and legal experts guiding you at every stage with precision.",
    },
    {
      id: 4,
      icon: <IoShieldCheckmark />,
      title: "Transparent Approach",
      description:
        "Clear communication, ethical practices, and no hidden charges.",
    },
    {
      id: 5,
      icon: <FaHandshakeAngle />,
      title: "Client-Centric Solutions",
      description:
        "Tailored legal strategies designed around your specific needs and objectives.",
    },
    {
      id: 6,
      icon: <CiGlobe />,
      title: "End-to-End Legal Support",
      description:
        "From consultation and documentation to representation and resolution—we handle everything.",
    },
  ];

  return (
    <section className={style.whyChooseSec}>
      <motion.div
        className={style.content}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <span className={style.sectionLabel}>why choose el bharat</span>

        <h2>Your Trusted Legal Partner</h2>

        <p className="text-(--color-primary)">
          We deliver reliable, strategic, and result-driven legal solutions with
          complete transparency and professional excellence.
        </p>
      </motion.div>

      <motion.div
        className={style.grid}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: "easeOut",
        }}
      >
        {cards.map((card) => (
          <div className={style.card} key={card.id}>
            <span>{card.icon}</span>

            <h2>{card.title}</h2>

            <p>{card.description}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default WhyChooseUs;
