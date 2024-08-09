import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [quistions, setQuistions] = useState([]);
  const url = "http://localhost:4000/questions/";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network delays");
        }
        const data = await response.json();
        setQuistions(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const handleDelete = async (id) => {
    await fetch(url + id, {
      method: "DELETE",
    });
    setQuistions(quistions.filter((question) => question.id !== id));
  };

  const handleAnswerChange = (to, id) => {
    fetch(url + id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correctIndex: to }),
    });
  };

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm setQuestions={setQuistions} questions={quistions} />
      ) : (
        <QuestionList
          quistions={quistions}
          handleDelete={handleDelete}
          handleAnswerChange={handleAnswerChange}
        />
      )}
    </main>
  );
}

export default App;
