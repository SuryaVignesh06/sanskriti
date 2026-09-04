import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SafeImage } from '@/components/ui/SafeImage';
import { MessageSquare, ThumbsUp, Sparkles, Plus, Search, Tag, UserCheck, ShieldCheck } from 'lucide-react';
import { addKarmaPoints } from '@/lib/karmaSystem';

interface CommunityPost {
  id: string;
  authorName: string;
  authorAvatar: string;
  isAmbassador: boolean;
  stateName: string;
  category: 'Question' | 'Local Tip' | 'Cultural Story' | 'Festival Advice';
  title: string;
  content: string;
  upvotes: number;
  commentsCount: number;
  timeAgo: string;
}

const INITIAL_POSTS: CommunityPost[] = [
  {
    id: 'post-1',
    authorName: 'Meera Patel',
    authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    isAmbassador: true,
    stateName: 'Rajasthan',
    category: 'Festival Advice',
    title: 'Best spots to watch Jaipur Elephant & Rangwali Holi in 2026 without heavy crowds?',
    content: 'If you want to experience authentic family Holi in Jaipur, avoid the chaotic commercial plazas. Visit old city heritage havelis near Johari Bazaar where families gather with organic Gulaal colors.',
    upvotes: 42,
    commentsCount: 18,
    timeAgo: '2 hours ago'
  },
  {
    id: 'post-2',
    authorName: 'Anjali Menon',
    authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
    isAmbassador: true,
    stateName: 'Kerala',
    category: 'Local Tip',
    title: 'How to observe traditional etiquette when attending a Theyyam ritual performance?',
    content: 'Theyyam is not just a dance performance; it is a sacred deity invocation ritual. Keep shoes off at temple boundary, avoid flash photography during midnight rituals, and accept Prasadam with both hands.',
    upvotes: 68,
    commentsCount: 24,
    timeAgo: '5 hours ago'
  },
  {
    id: 'post-3',
    authorName: 'Raghav Mishra',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    isAmbassador: true,
    stateName: 'Uttar Pradesh',
    category: 'Question',
    title: 'What time is best for morning boat ride along Varanasi Ghats to hear classical shehnai?',
    content: 'Around 5:15 AM before sunrise near Subah-e-Banaras Assi Ghat. Classical musicians play ragas as sunrise reflects on the Ganges.',
    upvotes: 35,
    commentsCount: 9,
    timeAgo: '1 day ago'
  }
];

