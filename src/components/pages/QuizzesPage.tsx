import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SafeImage } from '@/components/ui/SafeImage';
import { CULTURAL_QUIZZES } from '@/lib/sanskritiData';
import { Award, ArrowRight, CheckCircle2, Sparkles, HelpCircle } from 'lucide-react';

export default function QuizzesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Dance & Art', 'Festivals', 'Heritage'];

  const filteredQuizzes = selectedCategory === 'All'
    ? CULTURAL_QUIZZES
    : CULTURAL_QUIZZES.filter(q => q.category === selectedCategory);

  return (
    <div className="bg-background text-foreground font-paragraph min-h-screen py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-16">
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="font-heading text-xs text-accent-dark tracking-widest uppercase">CULTURAL KNOWLEDGE CHALLENGES</span>
          <h1 className="font-heading text-5xl sm:text-6xl text-foreground">TEST YOUR INDIAN CULTURAL IQ</h1>
          <p className="font-paragraph text-muted text-base">
            Take interactive quizzes on classical dances, state heritage, sacred shrines, and regional festivals. Earn verified cultural badges and track your progress!
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex overflow-x-auto pb-2 gap-3 no-scrollbar">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-5 py-2.5 rounded-lg font-heading text-base tracking-wider transition-all border shrink-0 ${
                selectedCategory === c
                  ? 'bg-accent border-accent text-foreground font-bold shadow-sm'
                  : 'bg-surface border-secondary text-muted hover:border-foreground'
              }`}
            >
              {c.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Quiz Catalog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredQuizzes.map((quiz) => (
            <div key={quiz.id} className="bg-surface border border-secondary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="h-52 relative">
                <SafeImage src={quiz.image} alt={quiz.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 bg-accent text-foreground px-3 py-1 rounded-full text-xs font-bold">
                  {quiz.difficulty} DIFFICULTY
                </div>
                <div className="absolute top-3 right-3 bg-foreground text-background px-2.5 py-0.5 rounded text-[10px] font-bold uppercase flex items-center">
                  <Award className="w-3.5 h-3.5 mr-1 text-accent" /> BADGE REWARD
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-accent-dark block">{quiz.questions.length} QUESTIONS · PASSING SCORE {quiz.passingScorePercent}%</span>
                  <h3 className="font-heading text-2xl text-foreground leading-snug">{quiz.title}</h3>
                  <p className="text-xs text-muted leading-relaxed line-clamp-3">{quiz.description}</p>
                </div>

                <div className="pt-4 border-t border-secondary space-y-3">
                  <div className="flex items-center space-x-2 text-xs text-foreground font-medium bg-background p-2.5 border border-secondary rounded-lg">
                    <Sparkles className="w-4 h-4 text-accent-dark shrink-0" />
                    <span>Reward Badge: <strong>{quiz.badgeAwarded}</strong></span>
                  </div>

                  <Link
                    to={`/quiz/${quiz.id}`}
                    className="w-full py-3 bg-foreground hover:bg-foreground/90 text-background font-paragraph text-xs font-bold tracking-wider rounded-lg text-center transition-all block"
                  >
                    START QUIZ NOW
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
