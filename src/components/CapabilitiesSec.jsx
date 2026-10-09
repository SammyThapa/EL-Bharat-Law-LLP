import { useRef } from "react";
import { Link } from "react-router-dom";
import style from "../components/CapabilitiesSec.module.css";
import { motion } from "motion/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function CapabilitiesSec() {
  const swiperRef = useRef(null);

  const cards = [
    {
      id: 1,
      title: "Legal Documentation & Drafting",
      slug: "legal-documentation-drafting",
      description:
        "Expert drafting, review, and legal consultation services to ensure clarity, compliance, and strong legal protection.",
      readMore: "Read More",
    },

    {
      id: 2,
      title: "Criminal Law Services",
      slug: "criminal-law-services",
      description:
        "Comprehensive legal representation in civil disputes, criminal matters, property issues, and family law cases with a client-focused.",
      readMore: "Read More",
    },

    {
      id: 3,
      title: "Corporate & Business Law",
      slug: "corporate-business-law",
      description:
        "Strategic legal solutions for businesses including corporate compliance, taxation, labour law, and business structuring.",
      readMore: "Read More",
    },

    {
      id: 4,
      title: "International Real Estate",
      slug: "international-real-estate",
      description:
        "Access global real estate opportunities with strategic advice",
      readMore: "Read More",
    },

    {
      id: 5,
      title: "Skilled and Professional Immigration",
      slug: "skilled-professional-immigration",
      description: "Explore global career opportunities with expert support",
      readMore: "Read More",
    },

    {
      id: 6,
      title: "Start-Up Visa Program",
      slug: "start-up-visa-program",
      description: "Launch your global venture with start-up visa support",
      readMore: "Read More",
    },
  ];    

  return (
    <motion.section
      className={style.capablitiesSection}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      }}
    >
      <div className={style.content}>
        <span className={style.sectionLabel}>Capabilities</span>

        <h2>Legal Expertise That Moves You Forward</h2>

        <p>
          We provide practical legal guidance across a range of practice areas,
          helping individuals and businesses navigate complex challenges with
          confidence and clarity.
        </p>
      </div>

      <div className={style.sliderWrapper}>
        <button
          className={style.prevButton}
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous capability"
        >
          ‹
        </button>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
          className={style.slider}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <article className={style.card}>
                <h2>{card.title}</h2>

                <p>{card.description}</p>

                <Link
                  to={`/capabilities/${card.slug}`}
                  className={style.readMore}
                >
                  {card.readMore}
                </Link>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className={style.nextButton}
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next capability"
        >
          ›
        </button>
      </div>
    </motion.section>
  );
}

export default CapabilitiesSec;
