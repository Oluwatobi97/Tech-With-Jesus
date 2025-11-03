import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen text-center bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: "url('/src/assets/bg-dark.png')" }}
    >
      {/* Glass Overlay */}
      <div className="absolute  inset-0 bg-light-background/30 dark:bg-dark-background/60 backdrop-blur-md"></div>

      <div className="relative mt-10 z-10 max-w-5xl px-6 py-12 text-light-text-primary dark:text-dark-text-primary">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-[#00A0B4] drop-shadow-lg">
          Tech With Jesus
        </h1>

        <p className="text-lg sm:text-xl text-gray-500 mb-8 leading-relaxed">
          Empowering minds through faith and technology. <br />
          We believe innovation is a calling — to create digital solutions that
          inspire, educate, and transform lives with purpose.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {[
            {
              title: "Tech Bootcamps",
              desc: "Gain hands-on experience in modern web development, AI, and data science in a spirit-led environment.",
            },
            {
              title: "Community Projects",
              desc: "We create impactful solutions that uplift communities and reflect the light of purpose-driven innovation.",
            },
            {
              title: "Mentorship",
              desc: "Learn from tech leaders who combine professional excellence with strong moral and spiritual values.",
            },
            {
              title: "Innovation Hub",
              desc: "Collaborate, design, and launch meaningful projects with other believers in tech worldwide.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-light-surface/50 dark:bg-dark-surface text-light-text-primary dark:text-dark-text-primary p-6 rounded-2xl shadow-glass backdrop-blur-lg border border-light-border dark:border-dark-border hover:bg-light-surface/80 dark:hover:bg-dark-surface/80 transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-[#00A0B4]">
                {item.title}
              </h3>
              <p className="text-light-text-secondary dark:text-dark-text-secondary">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <button className="mt-12 px-8 py-3 bg-accent text-white font-semibold rounded-xl shadow-lg hover:bg-accent-hover transition-all">
          Join the Movement
        </button>
      </div>
    </section>
  );
};

export default Hero;
