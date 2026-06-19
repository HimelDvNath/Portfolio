import React from "react";

const About = () => {
  return (
    <section className="bg-linear-to-b from-white to-gray-100 py-20 flex justify-center items-center">
      <div className="w-11/12 md:w-2/3 bg-white rounded-2xl shadow-xl p-10 md:p-16 space-y-6 transition-transform hover:scale-[1.02] duration-300">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-8 relative">
          About <span className="text-orange-500">Me</span>
          <span className="block w-20 h-1 bg-orange-400 mx-auto mt-3 rounded-full"></span>
        </h1>

        <div className="text-gray-700 text-lg leading-relaxed space-y-5">
          <p>
            I'm a Computer Science and Engineering graduate from{" "}
            <span className="text-orange-500 font-semibold">
              Gopalganj Science and Technology University (GSTU)
            </span>{" "}
            currently working as a{" "}
            <span className="text-orange-500 font-semibold">
              Software Engineer
            </span>{" "}
            at{" "}
            <span className="font-medium text-gray-900">
              Spectrum Software &amp; Consulting (Pvt.) Ltd
            </span>
            , building enterprise web applications for banking and financial
            services clients.
          </p>

          <p>
            I specialize in the{" "}
            <span className="font-medium text-gray-900">
              full-stack JavaScript/TypeScript ecosystem
            </span>{" "}
            — working with{" "}
            <span className="font-medium text-gray-900">
              React.js, Next.js, Node.js, Express.js, PostgreSQL, and MongoDB
            </span>
            . I have hands-on experience with{" "}
            <span className="font-medium text-gray-900">
              RBAC systems, REST APIs, real-time features with Socket.IO,
            </span>{" "}
            and{" "}
            <span className="font-medium text-gray-900">
              database design with Prisma ORM
            </span>
            .
          </p>

          <p>
            Beyond web development, I'm an active competitive programmer — having
            solved{" "}
            <span className="text-orange-500 font-semibold">750+ algorithmic problems</span>{" "}
            across Codeforces, CodeChef, and AtCoder, with a Codeforces rating of{" "}
            <span className="font-medium text-gray-900">1196</span>. I participated
            in the{" "}
            <span className="font-medium text-gray-900">
              ICPC Asia Dhaka Regional Onsite Contest 2020
            </span>{" "}
            placing{" "}
            <span className="text-orange-500 font-semibold">Rank 101</span>.
          </p>

          <p>
            I'm always eager to take on complex challenges, learn new
            technologies, and contribute to impactful products.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
          {[
            { count: "3+",   label: "Projects Built"    },
            { count: "750+", label: "Problems Solved"   },
            { count: "10+",  label: "Technologies"      },
          ].map(({ count, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-extrabold text-orange-500">{count}</div>
              <div className="text-xs text-gray-500 mt-1 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
