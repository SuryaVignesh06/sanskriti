import React, { useState, useEffect, useCallback, ReactNode } from 'react';
import { MemberActions, MemberContext, MemberState } from '.';
import { getCurrentMember, Member } from '..';

const MEMBER_STORAGE_KEY = 'member-store';

interface MemberProviderProps {
  children: ReactNode;
}

export const MemberProvider: React.FC<MemberProviderProps> = ({ children }) => {
  const [state, setState] = useState<MemberState>(() => {
    let storedMemberData: Member | null = null;
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(MEMBER_STORAGE_KEY);
        if (stored) {
          storedMemberData = JSON.parse(stored).member;
        }
      } catch (error) {
        console.error('Error loading member state from localStorage:', error);
      }
    }
    return {
      member: storedMemberData,
      isAuthenticated: !!storedMemberData,
      isLoading: true,
      error: null,
    };
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(MEMBER_STORAGE_KEY, JSON.stringify(state));
      } catch (error) {
        console.error('Error saving member state:', error);
      }
    }
  }, [state]);

  const updateState = useCallback((updates: Partial<MemberState>) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);

  const actions: MemberActions = {
    loadCurrentMember: useCallback(async () => {
      try {
        updateState({ isLoading: true, error: null });
        const member = await getCurrentMember();
        if (member) {
          updateState({ member, isAuthenticated: true, isLoading: false });
        } else {
          // Keep as is if unauthenticated
          updateState({ isLoading: false });
        }
      } catch (err) {
        updateState({ isLoading: false });
      }
    }, [updateState]),

    login: useCallback(() => {
      // Mock login for JS backend
      updateState({
        member: {
          id: 'mock-user',
          profile: { nickname: 'Sanskriti Explorer' },
          contact: { firstName: 'Explorer' }
        } as any,
        isAuthenticated: true,
        isLoading: false
      });
    }, [updateState]),

    logout: useCallback(() => {
      updateState({
        member: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      });
      localStorage.removeItem(MEMBER_STORAGE_KEY);
    }, [updateState]),

    clearMember: useCallback(() => {
      updateState({
        member: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      });
    }, [updateState]),
  };

  useEffect(() => {
    actions.loadCurrentMember();
  }, [actions.loadCurrentMember]);

  return (
    <MemberContext.Provider value={{ ...state, actions }}>
      {children}
    </MemberContext.Provider>
  );
};
