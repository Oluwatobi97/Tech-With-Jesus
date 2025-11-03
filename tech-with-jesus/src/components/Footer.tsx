import React, { useState } from "react";

const Footer: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Future: integrate with backend/email service (e.g. Nodemailer, Formspree)
    alert(
      `Thank you, ${name}! 🙏 We’ve received your message and will be in touch soon.`
    );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <footer
      id="contact"
      className="py-13 px-6 bg-light-background/70 dark:bg-dark-background/80 backdrop-blur-lg transition-all duration-700 border-t border-light-border dark:border-dark-border"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#00A0B4] mb-4">
          Contact Us / Join the Mission
        </h2>
        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-10">
          Whether you'd like to join our bootcamp, partner with us, or simply
          say hello — we'd love to hear from you.
          <br /> Let’s build something meaningful together.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-light-surface dark:bg-dark-surface backdrop-blur-xl shadow-lg p-8 rounded-2xl border border-light-border dark:border-dark-border space-y-6 transition"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl border border-light-border dark:border-dark-border bg-light-background/50 dark:bg-dark-background/50 text-light-text-primary dark:text-dark-text-primary placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent transition"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl border border-light-border dark:border-dark-border bg-light-background/50 dark:bg-dark-background/50 text-light-text-primary dark:text-dark-text-primary placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <textarea
            placeholder="Your Message / How you want to connect"
            className="w-full p-4 rounded-xl border border-light-border dark:border-dark-border bg-light-background/50 dark:bg-dark-background/50 text-light-text-primary dark:text-dark-text-primary placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent transition"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full sm:w-auto px-10 py-3 bg-accent text-white font-semibold rounded-xl shadow-md hover:bg-accent-hover transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 mb-5 text-light-text-secondary dark:text-dark-text-secondary">
          <p>📍 Lagos, Nigeria</p>
          <p>📧 techwithjesus@gmail.com</p>
          <p className="mt-4">
            🌐 Follow us on social media — let’s grow this mission together.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
