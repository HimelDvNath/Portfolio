import React from "react";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-20 flex justify-center items-center">
      <div className="w-11/12 md:w-2/3 bg-white rounded-2xl shadow-xl p-10 md:p-16 space-y-6 transition-transform hover:scale-[1.02] duration-300">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-8 relative">
          About <span className="text-orange-500">Me</span>
          <span className="block w-20 h-1 bg-orange-400 mx-auto mt-3 rounded-full"></span>
        </h1>

        <div className="text-gray-700 text-lg leading-relaxed space-y-5">
          <p>
            I’m a Computer Science and Engineering (CSE) graduate from{" "}
            <span className="text-orange-500 font-semibold">
              Gopalganj Science and Technology University (GSTU)
            </span>{" "}
            with a strong passion for web development.
          </p>

          <p>
            Throughout my academic journey, I built a solid foundation in
            programming and problem-solving using{" "}
            <span className="font-medium text-gray-900">
              C, C++, Python, and Java
            </span>
            , and gained hands-on experience in{" "}
            <span className="font-medium text-gray-900">
              Object-Oriented Programming (OOP)
            </span>{" "}
            and{" "}
            <span className="font-medium text-gray-900">Data Analysis</span>.
          </p>

          <p>
            Currently, I’m focused on building my career as a{" "}
            <span className="text-orange-500 font-semibold">
              Full Stack Developer
            </span>
            , specializing in the{" "}
            <span className="font-medium text-gray-900">
              MERN stack (MongoDB, Express.js, React, Node.js)
            </span>
            . I enjoy turning ideas into{" "}
            <span className="font-medium text-gray-900">
              interactive, user-friendly, responsive, and efficient
            </span>{" "}
            web applications.
          </p>

          <p>
            I’m always eager to learn new technologies, collaborate with others,
            and grow as a developer while contributing to impactful projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
