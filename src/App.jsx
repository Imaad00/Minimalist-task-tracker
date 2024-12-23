import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './pages/Home';
import "./styles.scss";
import Archive from './pages/Archive';
import SettingsModal from './components/SettingsModal';
import { useState } from 'react';

function App() {
  const [settings, setSettings] = useState(
    JSON.parse(window.localStorage.getItem("my-minimalistic-tracker-settings")) || {
      confirmations: true,
      askForBulkReactivatingConfirmation: true,
      askForReactivatingConfirmation: true,
			askForBulkDeletingConfirmation: true,
			askForBulkCompletingConfirmation: true,
			askForDeletingConfirmation: true,
			askForBulkArchivingConfirmation: true,
			askForArchivingConfirmation: true,
			askForBulkUnarchivingConfirmation: true,
			askForUnarchivingConfirmation: true,
      askForEditingConfirmation: true,
      askForSwitchDarkMode: true,
		}
  );
document.body.style.background = settings.askForSwitchDarkMode ? '#f5f5f5' :'#212529';

  return (
    <Router>
      <span className='vh-100'>
        <SettingsModal settings={settings} setSettings={setSettings}/>
        <Header/>
        <Routes>
          <Route path="/" exact element={<Home settings={settings} setSettings={setSettings}/>} />
          <Route path="/archive" element={<Archive settings={settings} setSettings={setSettings}/>} />
        </Routes>
        <Footer settings={settings}/>
      </span>
    </Router>
  );
}

export default App;