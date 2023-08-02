import React from "react";

const Company = () => {
  return (
    <div>
      <div className="w-full text-white py-[10rem] px-4">
        <div className="max-w-[800px] mt-[96px] w-full my-10 top-10 mx-auto text-center flex flex-col ">
          <h1 className="font-bold md:text-7xl sm:text-6xl text-4xl">
            Know More About <span className="text-[#00df9a]">REACT.</span>
          </h1>
          <p className="md:text-2xl text-xl font-bold text-gray-5000 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            odit?
          </p>
        </div>
      </div>

      <div className="w-full bg-white py-[5rem] md:py-[10rem] px-4">
        <div className="max-w-[1240px] mx-auto text-center">
          <h1 className="font-bold text-4xl md:text-5xl py-4">
            Secure and Streamlined Data Management Solutions
          </h1>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl py-4">
            At <span className="font-bold text-[#00df9a]">REACT.</span>, we take
            pride in providing cutting-edge data management solutions that
            empower businesses to harness the true potential of their data. Our
            commitment to excellence, security, and efficiency makes us a
            trusted partner for companies of all sizes, ensuring they stay ahead
            in the ever-evolving data landscape.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-2xl hover:scale-105 duration-200 p-4">
              <p className="text-[#00df9a]">01</p>
              <h1 className="font-bold py-4">Data Security Assurance</h1>
              <p className="text-gray-500 text-sm md:text-base">
                Your data is the backbone of your business, and safeguarding it
                is our top priority. With our state-of-the-art encryption and
                multi-layer security protocols, you can rest assured that your
                data is in safe hands. We adhere to the industry's best
                practices, continuously monitoring and updating security
                measures to stay ahead of potential threats.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl hover:scale-105 duration-200 p-4">
              <p className="text-[#00df9a]">02</p>
              <h1 className="font-bold py-4">Customized Solutions</h1>
              <p className="text-gray-500 text-sm md:text-base">
                We understand that every business is unique and has distinct
                data management needs. Our team of experts works closely with
                you to understand your requirements, designing tailor-made
                solutions that align perfectly with your goals. Whether it's
                cloud storage, data migration, or database optimization, we've
                got you covered.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl hover:scale-105 duration-200 p-4">
              <p className="text-[#00df9a]">03</p>
              <h1 className="font-bold py-4">Seamless Data Integration</h1>
              <p className="text-gray-500 text-sm md:text-base">
                Managing data from various sources can be overwhelming. Our
                seamless data integration services streamline the process,
                allowing you to consolidate and centralize your data
                effortlessly. Our advanced tools ensure data accuracy and
                consistency, eliminating redundancies and errors.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl hover:scale-105 duration-200 p-4">
              <p className="text-[#00df9a]">02</p>
              <h1 className="font-bold py-4">24/7 Support and Monitoring</h1>
              <p className="text-gray-500 text-sm md:text-base">
                Your business operates around the clock, and so does our support
                team. We offer 24/7 monitoring and assistance, ensuring that any
                potential issues are detected and resolved promptly. Our
                proactive approach minimizes downtime and ensures continuous
                data availability.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl hover:scale-105 duration-200 p-4">
              <p className="text-[#00df9a]">02</p>
              <h1 className="font-bold py-4">Scalable Solutions for Growth</h1>
              <p className="text-gray-500 text-sm md:text-base">
                As your business grows, so will your data needs. Our scalable
                solutions allow for easy expansion, accommodating increasing
                data volumes without compromising on performance or security.
                You can focus on your core business while we handle your data
                infrastructure.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl hover:scale-105 duration-200 p-4">
              <p className="text-[#00df9a]">02</p>
              <h1 className="font-bold py-4">Compliance and Regulation</h1>
              <p className="text-gray-500 text-sm md:text-base">
                In today's data-driven world, compliance with industry
                regulations is essential. Our data management solutions are
                designed to meet the most stringent regulatory requirements,
                keeping you compliant with data protection and privacy laws.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl hover:scale-105 duration-200 p-4">
              <p className="text-[#00df9a]">02</p>
              <h1 className="font-bold py-4">Cost-Effective Efficiency:</h1>
              <p className="text-gray-500 text-sm md:text-base">
                We understand the importance of cost efficiency for businesses.
                Our solutions optimize data storage, processing, and retrieval,
                minimizing unnecessary expenses while maximizing the value of
                your data.
              </p>
            </div>
          </div>
          <p className="text-gray-500 py-4 mt-4">
            <a
              className="text-[#00df9a] hover:scale-105 hover:text-green-500 duration-200"
              href="/contact"
            >
              Get in touch{" "}
            </a>
            with us today, and let's unlock the full potential of your data
            together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Company;
