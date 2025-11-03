import React from "react";

const Bootcamp: React.FC = () => {
  return (
    <section
      id="bootcamp"
      className="py-20 px-6 bg-light-background/70 dark:bg-dark-background/70 backdrop-blur-lg transition-all duration-700"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#00A0B4]">
          6-Month Faith & Tech Bootcamp
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Our six-month bootcamp helps you build strong technical skills
          grounded in faith and excellence. Whether you’re a beginner or looking
          to level up, you’ll master full-stack web development, AI tools, and
          real-world collaboration — all within a supportive Christian
          community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "1️⃣ Foundations",
              desc: "Start with HTML, CSS, and JavaScript. Build confidence as you create real, responsive websites.",
            },
            {
              title: "2️⃣ Advanced Projects",
              desc: "Learn React, Node.js, and databases through teamwork, mentorship, and practical assignments.",
            },
            {
              title: "3️⃣ Deployment & Growth",
              desc: "Deploy projects, prepare your portfolio, and get ready for freelancing or your first tech job.",
            },
          ].map((stage, i) => (
            <div
              key={i}
              className="bg-light-surface dark:bg-dark-surface p-8 rounded-2xl shadow-md hover:shadow-xl border border-light-border dark:border-dark-border backdrop-blur-xl transition"
            >
              <h3 className="text-2xl font-semibold mb-3 text-[#00A0B4]">
                {stage.title}
              </h3>
              <p className="text-light-text-secondary dark:text-dark-text-secondary">
                {stage.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">
            💰 <strong>First month fee:</strong> ₦10,000 (or equivalent) <br />
            Includes foundational training, resources, and mentorship.
          </p>

          <a
            href="#contact"
            className="inline-block bg-[#00A0B4] text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-[#208468] transition"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bootcamp;
