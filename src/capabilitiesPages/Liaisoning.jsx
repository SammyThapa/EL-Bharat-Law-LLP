import style from "../capabilitiesPages/Liaisoning.module.css";
import { motion } from "motion/react";

function Liaisoning() {
  const services = [
    {
      id: 1,
      title: "Trade License",
      description:
        "Legal permission from the local authority to operate a commercial establishment.",
    },
    {
      id: 2,
      title: "Fire License / Fire NOC",
      description:
        "Certification confirming compliance with fire safety norms and regulations.",
    },
    {
      id: 3,
      title: "Labour License",
      description:
        "Registration to employ contract labour under applicable labour welfare laws.",
    },
    {
      id: 4,
      title: "Fire Safety Certificate",
      description:
        "Compliance document verifying fire prevention and safety measures in premises.",
    },
    {
      id: 5,
      title: "Ground Water Extraction",
      description:
        "Approval to legally extract groundwater for commercial or industrial use.",
    },
    {
      id: 6,
      title: "Shops & Establishment License",
      description:
        "Mandatory registration governing working hours, wages, and employment conditions.",
    },
    {
      id: 7,
      title: "Pollution License (CTE / CTO)",
      description:
        "Environmental clearance to establish and operate industrial or commercial units.",
    },
    {
      id: 8,
      title: "Factory License",
      description:
        "Mandatory approval to legally operate a manufacturing unit under applicable laws.",
    },
    {
      id: 9,
      title: "Gumashta License",
      description:
        "State-level business registration under the Shops and Establishment Act.",
    },
    {
      id: 10,
      title: "ISO Certification Assistance",
      description:
        "Assistance with international quality certification and standardized business processes.",
    },
    {
      id: 11,
      title: "Food License (FSSAI)",
      description:
        "Authorization to manufacture, store, distribute, or sell food products in India.",
    },
    {
      id: 12,
      title: "Liquor / Bar License",
      description:
        "Permits required to serve, sell, or distribute alcoholic beverages legally.",
    },
    {
      id: 13,
      title: "Import Export Code (IEC)",
      description:
        "Mandatory identification number for importing or exporting goods.",
    },
    {
      id: 14,
      title: "Weights & Measures",
      description:
        "Certification ensuring accuracy of weighing and measuring instruments used in trade.",
    },
    {
      id: 15,
      title: "Arms License",
      description:
        "Government authorization for possession or carrying firearms under applicable regulations.",
    },
    {
      id: 16,
      title: "Drug License (Retail / Wholesale)",
      description:
        "Required approval to sell, distribute, or stock pharmaceutical products.",
    },
    {
      id: 17,
      title: "Restaurant License",
      description:
        "Approvals required to operate a food service establishment for public consumption.",
    },
    {
      id: 18,
      title: "Health Trade License",
      description:
        "Permission ensuring public health and hygiene standards in trade activities.",
    },
    {
      id: 19,
      title: "Music License (PPL / IPRS)",
      description:
        "Licensing for playing copyrighted music in commercial premises.",
    },
    {
      id: 20,
      title: "CPWD Registration",
      description:
        "Registration with the Central Public Works Department to execute eligible government construction works.",
    },
  ];

  return (
    <section className={style.liaisoningSection}>
      <motion.div
        className={style.sectionHeader}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2>Liaisoning Services</h2>
        <p>
          Professional assistance with licenses, registrations, approvals, and
          regulatory procedures for businesses and individuals.
        </p>
      </motion.div>

      <motion.div
        className={style.servicesGrid}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {services.map((service) => (
          <article className={style.serviceCard} key={service.id}>
            <div className={style.cardNumber}>
              {String(service.id).padStart(2, "0")}
            </div>

            <div className={style.cardContent}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </article>
        ))}
      </motion.div>
    </section>
  );
}

export default Liaisoning;
