import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CULTURAL_QUIZZES } from '@/lib/sanskritiData';
import { Award, ArrowLeft, ArrowRight, CheckCircle2, XCircle, RotateCcw, Sparkles } from 'lucide-react';

export default function QuizDetailPage() {
  const { quizId } = useParams<{ quizId: string }>();
  const quiz = CULTURAL_QUIZZES.find(q => q.id === quizId) || CULTURAL_QUIZZES[0];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [userScore, setUserScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOptionIndex(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOptionIndex === null) return;
    setIsAnswerSubmitted(true);
    if (selectedOptionIndex === currentQuestion.correctAnswerIndex) {
      setUserScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < quiz.questions.length) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOptionIndex(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setIsAnswerSubmitted(false);
    setUserScore(0);
    setQuizCompleted(false);
  };

  const scorePercentage = Math.round((userScore / quiz.questions.length) * 100);
  const isPassed = scorePercentage >= quiz.passingScorePercent;

  return (
    <div className="bg-background text-foreground font-paragraph min-h-screen pb-24">
      {/* Top Breadcrumb Nav */}
      <div className="bg-surface border-b border-secondary py-4">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center space-x-2 text-xs text-muted">
          <Link to="/quizzes" className="hover:text-foreground flex items-center">
            <ArrowLeft className="w-3.5 h-3.5 mr-1" /> All Quizzes
          </Link>
          <span>/</span>
          <span className="text-foreground font-semibold">{quiz.title}</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-8">
        {!quizCompleted ? (
          <div className="space-y-8">
            {/* Header & Progress */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-muted">
                <span>QUESTION {currentQuestionIndex + 1} OF {quiz.questions.length}</span>
                <span>SCORE: {userScore} / {currentQuestionIndex}</span>
              </div>
              <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                <div
                  className="bg-accent h-full transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }}
                />
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl text-foreground mt-4">
                {currentQuestion.question}
              </h2>
            </div>

            {/* Options List */}
            <div className="space-y-3">
              {currentQuestion.options.map((optionText, idx) => {
                let btnStyle = 'border-secondary bg-surface text-foreground hover:border-foreground';
                if (selectedOptionIndex === idx) {
                  btnStyle = 'border-accent bg-accent/10 font-semibold';
                }
                if (isAnswerSubmitted) {
                  if (idx === currentQuestion.correctAnswerIndex) {
                    btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                  } else if (selectedOptionIndex === idx) {
                    btnStyle = 'border-rose-500 bg-rose-50 text-rose-900 font-bold';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswerSubmitted}
                    className={`w-full p-4 rounded-xl border font-paragraph text-sm text-left transition-all flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{optionText}</span>
                    {isAnswerSubmitted && idx === currentQuestion.correctAnswerIndex && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {isAnswerSubmitted && selectedOptionIndex === idx && idx !== currentQuestion.correctAnswerIndex && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation Banner */}
            {isAnswerSubmitted && (
              <div className="p-4 bg-surface border border-secondary rounded-xl space-y-2 animate-in fade-in">
                <h5 className="font-heading text-sm text-foreground">CULTURAL EXPLANATION:</h5>
                <p className="font-paragraph text-xs text-muted leading-relaxed">
                  {currentQuestion.explanation}
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-end pt-4">
              {!isAnswerSubmitted ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={selectedOptionIndex === null}
                  className="px-8 py-3.5 bg-accent hover:bg-accent-hover text-foreground font-paragraph text-xs font-bold tracking-wider rounded-lg disabled:opacity-50 transition-all shadow-sm"
                >
                  SUBMIT ANSWER
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="px-8 py-3.5 bg-foreground hover:bg-foreground/90 text-background font-paragraph text-xs font-bold tracking-wider rounded-lg transition-all flex items-center"
                >
                  <span>{currentQuestionIndex + 1 < quiz.questions.length ? 'NEXT QUESTION' : 'VIEW FINAL RESULTS'}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Quiz Results View */
          <div className="p-8 lg:p-12 bg-surface border border-secondary rounded-2xl text-center space-y-6">
            <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center border-2 ${
              isPassed ? 'bg-accent/20 border-accent text-accent-dark' : 'bg-secondary/50 border-secondary text-muted'
            }`}>
              <Award className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="font-heading text-xs uppercase tracking-widest text-muted">QUIZ COMPLETED</span>
              <h2 className="font-heading text-4xl sm:text-5xl text-foreground">
                {isPassed ? 'CONGRATULATIONS! YOU PASSED!' : 'KEEP LEARNING & TRY AGAIN!'}
              </h2>
              <p className="font-paragraph text-lg font-bold text-foreground">
                YOUR SCORE: {scorePercentage}% ({userScore} / {quiz.questions.length} CORRECT)
              </p>
            </div>

            {isPassed ? (
              <div className="p-6 bg-background border border-accent/40 rounded-xl space-y-3 max-w-md mx-auto">
                <div className="flex items-center justify-center space-x-2 text-accent-dark">
                  <Sparkles className="w-5 h-5 text-accent-dark" />
                  <span className="font-heading text-base">VERIFIED BADGE UNLOCKED!</span>
                </div>
                <h4 className="font-heading text-2xl text-foreground">{quiz.badgeAwarded}</h4>
                <p className="text-xs text-muted">
                  This cultural achievement badge has been saved to your profile dashboard.
                </p>
              </div>
            ) : (
              <p className="text-xs text-muted max-w-md mx-auto">
                Required passing score is {quiz.passingScorePercent}%. Retake the quiz to earn your {quiz.badgeAwarded} badge!
              </p>
            )}

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button
                onClick={handleRestartQuiz}
                className="px-6 py-3.5 border border-foreground hover:bg-secondary text-foreground font-paragraph text-xs font-bold tracking-wider rounded-lg transition-all flex items-center justify-center"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                RETRY QUIZ
              </button>
              <Link
                to="/profile"
                className="px-6 py-3.5 bg-accent hover:bg-accent-hover text-foreground font-paragraph text-xs font-bold tracking-wider rounded-lg transition-all"
              >
                VIEW MY BADGES IN PROFILE
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
