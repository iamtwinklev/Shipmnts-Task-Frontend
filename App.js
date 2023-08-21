import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [form, setform] = useState([]);
  const [currentForm, setCurrentForm] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState('');
  const [questionType, setQuestionType] = useState('short-answer');
  const [isRequired, setIsRequired] = useState(true);
  // const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const handleAddQuestion = () => {
    if (newQuestion.trim() !== '') {
      setQuestions([...questions, newQuestion]);
      setNewQuestion('');
    }
  };

  const createForm = () => {
    const newForm = {
      title,
      description,
      questions,
    };
    setform([...form, newForm]);
    setCurrentForm(newForm);
    clearFormFields();
  };

  const addQuestion = () => {
    const newQuestion = {
      text: questionText,
      type: questionType,
      required: isRequired,
    };
    setQuestions([...questions, newQuestion]);
    clearQuestionFields();
  };

  const clearFormFields = () => {
    setTitle('');
    setDescription('');
    setQuestions([]);
    setCurrentForm(null);
  };

  const clearQuestionFields = () => {
    setQuestionText('');
    setQuestionType('short-answer');
    setIsRequired(true);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Google Form Creator</h1>
      <div>
        <h2 style={{ textAlign: "center" }}>Create Form</h2>
        <div style={{
          display: "flex",
          textAlign: "center",
          marginLeft: "28%"
        }}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          /><br />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          /><br />
          <button onClick={createForm}>Create</button>
        </div>
      </div>
      {currentForm && (
        <div>
          <h2>Add Question</h2>
          <input
            type="text"
            placeholder="Question Text"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
          />
          <select
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)}
          >
            <option value="short-answer">Short Answer</option>
            <option value="multiple-choice">Multiple Choice</option>
            <option value="checkboxes">Checkboxes</option>
          </select>
          <label>
            Required:
            <input
              type="checkbox"
              checked={isRequired}
              onChange={() => setIsRequired(!isRequired)}
            />
          </label>
          <button onClick={addQuestion}>Add Question</button>
        </div>
      )}
      <div>
        <h2>Your form</h2>
        <ul>
          {form.map((form, index) => (
            <li key={index}>
              <h3>Title: {form.title}</h3>
              <p>{form.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter a new question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <button onClick={handleAddQuestion}>Add Question</button>
      </div>
      <div>
        {questions.map((question, index) => (
          <div key={index}>{question}</div>
        ))}
      </div>
    </div>
  );
};

export default App;