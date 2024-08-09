import React from "react";

function QuestionItem({ question, handleDelete, handleAnswerChange }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select
          onChange={(e) =>{ let to=(e.target.value);let id=(question.id); handleAnswerChange(to,id)}}
          defaultValue={correctIndex}
        >
          {options}
        </select>
      </label>
      <button onClick={() => handleDelete(question.id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
