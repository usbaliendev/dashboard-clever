import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import WebFont from "webfontloader";
import { useTheme } from "./theme/useTheme";
import { useSidebar } from "./utils/useSidebar";
import { GlobalStyles, Container } from "./theme/GlobalStyles";

import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";

function App() {
  // Get the selected theme, font list, etc.
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  // Set is sidebar open property to default
  const { isopen, sidebarLoaded } = useSidebar();
  const [selectedSbMode, setSelectedSbMode] = useState(true);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  useEffect(() => {
    setSelectedSbMode(isopen);
  }, [sidebarLoaded]);

  // Load all the fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });

  // Render if the theme is loaded.
  return (
    <Router>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme} isopen={selectedSbMode}>
          <GlobalStyles />
          <Container>
            <Sidebar isopen={setSelectedSbMode} />
            <MainContent />
          </Container>
        </ThemeProvider>
      )}
    </Router>
  );
}

export default App;
