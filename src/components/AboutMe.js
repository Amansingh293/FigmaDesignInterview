import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLinkOutline } from "react-icons/io5";

export const AboutMe = () => {
  return (
    <div className="w-full lg:w-[56rem] h-fit flex flex-col gap-6 font-oxygen p-8">
      <h1 className="font-[700] text-[31px]">About Me</h1>
      <div className="flex justify-around items-center w-fit gap-4">
        <div className="h-[5rem] w-[5rem] border rounded-[16px] flex justify-center items-center text-[36px]">
          <FaLinkedin />
        </div>
        <div className="h-[5rem] w-[5rem] border rounded-[16px] flex justify-center items-center text-[36px]">
          <FaTwitter />
        </div>
        <div className="h-[5rem] w-[5rem] border rounded-[16px] flex justify-center items-center text-[36px]">
          <FaYoutube />
        </div>
        <div className="h-[5rem] w-[5rem] border rounded-[16px] flex justify-center items-center text-[36px]">
          <FaInstagram />
        </div>
        <div className="h-[5rem] w-[5rem] border rounded-[16px] flex justify-center items-center text-[36px]">
          <IoLinkOutline />
        </div>
      </div>
      <p>Do you feel stuck in your career, or relationship?</p>
      <p>
        Do you need someone to level up your confidence in your body and self?
      </p>
      <p>If your answer is yes, then your quest is over here.</p>
      <p>Hello, I am Pallavi Sharma.</p>
      <p>
        As a MINDeMOTION COACH, my focus is on not just helping clients find
        their passion, identify their strengths, and set and achieve meaningful
        goals but also mastering their emotions which in turn enables them to
        lead an abundant life holistically.
      </p>
      <p>
        I am a clinical psychologist and have been a trained expert in #NLP,
        #EFT, the LAW OF ATTRACTION #LOA, and various other coaching techniques
        and approaches.
      </p>
      <p>
        I believe that everyone has the potential to live a fulfilling and
        successful #life, and my goal is to support and guide clients as they
        take steps toward realizing their full potential.
      </p>
      <p>
        Based on my experiences, knowledge, and transformative results of more
        than 1000 clients of mine, I have discovered a "No less than a magic"
        modality called EAT - Emotional Awakening Transformation".
      </p>
      <p>
        I am committed to providing a supportive and non-judgmental environment
        for my clients and further empowering them to make positive
        choices/changes in their lives.
      </p>
      <p>
        In my 4+ years of coaching, I have helped clients overcome challenges
        such as low self-esteem, relationship issues, past traumas, and
        money-mind stagnation. I have a passion for helping people discover
        their passions and take the steps needed to achieve their dreams.
      </p>
      <p>
        If you are looking for guidance, motivation, and accountability as you
        work toward achieving your goals, I would be happy to work with you!
      </p>
    </div>
  );
};
