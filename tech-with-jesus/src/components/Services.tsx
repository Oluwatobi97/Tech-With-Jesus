import React from "react";
import { Code, Users, GraduationCap } from "lucide-react";

const services = [
  {
    icon: <GraduationCap size={40} className="text-accent" />,
    title: "Tech Bootcamp",
    description:
      "Join our intensive bootcamps to learn modern web technologies and gain hands-on experience with real-world projects.",
  },
  {
    icon: <Code size={40} className="text-accent" />,
    title: "Web Development",
    description:
      "We build scalable and elegant web applications tailored to your business needs using the latest technologies.",
  },
  {
    icon: <Users size={40} className="text-accent" />,
    title: "Community & Mentorship",
    description:
      "Be part of a growing community of learners and developers guided by faith and technology.",
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-light-background dark:bg-dark-background py-24 px-6 border-t border-light-border dark:border-dark-border"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-4 text-accent">
          Our Services
        </h2>
        <p className="text-textSecondary mb-12">
          Explore what we do at Teach With Jesus — empowering you through
          technology and purpose.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-2xl p-8 shadow-glass backdrop-blur-md hover:bg-light-surface/80 dark:hover:bg-dark-surface/80 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-accent">
                {service.title}
              </h3>
              <p className="text-light-text-secondary dark:text-dark-text-secondary">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
