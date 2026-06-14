import { useMemo, useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  ClipboardList,
  Filter,
  GraduationCap,
  Layers,
  Search,
  ShieldCheck,
  Target,
  XCircle
} from "lucide-react";
import { lessons, questions } from "./data/questions.js";

const difficultyOrder = ["All", "Medium", "Hard", "Expert"];

function App() {
  const [selectedLesson, setSelectedLesson] = useState(lessons[0]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [query, setQuery] = useState("");
  const [showReview, setShowReview] = useState(false);

  // Get lesson number from question ID (e.g., "L01-Q001" -> "01")
  const getLessonNumber = (questionId) => questionId.split("-")[0].slice(1);

  const filteredQuestions = useMemo(() => {
    const lessonNumber = selectedLesson.id.slice(-2); // "lesson-01" -> "01"
    return questions.filter((question) => {
      const questionLessonNumber = getLessonNumber(question.id);
      const matchesLesson = questionLessonNumber === lessonNumber;
      const matchesDifficulty = difficulty === "All" || question.difficulty === difficulty;
      const searchable = `${question.id} ${question.difficulty} ${question.domain} ${question.objective} ${question.scenario}`;
      return matchesLesson && matchesDifficulty && searchable.toLowerCase().includes(query.toLowerCase());
    });
  }, [selectedLesson, difficulty, query]);

  // Initialize selectedQuestion when lesson changes or on first load
  useMemo(() => {
    if (filteredQuestions.length > 0 && (!selectedQuestion || selectedQuestion.id !== filteredQuestions[0].id)) {
      setSelectedQuestion(filteredQuestions[0]);
    }
  }, [filteredQuestions, selectedQuestion]);

  const answeredCorrectly = selectedQuestion && selectedChoice === selectedQuestion.correctAnswer;

  function chooseQuestion(question) {
    setSelectedQuestion(question);
    setSelectedChoice("");
    setShowReview(false);
  }

  return (
    <main className="app-shell">
      <section className="hero">
        <div className="hero__copy">
          <div className="eyebrow">
            <ShieldCheck size={18} />
            CompTIA Security+ SY0-701
          </div>
          <h1>Security+ Exam Question Bank</h1>
          <p>
            Scenario-based practice for candidates who need to reason through security tradeoffs,
            control selection, IAM design, governance, and incident response decisions.
          </p>
        </div>
        <div className="hero__stats" aria-label="Question bank summary">
          <div>
            <strong>{questions.length}</strong>
            <span>Exam-style questions</span>
          </div>
          <div>
            <strong>3</strong>
            <span>Difficulty bands</span>
          </div>
          <div>
            <strong>{lessons.length}</strong>
            <span>Seeded lessons</span>
          </div>
        </div>
      </section>

      <section className="lesson-strip">
        {lessons.map((lesson) => (
          <button
            className={selectedLesson.id === lesson.id ? "lesson-panel is-active" : "lesson-panel"}
            key={lesson.id}
            onClick={() => {
              setSelectedLesson(lesson);
              setSelectedChoice("");
              setShowReview(false);
            }}
            type="button"
          >
            <div className="lesson-panel__title">
              <BookOpen size={20} />
              <h2>{lesson.title}</h2>
            </div>
          </button>
        ))}
      </section>

      <section className="workspace">
        <aside className="question-browser" aria-label="Question list">
          <div className="browser-header">
            <div>
              <span className="section-kicker">Question Set</span>
              <h2>{selectedLesson.title}</h2>
            </div>
            <ClipboardList size={24} />
          </div>

          <label className="search-box">
            <Search size={18} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search scenarios"
            />
          </label>

          <div className="difficulty-tabs" aria-label="Difficulty filter">
            <Filter size={17} />
            {difficultyOrder.map((level) => (
              <button
                className={difficulty === level ? "is-active" : ""}
                key={level}
                onClick={() => setDifficulty(level)}
                type="button"
              >
                {level}
              </button>
            ))}
          </div>

          <div className="question-list">
            {filteredQuestions.map((question, index) => (
              <button
                className={selectedQuestion && selectedQuestion.id === question.id ? "question-row is-selected" : "question-row"}
                key={question.id}
                onClick={() => chooseQuestion(question)}
                type="button"
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{question.id}</strong>
                  <small>{question.difficulty} · {question.domain}</small>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {selectedQuestion && (
        <section className="exam-card" aria-live="polite">
          <div className="question-meta">
            <span>{selectedQuestion.id}</span>
            <span>{selectedQuestion.difficulty}</span>
            <span>{selectedQuestion.domain}</span>
          </div>

          <div className="objective-block">
            <Target size={20} />
            <div>
              <span className="section-kicker">Objective</span>
              <p>{selectedQuestion.objective}</p>
            </div>
          </div>

          <div className="scenario">
            <span className="section-kicker">Scenario</span>
            <h2>{selectedQuestion.scenario}</h2>
          </div>

          <div className="answer-grid">
            {selectedQuestion.choices.map((choice) => {
              const letter = choice.slice(0, 1);
              const isSelected = selectedChoice === letter;
              const isCorrect = showReview && selectedQuestion.correctAnswer === letter;
              const isWrong = showReview && isSelected && !isCorrect;

              return (
                <button
                  className={[
                    "choice-button",
                    isSelected ? "is-picked" : "",
                    isCorrect ? "is-correct" : "",
                    isWrong ? "is-wrong" : ""
                  ].join(" ")}
                  key={choice}
                  onClick={() => setSelectedChoice(letter)}
                  type="button"
                >
                  <span>{letter}</span>
                  <p>{choice.slice(3)}</p>
                </button>
              );
            })}
          </div>

          <div className="action-bar">
            <button
              className="primary-action"
              disabled={!selectedChoice}
              onClick={() => setShowReview(true)}
              type="button"
            >
              <GraduationCap size={18} />
              Grade Answer
            </button>
            <button
              className="secondary-action"
              onClick={() => {
                setSelectedChoice("");
                setShowReview(false);
              }}
              type="button"
            >
              Reset
            </button>
          </div>

          {showReview && (
            <section className="review-panel">
              <div className={answeredCorrectly ? "result-banner is-correct" : "result-banner is-wrong"}>
                {answeredCorrectly ? <CheckCircle2 size={22} /> : <XCircle size={22} />}
                <strong>{answeredCorrectly ? "Correct" : "Review Needed"}</strong>
                <span>Answer {selectedQuestion.correctAnswer}</span>
              </div>

              <div className="explanation-grid">
                <article>
                  <span className="section-kicker">Detailed Explanation</span>
                  <p>{selectedQuestion.explanation}</p>
                </article>
                <article>
                  <span className="section-kicker">Exam Tip</span>
                  <p>{selectedQuestion.examTip}</p>
                </article>
              </div>

              <article className="why-wrong">
                <div className="lesson-panel__title">
                  <Layers size={20} />
                  <h3>Why the Other Choices Are Wrong</h3>
                </div>
                {Object.entries(selectedQuestion.incorrect).map(([letter, reason]) => (
                  <p key={letter}>
                    <strong>{letter}.</strong> {reason}
                  </p>
                ))}
              </article>

              <div className="mapping">
                <span className="section-kicker">Security+ Objective Mapping</span>
                <p>{selectedQuestion.mapping}</p>
              </div>
            </section>
          )}
        </section>
        )}
      </section>
    </main>
  );
}

export default App;
