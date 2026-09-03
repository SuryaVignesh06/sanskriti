import { useMember } from '@/integrations';
import { Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const { actions } = useMember();

  return (
    <div className="bg-background text-foreground font-paragraph min-h-screen py-24 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-6 space-y-8 text-center">
        <div className="w-16 h-16 bg-accent text-foreground rounded-2xl flex items-center justify-center font-heading text-3xl font-bold mx-auto shadow-md">
          S
        </div>

        <div className="space-y-2">
          <h1 className="font-heading text-4xl text-foreground">WELCOME TO SANSKRITI</h1>
          <p className="font-paragraph text-xs text-muted">
            Sign in to unlock authentic experiences, saved trips, live virtual classes, and cultural knowledge badges.
          </p>
        </div>

        <div className="p-8 bg-surface border border-secondary rounded-2xl space-y-6 shadow-sm">
          <div className="space-y-3 text-left text-xs font-paragraph text-muted">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-accent-dark shrink-0" />
              <span>Verified local Cultural Ambassador network</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-accent-dark shrink-0" />
              <span>Access all 28 Indian States & UT heritage pages</span>
            </div>
          </div>

          <button
            onClick={actions.login}
            className="w-full py-4 bg-accent hover:bg-accent-hover text-foreground font-paragraph text-xs font-bold tracking-wider rounded-lg transition-all shadow-md flex items-center justify-center space-x-2 uppercase"
          >
            <span>SIGN IN / SIGN UP FREE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}