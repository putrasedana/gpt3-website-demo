import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="GPT-3 is a highly advanced AI language model developed by OpenAI. It's known for its large size (175 billion parameters) and its ability to understand and generate human-like text. It's pre-trained on vast amounts of internet text, making it versatile for various natural language processing tasks."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="A chatbot is a computer program designed to simulate human conversation, typically through text or voice interactions." />
        <Feature title="Knowledgebase" text=" GPT-3, developed by OpenAI, is a powerful language model that uses deep learning techniques to generate human-like text based on the input it receives." />
        <Feature title="Education" text="GPT-3 is used as a versatile tool for tasks like tutoring, homework assistance, language learning support, content creation, and automated grading." />
      </div>
    </div>
  );
};

export default WhatGPT3;
