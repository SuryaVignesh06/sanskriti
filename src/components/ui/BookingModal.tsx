import { useState } from 'react';
import { CulturalExperience } from '@/lib/sanskritiData';
import { X, Calendar, Users, CheckCircle, CreditCard, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';

interface BookingModalProps {
  experience: CulturalExperience;
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ experience, isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [selectedDate, setSelectedDate] = useState<string>(experience.upcomingDates[0] || 'March 15, 2026');
  const [guestsCount, setGuestsCount] = useState<number>(2);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const totalPrice = experience.priceINR * guestsCount;
  const platformFee = Math.round(totalPrice * 0.05);
  const grandTotal = totalPrice + platformFee;

  const handleNext = () => {
    if (step === 4) {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setStep(5);
      }, 1200);
    } else if (step < 5) {
      setStep((prev) => (prev + 1) as any);
    }
  };

  const handleBack = () => {
    if (step > 1 && step < 5) {
      setStep((prev) => (prev - 1) as any);
    }
  };

  const resetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-background border border-secondary rounded-xl w-full max-w-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-secondary bg-surface">
          <div>
            <span className="font-heading text-xs text-accent-dark tracking-widest uppercase">
              STEP 0{step} OF 05
            </span>
            <h3 className="font-heading text-xl text-foreground">
              {step === 1 && 'SELECT EXPERIENCE DATE'}
              {step === 2 && 'SELECT NUMBER OF GUESTS'}
              {step === 3 && 'REVIEW YOUR BOOKING'}
              {step === 4 && 'SECURE PAYMENT'}
              {step === 5 && 'BOOKING CONFIRMED'}
            </h3>
          </div>
          <button onClick={resetAndClose} className="p-1 text-muted hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-secondary h-1">
          <div
            className="bg-accent h-1 transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-6">
          {/* STEP 1: DATE */}
          {step === 1 && (
            <div className="space-y-4">
              <p className="font-paragraph text-sm text-muted">
                Choose from available dates hosted by verified Cultural Ambassador for {experience.title}:
              </p>
              <div className="space-y-2">
                {experience.upcomingDates.map((dateStr) => (
                  <button
                    key={dateStr}
                    onClick={() => setSelectedDate(dateStr)}
                    className={`w-full flex items-center justify-between p-4 rounded-lg border font-paragraph text-sm transition-all ${
                      selectedDate === dateStr
                        ? 'border-accent bg-accent/10 text-foreground font-semibold shadow-sm'
                        : 'border-secondary bg-surface text-muted hover:border-accent/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-4 h-4 text-accent-dark" />
                      <span>{dateStr}</span>
                    </div>
                    <span className="text-xs bg-surface px-2 py-1 border border-secondary rounded">Available</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: GUESTS */}
          {step === 2 && (
            <div className="space-y-6">
              <p className="font-paragraph text-sm text-muted">
                Select how many travelers will participate in this authentic cultural session ({experience.groupSize}):
              </p>
              <div className="flex items-center justify-between p-6 bg-surface border border-secondary rounded-lg">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-accent-dark" />
                  <div>
                    <h5 className="font-paragraph font-medium text-foreground">Travelers</h5>
                    <p className="font-paragraph text-xs text-muted">₹{experience.priceINR} per guest</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))}
                    className="w-9 h-9 border border-secondary rounded-lg font-paragraph text-lg font-semibold hover:bg-secondary flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="font-heading text-2xl text-foreground w-6 text-center">{guestsCount}</span>
                  <button
                    onClick={() => setGuestsCount(Math.min(8, guestsCount + 1))}
                    className="w-9 h-9 border border-secondary rounded-lg font-paragraph text-lg font-semibold hover:bg-secondary flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="p-4 bg-accent/10 border border-accent/30 rounded-lg text-xs font-paragraph text-foreground">
                Small group guarantee: Keeps the experience personal, authentic, and human-centered.
              </div>
            </div>
          )}

          {/* STEP 3: REVIEW */}
          {step === 3 && (
            <div className="space-y-4 font-paragraph">
              <div className="flex space-x-4 p-3 bg-surface border border-secondary rounded-lg">
                <img src={experience.image} alt={experience.title} className="w-20 h-20 rounded-md object-cover" />
                <div>
                  <h4 className="font-heading text-lg text-foreground">{experience.title}</h4>
                  <p className="text-xs text-muted mt-1">{experience.location} · {selectedDate}</p>
                  <p className="text-xs text-muted mt-1">Duration: {experience.duration}</p>
                </div>
              </div>

              <div className="p-4 bg-surface border border-secondary rounded-lg space-y-2 text-xs">
                <div className="flex justify-between text-muted">
                  <span>₹{experience.priceINR} × {guestsCount} guests</span>
                  <span className="text-foreground font-medium">₹{totalPrice}</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>Verified Ambassador Platform Fee (5%)</span>
                  <span className="text-foreground font-medium">₹{platformFee}</span>
                </div>
                <div className="border-t border-secondary pt-2 flex justify-between font-heading text-base text-foreground">
                  <span>TOTAL AMOUNT</span>
                  <span className="text-accent-dark font-bold">₹{grandTotal}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-xs text-muted">
                <ShieldCheck className="w-4 h-4 text-accent-dark" />
                <span>Free cancellation up to 48 hours before experience start time.</span>
              </div>
            </div>
          )}

          {/* STEP 4: PAYMENT */}
          {step === 4 && (
            <div className="space-y-4 font-paragraph">
              <div className="p-4 bg-surface border border-secondary rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-muted">PAYMENT METHOD</span>
                  <div className="flex space-x-2 text-xs text-muted">
                    <CreditCard className="w-4 h-4" />
                    <span>UPI / Card / Netbanking</span>
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="Cardholder Name / UPI ID"
                  defaultValue="Demo Traveler"
                  className="w-full p-3 bg-background border border-secondary rounded-lg text-sm text-foreground focus:outline-none focus:border-accent"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Card Number / VPA"
                    defaultValue="4532 •••• •••• 8892"
                    className="w-full p-3 bg-background border border-secondary rounded-lg text-sm text-foreground focus:outline-none focus:border-accent"
                  />
                  <input
                    type="text"
                    placeholder="MM/YY"
                    defaultValue="09/28"
                    className="w-full p-3 bg-background border border-secondary rounded-lg text-sm text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center text-sm font-heading">
                <span className="text-muted">TOTAL TO PAY:</span>
                <span className="text-2xl text-accent-dark">₹{grandTotal}</span>
              </div>
            </div>
          )}

          {/* STEP 5: CONFIRMATION */}
          {step === 5 && (
            <div className="py-6 text-center space-y-4 font-paragraph">
              <div className="w-16 h-16 bg-accent/20 border border-accent rounded-full flex items-center justify-center mx-auto text-accent-dark">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="font-heading text-3xl text-foreground">YOU ARE GOING TO {experience.location.toUpperCase()}!</h3>
              <p className="text-sm text-muted max-w-md mx-auto">
                Your booking confirmation for <strong>{experience.title}</strong> on <strong>{selectedDate}</strong> for {guestsCount} guests has been confirmed.
              </p>

              <div className="p-4 bg-surface border border-secondary rounded-lg text-left text-xs space-y-2 max-w-md mx-auto">
                <h5 className="font-heading text-sm text-foreground">NEXT STEPS FOR YOUR EXPERIENCE:</h5>
                <ul className="list-disc list-inside text-muted space-y-1">
                  <li>Host contact details have been sent to your profile messages.</li>
                  <li>Review cultural etiquette guidance on the experience detail page.</li>
                  <li>Bring your booking reference: <strong>SAN-{Math.floor(100000 + Math.random() * 900000)}</strong></li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-secondary bg-surface">
          {step > 1 && step < 5 ? (
            <button
              onClick={handleBack}
              disabled={isProcessing}
              className="flex items-center space-x-1 px-4 py-2 border border-secondary rounded-lg font-paragraph text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              BACK
            </button>
          ) : <div />}

          {step < 5 ? (
            <button
              onClick={handleNext}
              disabled={isProcessing}
              className="flex items-center space-x-2 px-6 py-2.5 bg-accent hover:bg-accent-hover font-paragraph text-xs font-bold tracking-wider text-foreground rounded-lg transition-all shadow-md"
            >
              <span>{isProcessing ? 'PROCESSING...' : step === 4 ? `PAY ₹${grandTotal}` : 'CONTINUE'}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          ) : (
            <button
              onClick={resetAndClose}
              className="w-full py-3 bg-accent hover:bg-accent-hover font-paragraph text-xs font-bold tracking-wider text-foreground rounded-lg transition-all shadow-md"
            >
              VIEW MY PROFILE TRIPS
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
