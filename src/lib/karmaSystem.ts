export interface KarmaBadge {
  id: string;
  name: string;
  description: string;
  icon: string;
  minPoints: number;
}

export const KARMA_BADGES: KarmaBadge[] = [
  { id: 'seeker', name: 'Cultural Seeker', description: 'Began exploring the living traditions of India', icon: '🌱', minPoints: 0 },
  { id: 'explorer', name: 'Heritage Explorer', description: 'Earned 100+ Karma points discovering Indian states & arts', icon: '🏛️', minPoints: 100 },
  { id: 'enthusiast', name: 'Artisan Enthusiast', description: 'Earned 300+ Karma points participating in quizzes & classes', icon: '🎨', minPoints: 300 },
  { id: 'scholar', name: 'Sanskriti Scholar', description: 'Earned 600+ Karma points with high mastery across Indian culture', icon: '📜', minPoints: 600 },
  { id: 'guardian', name: 'Culture Guardian', description: 'Earned 1000+ Karma points helping preserve living Indian heritage', icon: '👑', minPoints: 1000 },
];

const KARMA_STORAGE_KEY = 'sanskriti_user_karma_v1';

export function getKarmaPoints(): number {
  try {
    const stored = localStorage.getItem(KARMA_STORAGE_KEY);
    return stored ? parseInt(stored, 10) || 150 : 150; // default initial points for welcoming new user
  } catch (e) {
    return 150;
  }
}

export function addKarmaPoints(pointsToAdd: number, reason?: string): number {
  const current = getKarmaPoints();
  const next = current + pointsToAdd;
  try {
    localStorage.setItem(KARMA_STORAGE_KEY, next.toString());
    // Dispatch custom window event so UI badges update in real-time
    window.dispatchEvent(new CustomEvent('karmaUpdated', { detail: { points: next, added: pointsToAdd, reason } }));
  } catch (e) {
    // fallback
  }
  return next;
}

export function getUserBadge(points: number): KarmaBadge {
  const sorted = [...KARMA_BADGES].sort((a, b) => b.minPoints - a.minPoints);
  return sorted.find((b) => points >= b.minPoints) || KARMA_BADGES[0];
}
