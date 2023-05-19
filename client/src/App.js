import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { themeSettings } from 'theme';
import Quotes from 'scenes/quotes';
import Layout from 'scenes/layout';
import Dashboard from 'scenes/dashboard';
import Seasons from 'scenes/seasons';
import Screenplay from 'scenes/screenplay';
import ScreenplaySeason from 'scenes/screenplaySeason'
import ScreenplayEpisode from 'scenes/screenplayEpisode';


function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme = {theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout/>}>
              <Route path='/' element={<Navigate to='/dashboard' replace />} />
              <Route path='/dashboard' element={<Dashboard />}/>
              <Route path='/quotes' element={<Quotes />} />
              <Route path='/seasons' element={<Seasons />} />
              <Route path='/screenplay' element={<Screenplay />} />
              <Route path='screenplaySeason' element={<ScreenplaySeason />} />
              <Route path='/screenplayEpisode' element={<ScreenplayEpisode />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
