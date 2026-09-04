import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from '@/components/Router';
import "@/styles/global.css";

// Assuming @wix/wix-vibe-plugins styles were removed or we keep them if we still have the packages
// If wix packages were removed, we shouldn't import them. I'll omit them for now.
// import "@wix/wix-vibe-plugins/plugins-vars.css";
// import "@wix/wix-vibe-plugins/plugins-theme.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
