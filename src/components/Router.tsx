import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import { MemberProtectedRoute } from '@/components/ui/member-protected-route';

// Import pages
import Layout from '@/components/Layout';
import HomePage from '@/components/pages/HomePage';
import LoginPage from '@/components/pages/LoginPage';
import StatesPage from '@/components/pages/StatesPage';
import StateCulturePage from '@/components/pages/StateCulturePage';
import DanceDetailsPage from '@/components/pages/DanceDetailsPage';
import ProfilePage from '@/components/pages/ProfilePage';
import AboutPage from '@/components/pages/AboutPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />, // MIXED ROUTE: Shows different content for authenticated vs anonymous users
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "states",
        element: (
          <MemberProtectedRoute messageToSignIn="Sign in to explore India's cultural heritage">
            <StatesPage />
          </MemberProtectedRoute>
        ),
      },
      {
        path: "state/:stateKey",
        element: (
          <MemberProtectedRoute messageToSignIn="Sign in to explore state culture">
            <StateCulturePage />
          </MemberProtectedRoute>
        ),
      },
      {
        path: "dance/:danceId",
        element: (
          <MemberProtectedRoute messageToSignIn="Sign in to explore dance details">
            <DanceDetailsPage />
          </MemberProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <MemberProtectedRoute messageToSignIn="Sign in to access your profile">
            <ProfilePage />
          </MemberProtectedRoute>
        ),
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <ScrollToTop />
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
