import Image from "next/image";
import React from "react";

const skills = [
  "Proficient in Hindi Language Instruction",
  "Expertise in Hindi Literature and Grammar",
  "Development of Effective Communication Skills in Hindi",
  "Mentoring for Academic Excellence in Hindi",
  "Innovative Teaching Methods for Language Mastery",
  "Student-Centric Classroom Management",
];

const Hero = () => {
  return (
    <>
      <div className="bg-[#00425A]">
        
        <div className="md:grid md:grid-cols-2  lg:flex lg:justify-between lg:items-center pt-24 lg:pt-0 px-10 lg:px-28">
          <div className="text-[#FFFFFF] lg:w-[500px] md:pt-20 lg:pt-0">
            <h1 className="text-[2rem] lg:text-[4rem] font-bold font-playfair">
              Hello, my name is
              <span className="text-[#00EEEB] pt-4"> Neema Negi</span>
            </h1>
            <p className="mt-5 text-[#FFFFFF90] text-[12px] lg:text-[1.5rem] font-bricolage">
              I&apos;m a passionate educator and a Hindi expert with a
              Master&apos;s degree in Hindi Literature. With over four years of
              teaching experience, I specialize in making language learning both
              engaging and enriching.
            </p>
          </div>
          <div className="pt-8 lg:pt-0">
            <Image
              src="/neema.svg"
              width={1000}
              height={1000}
              alt="img"
              className="lg:w-[546px] lg:h-[682px] md:w-[350px] md:h-[300px]"
            />
          </div>
        </div>

        <div className="text-white p-16">
          <h2 className="text-center text-2xl font-manrope">MY SKILLS</h2>

          <div className="flex justify-center items-center mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 text-[1rem] font-manrope">
              {skills.map((skill, index) => (
                <div key={index} className="flex gap-3">
                  <div className="bg-[#00EEEB] w-[20px] h-[20px] rounded-full"></div>
                  <p className=" w-[271px] font-manrope ">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
