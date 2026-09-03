import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, MapPin, Calendar, BookOpen, Award, ArrowRight } from 'lucide-react';
import { searchSanskriti } from '@/lib/sanskritiData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const results = searchSanskriti(query);

  if (!isOpen) return null;

  const quickSuggestions = [
    'Holi in Jaipur',
    'Kerala Cooking',
    'Banaras Artisan',
    'Andhra Pradesh',
    'Bharatanatyam',
    'Durga Puja'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/60 backdrop-blur-sm transition-opacity duration-200">
      <div className="bg-background border border-secondary rounded-xl w-full max-w-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Search Input Bar */}
        <div className="flex items-center px-6 py-4 border-b border-secondary">
          <Search className="w-5 h-5 text-muted mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search experiences, cities, festivals, state culture, or online classes..."
            className="w-full bg-transparent font-paragraph text-base text-foreground placeholder:text-muted focus:outline-none"
            autoFocus
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-muted hover:text-foreground mr-2">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-3 py-1 bg-surface border border-secondary rounded-lg font-paragraph text-xs font-medium text-foreground hover:bg-secondary transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Modal Body */}
        <div className="max-h-[70vh] overflow-y-auto p-6 space-y-6">
          {!query ? (
            <div className="space-y-4">
              <h4 className="font-heading text-lg text-foreground tracking-wide">
                SUGGESTED SEARCHES
              </h4>
              <div className="flex flex-wrap gap-2">
                {quickSuggestions.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-4 py-2 bg-surface hover:bg-accent/20 border border-secondary rounded-full font-paragraph text-xs font-medium text-foreground hover:border-accent transition-all duration-200"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Experiences */}
              {results.experiences.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-accent-dark font-heading text-sm uppercase tracking-wider">
                    <Calendar className="w-4 h-4 text-accent-dark" />
                    <span>Cultural Experiences ({results.experiences.length})</span>
                  </div>
                  <div className="grid gap-3">
                    {results.experiences.map((exp) => (
                      <Link
                        key={exp.id}
                        to={`/experience/${exp.id}`}
                        onClick={onClose}
                        className="flex items-center justify-between p-3 bg-surface hover:bg-accent/10 border border-secondary rounded-lg transition-all"
                      >
                        <div>
                          <h5 className="font-paragraph font-medium text-sm text-foreground">{exp.title}</h5>
                          <p className="font-paragraph text-xs text-muted flex items-center mt-1">
                            <MapPin className="w-3 h-3 mr-1" />
                            {exp.location} · ₹{exp.priceINR}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* States */}
              {results.states.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-foreground font-heading text-sm uppercase tracking-wider">
                    <MapPin className="w-4 h-4 text-foreground" />
                    <span>States & UTs ({results.states.length})</span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {results.states.map((st) => (
                      <Link
                        key={st.key}
                        to={`/state/${st.key}`}
                        onClick={onClose}
                        className="flex items-center space-x-3 p-3 bg-surface hover:bg-accent/10 border border-secondary rounded-lg transition-all"
                      >
                        <img src={st.image} alt={st.name} className="w-10 h-10 rounded-md object-cover" />
                        <div>
                          <h5 className="font-heading text-base text-foreground">{st.name}</h5>
                          <p className="font-paragraph text-xs text-muted">{st.capital} · {st.region}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Festivals */}
              {results.festivals.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-foreground font-heading text-sm uppercase tracking-wider">
                    <BookOpen className="w-4 h-4 text-foreground" />
                    <span>Festivals ({results.festivals.length})</span>
                  </div>
                  <div className="grid gap-3">
                    {results.festivals.map((fest) => (
                      <Link
                        key={fest.id}
                        to={`/festival/${fest.id}`}
                        onClick={onClose}
                        className="flex items-center justify-between p-3 bg-surface hover:bg-accent/10 border border-secondary rounded-lg transition-all"
                      >
                        <div>
                          <h5 className="font-heading text-base text-foreground">{fest.name}</h5>
                          <p className="font-paragraph text-xs text-muted">{fest.tagline} ({fest.month})</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* No results */}
              {results.experiences.length === 0 && results.states.length === 0 && results.festivals.length === 0 && results.onlineClasses.length === 0 && (
                <div className="py-12 text-center space-y-3">
                  <Search className="w-10 h-10 text-muted mx-auto" />
                  <h4 className="font-heading text-xl text-foreground">NO RESULTS FOUND FOR "{query}"</h4>
                  <p className="font-paragraph text-sm text-muted">Try searching for a state like "Jaipur", "Kerala", "Baisakhi", or "Cooking".</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
