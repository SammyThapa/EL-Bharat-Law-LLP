import style from "../pages/Contact.module.css";
import { motion } from "motion/react";

function Contact() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[6-9]\d{9}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const firstName = String(formData.get("firstName") || "").trim();
    const lastName = String(formData.get("lastName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!firstName) {
      alert("Please enter your first name.");
      return;
    }

    if (!lastName) {
      alert("Please enter your last name.");
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email.");
      return;
    }

    if (!phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!message) {
      alert("Please enter your message.");
      return;
    }

    if (message.length < 10) {
      alert("Message must contain at least 10 characters.");
      return;
    }

    const whatsappMessage = `
Client Details

First Name: ${firstName}
Last Name: ${lastName}

Email: ${email}
Phone: ${phone}

Message:
${message}
`;

    const whatsappNum = "917982350083";

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className={style.mainCon}>
      <div className={style.content}>
        {/* LEFT SIDE */}
        <motion.div
          className={style.info}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className={style.label}>GET IN TOUCH</span>

          <h1>
            Let's discuss your
            <span> legal matter.</span>
          </h1>

          <p>
            Whether you need legal advice, representation, or assistance with a
            specific matter, our team is here to help.
          </p>

          <div className={style.contactDetails}>
            <div>
              <h3>Email</h3>
              <p>info@elbharatlawllp.com</p>
            </div>

            <div>
              <h3>Phone</h3>
              <p>+91 7982350083</p>
            </div>

            <div>
              <h3>Office</h3>
              <p>Delhi, Dehradun</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className={style.formContainer}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className={style.formHeading}>
            <h2>Send an Enquiry</h2>
            <p>Fill in the details below and our team will get back to you.</p>
          </div>

          <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.row}>
              <div className={style.field}>
                <label htmlFor="firstName">First Name</label>

                <input
                  id="firstName"
                  type="text"
                  placeholder="Your first name"
                  name="firstName"
                />
              </div>

              <div className={style.field}>
                <label htmlFor="lastName">Last Name</label>

                <input
                  id="lastName"
                  type="text"
                  placeholder="Your last name"
                  name="lastName"
                />
              </div>
            </div>

            <div className={style.row}>
              <div className={style.field}>
                <label htmlFor="email">Email Address</label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  name="email"
                />
              </div>

              <div className={style.field}>
                <label htmlFor="phone">Phone Number</label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="0987654321"
                  name="phone"
                />
              </div>
            </div>

            <div className={style.field}>
              <label htmlFor="message">Tell Us About Your Matter</label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Briefly describe how we can assist you..."
              ></textarea>
            </div>

            <button type="submit">
              Submit Enquiry
              <span>→</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
