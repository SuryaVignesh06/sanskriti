import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { MemberProtectedRoute } from '@/components/ui/member-protected-route';

// Import pages
import Layout from '@/components/Layout';
import HomePage from '@/components/pages/HomePage';
import ExplorePage from '@/components/pages/ExplorePage';
import ExperienceDetailPage from '@/components/pages/ExperienceDetailPage';
import StatesPage from '@/components/pages/StatesPage';
import StateCulturePage from '@/components/pages/StateCulturePage';
import FestivalsPage from '@/components/pages/FestivalsPage';
import FestivalDetailPage from '@/components/pages/FestivalDetailPage';
import LearnOnlinePage from '@/components/pages/LearnOnlinePage';
import QuizzesPage from '@/components/pages/QuizzesPage';
import QuizDetailPage from '@/components/pages/QuizDetailPage';
import AmbassadorProfilePage from '@/components/pages/AmbassadorProfilePage';
import BecomeAmbassadorPage from '@/components/pages/BecomeAmbassadorPage';
import StoriesPage from '@/components/pages/StoriesPage';
import ProfilePage from '@/components/pages/ProfilePage';
import AboutPage from '@/components/pages/AboutPage';
import LoginPage from '@/components/pages/LoginPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "explore",
        element: <ExplorePage />,
      },
      {
        path: "experience/:id",
        element: <ExperienceDetailPage />,
      },
      {
        path: "states",
        element: <StatesPage />,
      },
      {
        path: "state/:stateKey",
        element: <StateCulturePage />,
      },
      {
        path: "festivals",
        element: <FestivalsPage />,
      },
      {
        path: "festival/:id",
        element: <FestivalDetailPage />,
      },
      {
        path: "learn-online",
        element: <LearnOnlinePage />,
      },
      {
        path: "quizzes",
        element: <QuizzesPage />,
      },
      {
        path: "quiz/:quizId",
        element: <QuizDetailPage />,
      },
      {
        path: "ambassador/:id",
        element: <AmbassadorProfilePage />,
      },
      {
        path: "become-ambassador",
        element: <BecomeAmbassadorPage />,
      },
      {
        path: "stories",
        element: <StoriesPage />,
      },
      {
        path: "profile",
        element: (
          <MemberProtectedRoute messageToSignIn="Sign in to access your profile dashboard and quiz badges">
            <ProfilePage />
          </MemberProtectedRoute>
        ),
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: (import.meta as any).env?.BASE_NAME || '/',
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
