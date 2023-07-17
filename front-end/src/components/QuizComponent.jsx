import React, { useState, useEffect, useContext } from 'react';
import Question from "./Questions";
import { QuizContext } from "../context/quiz";
import useAuthContext from '../context/AuthContext';
import axios from "../api/axios";
import "../index.css";

const Quiz = ({ lecture }) => {
  const [quizState, dispatch] = useContext(QuizContext);
  const { user, getUser } = useAuthContext();
  const [executedPost, setExecutedPost] = useState(false);
  const user_id = user?.id;

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user, getUser]);

  useEffect(() => {
    if (quizState.showResults && !executedPost) {
      axios.post('api/quiz/points', {
        user_id: user_id,
        lecture: lecture,
        points: quizState.correctAnswersCount,
        max_points: quizState.questions.length
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });

      setExecutedPost(true);
    }
  }, [quizState.showResults, quizState.correctAnswersCount, quizState.questions.length, executedPost, user_id]);

  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Gratulujeme!</div>
          <div className="results-info">
            <div>Dokončili ste lekciu.</div>
            <div>
              Mali ste {quizState.correctAnswersCount} zo &nbsp;
              {quizState.questions.length} odpovedí správne.
            </div>
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <div className="score">
            Otázka {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          {quizState.currentAnswer && (
            <div
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
              className="next-button"
            >
              Ďalšia otázka
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;