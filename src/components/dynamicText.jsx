import React, { useState, useEffect } from "react";

function SentencePrinter({ sentences }) {
  const [currentSentence, setCurrentSentence] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [reFresh, setDreFresh] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSentence < sentences.length) {
        const sentence = sentences[currentSentence];
        if (currentLetterIndex < sentence.length) {
          setDisplayedText(
            (prevText) => prevText + sentence.charAt(currentLetterIndex)
          );
          setCurrentLetterIndex(currentLetterIndex + 1);
        } else {
          setDisplayedText("");
          setCurrentSentence(currentSentence + 1);
          setCurrentLetterIndex(0);
        }
      } else {
        setCurrentSentence(0);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [sentences, reFresh, currentSentence, currentLetterIndex]);

  return <>{displayedText}</>;
}

function DynamicText() {
  const sentences = [
    "1 Lakh Reviews",
    "250+ Exams",
    "25000+ Colleges",
    "11000+ Courses",
  ];

  return (
    <div className="dynamicData">
      <div className="dynamicText">Find Over {<SentencePrinter sentences={sentences} />} in India</div>
    </div>
  );
}

export default DynamicText;
