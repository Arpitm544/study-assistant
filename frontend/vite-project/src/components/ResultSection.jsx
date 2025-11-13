import React from 'react';
import './ResultSection.css';

const ResultSection = ({ data, topic }) => {
  if (!data) return null;

  return (
    <div className="result-section">
      <h2 className="result-title">Study Materials: {topic}</h2>
      
      {data.summary && data.summary.length > 0 && (
        <section className="result-card summary-card">
          <h3>📚 Summary</h3>
          <ul className="summary-list">
            {data.summary.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </section>
      )}

      {data.quiz && data.quiz.length > 0 && (
        <section className="result-card quiz-card">
          <h3>❓ Quiz</h3>
          <div className="quiz-list">
            {data.quiz.map((item, index) => (
              <div key={index} className="quiz-item">
                <p className="quiz-question">{item.question}</p>
                <div className="quiz-options">
                  {item.options.map((option, optIndex) => (
                    <div
                      key={optIndex}
                      className={`quiz-option ${optIndex === item.answerIndex ? 'correct' : ''}`}
                    >
                      {String.fromCharCode(65 + optIndex)}. {option}
                      {optIndex === item.answerIndex && <span className="answer-badge">✓ Correct</span>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {data.tip && (
        <section className="result-card tip-card">
          <h3>💡 Study Tip</h3>
          <p className="tip-text">{data.tip}</p>
        </section>
      )}

      {data.math && (
        <section className="result-card math-card">
          <h3>🔢 Math Problem</h3>
          <div className="math-content">
            <p className="math-question"><strong>Question:</strong> {data.math.question}</p>
            <p className="math-answer"><strong>Answer:</strong> {data.math.answer}</p>
            <p className="math-explanation"><strong>Explanation:</strong> {data.math.explanation}</p>
          </div>
        </section>
      )}
    </div>
  );
};

export default ResultSection;

