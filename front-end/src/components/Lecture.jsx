import React, { useState } from 'react';
import Quiz from '../components/QuizComponent'
import { QuizProvider } from "../context/quiz";

const Lecture = ({ questions,lecture }) => {
  return (
    <>
    <QuizProvider data={questions}>
      <Quiz lecture={lecture}/>
    </QuizProvider>
    </>
    
  )
}

export default Lecture