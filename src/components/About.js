import React from "react";

export default function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Ankush.
                <br className="hidden lg:inline-block" />I love to build amazing
                apps.
              </h1>
              <p className="mb-8 leading-relaxed">
              Currently working as a Lead Consultant in a MNC i am exploring new technologies, developing new solutions for various real time problems.
As life adopting its digital version i am looking forward to invest my skills and grow further in industry.
I am a CSE graduate with expertise in data structure, algorithm analysis, web & mobile app development.
So far i have worked on mobile app, web app, IoT solutions in domain like Airlines, FinTech, Telecom and IOT.
Also i have a big interest in machine learning, IoT, Data science, Automation.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://www.linkedin.com/in/ankush-kankarwal-7689a762/overlay/1635538197000/single-media-viewer/?type=DOCUMENT&profileId=ACoAAA1RKYABbjr_UwlYxpRnOkrMJWs6J3xJgRE" target="_blank"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Download Resume
                </a>
                <a
                  href='https://in.linkedin.com/in/ankush-kankarwal-7689a762' target="_blank"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  LinkedIn
                </a>
                <a
                  href='https://github.com/littlebugemp' target="_blank"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  Github
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./coding.svg"
              />
            </div>
          </div>
        </section>
      );
}