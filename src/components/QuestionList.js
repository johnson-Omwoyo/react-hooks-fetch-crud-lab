import QuestionItem from "./QuestionItem";

function QuestionList({ quistions,handleDelete,handleAnswerChange }) {
  console.log(quistions);


  console.log();
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {quistions.map((quistion) => (
          <QuestionItem question={quistion} handleDelete={handleDelete} handleAnswerChange={handleAnswerChange}  />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
