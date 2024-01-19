"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "./faqs.scss";

const Faqs = () => {
  const [open, setOpen] = useState(false)
  const toggle = (inx) => {
    setOpen((prevOpen) => (prevOpen === inx ? null : inx))
  }

  const faqsObj = [
    {
      ask: "How can we help your business?",
      answer: "Lorem ipsum dolor All Your Qustions are in A document.",
    },
    {
      ask: "What are the advantages of Bisnext",
      answer: "Lorem ipsum dolor All Your Qustions are in A document.",
    },
    {
      ask: "Let’s find an office near you?",
      answer: "Lorem ipsum dolor All Your Qustions are in A document.",
    },
    {
      ask: "How IT consultancy experts work?",
      answer: "Lorem ipsum dolor All Your Qustions are in A document.",
    },
  ];

  return (
    <div className="faqs" id="faqs">
      <div className="container">
        <div className="faqs-content">
          <div className="faq-left">
            <div className="accordions">
            {faqsObj.map((item, inx) => (
              <>
                <div className="accordion-item" key={inx}>
                  <div className="title" onClick={() => toggle(inx)}>
                    <h2>{item.ask}</h2>
                    {
                      open === inx ? <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="7"
                      viewBox="0 0 12 7"
                      fill="none"
                    >
                      <path
                        d="M11 1L6 6L1 1"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg> : 
                    <FontAwesomeIcon icon={faChevronLeft} color="white"/>
                    }
                  </div>
                  <div className={open === inx ? "answer show" : "answer"}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </>
            ))}
            </div>
          </div>
          <div className="faq-right">
            <span>FAQs</span>
            <h3>
              Be Kind to Your Mind <br />
              Question & Answer
            </h3>
            <p>
              All Your Qustions are in A document, in question and answer <br />
              format, that introduces newcomers to a topic or answers <br />
              common questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
