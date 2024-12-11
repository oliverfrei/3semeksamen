import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // Router placeres her
import App from './App';

// Mantine CSS Imports
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/spotlight/styles.css';

// Import dayjs and set Danish locale
import dayjs from 'dayjs';
import 'dayjs/locale/da';

dayjs.locale('da'); // Set Danish locale globally

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
