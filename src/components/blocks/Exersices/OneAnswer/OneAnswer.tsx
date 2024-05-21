import React from "react";
import IQuestion from "../../../../types/IQuestion.ts";

interface IOneAnswersProps {
  question: IQuestion
}

const OneAnswer: React.FC<IOneAnswersProps> = ({question}) => {
  return (
    <div>
      {question.question}
    </div>
  );
};

export default OneAnswer;