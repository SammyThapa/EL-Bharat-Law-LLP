import { useParams } from "react-router-dom";
import style from "../pages/CapabilitiesDetails.module.css";
import { motion } from "motion/react";

import legalDocumentation from "../data/capabilitiesdetailpage/legalDocumentation";
import criminalLaw from "../data/capabilitiesdetailpage/criminalLaw";
import corporateBusiness from "../data/capabilitiesdetailpage/corporateBusiness";
import internationalRealEstate from "../data/capabilitiesdetailpage/internationalRealEstate";
import skilledProfessionalImmigration from "../data/capabilitiesdetailpage/skilledProfessionalImmigration";
import startUpVisaPrograms from "../data/capabilitiesdetailpage/startUpVisaPrograms";

function CapabilitiesDetails() {
  const { slug } = useParams();

  const capabilities = {
    "legal-documentation-drafting": legalDocumentation,
    "criminal-law-services": criminalLaw,
    "corporate-business-law": corporateBusiness,
    "international-real-estate": internationalRealEstate,
    "skilled-professional-immigration": skilledProfessionalImmigration,
    "start-up-visa-program": startUpVisaPrograms,
  };

  const capability = capabilities[slug];

  if (!capability) {
    return (
      <section className={style.notFound}>
        <h1>Practice Area Not Found</h1>
        <p>The requested legal service could not be found.</p>
      </section>
    );
  }

  return (
    <section className={style.capabilitiesDetailsSec}>
      {/* Hero */}
      <motion.div
        className={style.hero}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className={style.heroContent}>
          <span className={style.eyebrow}>Our Practice Areas</span>

          <h1>{capability.title}</h1>

          <p>{capability.intro}</p>

          <div className={style.heroLine}></div>
        </div>
      </motion.div>

      {/* Introduction */}
      <motion.div
        className={style.intro}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className={style.introLabel}>
          <span>01</span>
          <p>Legal Expertise</p>
        </div>

        <div className={style.introText}>
          <h2>Strategic Legal Guidance for Your Needs</h2>

          <p>{capability.description}</p>
        </div>
      </motion.div>

      {/* Services */}
      <div className={style.servicesSection}>
        <motion.div
          className={style.sectionHeader}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div>
            <span className={style.sectionNumber}>02</span>
            <span className={style.sectionLabel}>What We Offer</span>
          </div>

          <h2>{capability.servicesHeading || "Our Legal Services"}</h2>
        </motion.div>

        <motion.div
          className={style.services}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {capability.services.map((service, index) => (
            <div className={style.service} key={index}>
              <span className={style.serviceNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <p>{service}</p>

              <span className={style.serviceArrow}>↗</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Areas */}
      <div className={style.mattersSection}>
        <div className={style.mattersContainer}>
          <motion.div
            className={style.mattersHeader}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <span className={style.sectionNumber}>03</span>
              <span className={style.sectionLabel}>Areas of Assistance</span>
            </div>

            <h2>{capability.mattersHeading || "Areas We Assist With"}</h2>

            <p>
              We provide practical legal support tailored to the specific
              requirements of individuals, businesses and organisations.
            </p>
          </motion.div>

          <motion.div
            className={style.matters}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {capability.matters.map((matter, index) => (
              <div className={style.matter} key={index}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{matter}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA */}
      <motion.div
        className={style.cta}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className={style.ctaContent}>
          <span>Need Legal Assistance?</span>

          <h2>Let’s discuss your legal requirements.</h2>

          <p>
            Get professional legal guidance tailored to your situation, business
            or legal matter.
          </p>

          <a href="/contact" className={style.ctaButton}>
            Book a Consultation
            <span>↗</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default CapabilitiesDetails;
