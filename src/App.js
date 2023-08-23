import { useState } from "react";
import ProgressIndicator from "./components/ProgressIndicator";
import QuestionBox from "./components/QuestionBox";

function App() {
  const questions = [
    {
      title: "질문 1 입니다.",
      desc: "설명 1 입니다",
      type: "text",
      required: false,
      options: {},
    },
    {
      title: "질문 2 입니다.",
      desc: "설명 2 입니다",
      type: "text",
      required: false,
      options: {},
    },
  ];

  const step = 0;
  const [answers, setAnswers] = useState([]);

  return (
    <div className="App">
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
        answers={answers[step]}
        setAnswer={(newAnswer) => {
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;
          });
        }}
      />
    </div>
  );
}

export default App;
