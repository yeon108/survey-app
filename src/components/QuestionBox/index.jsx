import React from "react";
import Title from "../Title";
import Desc from "../Desc";
import Body from "../Body";
import ActionButtons from "../ActionButtons";

export default function QuestionBox({ question, questionsLength, step }) {
  return (
    <div>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body type={question.type}></Body>
      <ActionButtons questionsLength={questionsLength} step={step} />
    </div>
  );
}