export default function CommunityPage() {
  const [posts, setPosts] = useState<CommunityPost[]>(INITIAL_POSTS);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [newPostModalOpen, setNewPostModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newState, setNewState] = useState('Rajasthan');
  const [newCategory, setNewCategory] = useState<'Question' | 'Local Tip' | 'Cultural Story' | 'Festival Advice'>('Question');
  const [upvotedIds, setUpvotedIds] = useState<string[]>([]);

  const categories = ['All', 'Question', 'Local Tip', 'Cultural Story', 'Festival Advice'];

  const handleUpvote = (postId: string) => {
    if (upvotedIds.includes(postId)) return;
    setUpvotedIds((prev) => [...prev, postId]);
    setPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, upvotes: p.upvotes + 1 } : p))
    );
    addKarmaPoints(10, 'Upvoted helpful community tip');
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const created: CommunityPost = {
      id: `post-${Date.now()}`,
      authorName: 'You (Explorer)',
      authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
      isAmbassador: false,
      stateName: newState,
      category: newCategory,
      title: newTitle,
      content: newContent,
      upvotes: 1,
      commentsCount: 0,
      timeAgo: 'Just now'
    };

    setPosts([created, ...posts]);
    setNewTitle('');
    setNewContent('');
    setNewPostModalOpen(false);
    addKarmaPoints(20, 'Shared a community story/question');
  };

  const filteredPosts = posts.filter((p) => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.stateName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-background text-foreground font-paragraph min-h-screen py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center space-x-2 px-3 py-1 bg-accent/20 text-accent-dark rounded-full text-xs font-bold uppercase tracking-wider">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>SANSKRITI CULTURAL COMMUNITY</span>
            </span>
            <h1 className="font-heading text-5xl sm:text-6xl text-foreground">COMMUNITY CIRCLE</h1>
            <p className="font-paragraph text-muted text-base">
              Ask local Ambassadors travel advice, share festival stories, and exchange living culture tips across all 28 states.
            </p>
          </div>

          <button
            onClick={() => setNewPostModalOpen(true)}
            className="px-6 py-3.5 bg-accent hover:bg-accent-hover text-foreground font-heading text-sm font-bold tracking-wider rounded-xl transition-all shadow-sm flex items-center space-x-2 shrink-0 self-start md:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>START A DISCUSSION (+20 KARMA)</span>
          </button>
        </div>

        {/* Categories & Search */}
        <div className="bg-surface border border-secondary p-6 rounded-[24px] flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
          <div className="flex overflow-x-auto pb-2 gap-2 justify-start no-scrollbar">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`px-4 py-2 rounded-xl font-heading text-xs sm:text-sm tracking-wider transition-all border shrink-0 ${
                  selectedCategory === c
                    ? 'bg-accent border-accent text-foreground font-bold shadow-sm'
                    : 'bg-background border-secondary text-muted hover:border-foreground'
                }`}
              >
                {c.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search discussions or states..."
              className="w-full pl-10 pr-4 py-2.5 bg-background border border-secondary rounded-xl font-paragraph text-xs text-foreground focus:outline-none focus:border-accent"
            />
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6 max-w-4xl">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-surface border border-secondary rounded-[24px] p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <SafeImage src={post.authorAvatar} alt={post.authorName} className="w-10 h-10 rounded-full object-cover border border-accent" />
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <span className="font-heading text-base text-foreground font-bold">{post.authorName}</span>
                      {post.isAmbassador && (
                        <span className="px-2 py-0.5 bg-accent/20 text-accent-dark text-[10px] font-bold rounded flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3" /> Host
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-muted">{post.timeAgo} · {post.stateName}</span>
                  </div>
                </div>

                <span className="px-3 py-1 bg-background border border-secondary rounded-full text-[11px] font-bold text-foreground">
                  {post.category}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-heading text-2xl text-foreground leading-snug">{post.title}</h3>
                <p className="font-paragraph text-sm text-muted leading-relaxed">{post.content}</p>
              </div>

              <div className="pt-4 border-t border-secondary flex items-center justify-between">
                <button
                  onClick={() => handleUpvote(post.id)}
                  disabled={upvotedIds.includes(post.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                    upvotedIds.includes(post.id)
                      ? 'bg-accent border-accent text-foreground'
                      : 'bg-background border-secondary hover:border-foreground text-foreground'
                  }`}
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>{post.upvotes} UPVOTES</span>
                </button>

                <div className="flex items-center space-x-1 text-xs text-muted">
                  <MessageSquare className="w-4 h-4" />
                  <span>{post.commentsCount} REPLIES</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Post Modal */}
      {newPostModalOpen && (
        <div className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface border border-secondary rounded-[28px] max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-xl">
            <h3 className="font-heading text-3xl text-foreground">START A DISCUSSION</h3>

            <form onSubmit={handleCreatePost} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1">TOPIC CATEGORY</label>
                <select
                  value={newCategory}
                  onChange={(e: any) => setNewCategory(e.target.value)}
                  className="w-full p-3 bg-background border border-secondary rounded-xl text-xs text-foreground focus:outline-none focus:border-accent"
                >
                  <option value="Question">Question</option>
                  <option value="Local Tip">Local Tip</option>
                  <option value="Cultural Story">Cultural Story</option>
                  <option value="Festival Advice">Festival Advice</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1">STATE FOCUS</label>
                <input
                  type="text"
                  value={newState}
                  onChange={(e) => setNewState(e.target.value)}
                  placeholder="e.g. Rajasthan, Kerala..."
                  className="w-full p-3 bg-background border border-secondary rounded-xl text-xs text-foreground focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1">QUESTION OR TITLE</label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="What would you like to ask or share?"
                  className="w-full p-3 bg-background border border-secondary rounded-xl text-xs text-foreground focus:outline-none focus:border-accent"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1">DETAILS</label>
                <textarea
                  rows={4}
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="Provide details for local hosts and travelers..."
                  className="w-full p-3 bg-background border border-secondary rounded-xl text-xs text-foreground focus:outline-none focus:border-accent"
                  required
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setNewPostModalOpen(false)}
                  className="flex-1 py-3 bg-background border border-secondary text-foreground text-xs font-bold rounded-xl"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-accent hover:bg-accent-hover text-foreground text-xs font-bold rounded-xl shadow-sm"
                >
                  POST DISCUSSION
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
