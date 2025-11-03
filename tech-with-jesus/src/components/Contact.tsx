import React, { useState } from "react";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Future: integrate with backend/email service (e.g. Nodemailer, Formspree)
    alert(`Thank you, ${name}! 🙏 We’ve received your message.`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gray-100/70 dark:bg-gray-900/60 backdrop-blur-lg transition-all duration-700"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#00A0B4] mb-4">
          Contact Us / Join the Mission
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
          Whether you’d like to join our bootcamp, partner with us, or simply
          say hello — we’d love to hear from you.
          <br /> Let’s build something meaningful together.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-xl shadow-lg p-8 rounded-2xl border border-gray-200/20 dark:border-gray-700/20 space-y-6 transition"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A0B4] transition"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A0B4] transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <textarea
            placeholder="Your Message / How you want to connect"
            className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A0B4] transition"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full sm:w-auto px-10 py-3 bg-[#00A0B4] text-white font-semibold rounded-xl shadow-md hover:bg-[#208468] transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-gray-600 dark:text-gray-400">
          <p>📍 Lagos, Nigeria</p>
          <p>📧 techwithjesus@gmail.com</p>
          <p className="mt-2">
            🌐 Follow us on social media — let’s grow this mission together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
