import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './App.css';
import InvestigationForm from './InvestigationForm';
import CompleteInvestigationForm from './CompleteInvestigationForm';

function App() {
  const [generatedText, setGeneratedText] = useState('');
  const [generatedTitle, setGeneratedTitle] = useState('');
  const [generatedUrl, setGeneratedUrl] = useState('');  // Add generatedUrl state
  const [copied, setCopied] = useState(false);
  const [copyType, setCopyType] = useState('');

  const copyToClipboard = (type) => {
    const textToCopy = type === 'title' ? generatedTitle : generatedText;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setCopyType(type);
      setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
    }).catch((err) => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <div className="App">
      <div className="content-container">
        <div className="form-panel">
          <Tabs>
            <TabList>
              <Tab>Incidente</Tab>
              <Tab>Investigación</Tab>
            </TabList>

            <TabPanel>
              <div className="form-container wider-form-container">
                <InvestigationForm 
                  setGeneratedText={setGeneratedText} 
                  setGeneratedTitle={setGeneratedTitle} 
                  setGeneratedUrl={setGeneratedUrl}  // Pass setGeneratedUrl
                />
              </div>
            </TabPanel>

            <TabPanel>
              <div className="form-container">
                <CompleteInvestigationForm 
                  setGeneratedText={setGeneratedText} 
                  setGeneratedTitle={setGeneratedTitle} 
                  setGeneratedUrl={setGeneratedUrl}  // Pass setGeneratedUrl
                />
              </div>
            </TabPanel>
          </Tabs>
        </div>
        <div className="preview-panel">
          <div className="output-container">
            <h2>Preview y Copiar</h2>
            <textarea 
              readOnly 
              className="output-textarea title-textarea" 
              value={generatedTitle} 
              rows={1}
            />

            <textarea 
              readOnly 
              className="output-textarea" 
              value={generatedText} 
            />

            <div className="button-container">
              <button className="btn btn-success" onClick={() => copyToClipboard('title')}>
                {copied && copyType === 'title' ? '¡Título Copiado!' : 'Copiar Título'}
              </button>
              <button className="btn btn-success" onClick={() => copyToClipboard('body')}>
                {copied && copyType === 'body' ? 'Cuerpo Copiado!' : 'Copiar Cuerpo'}
              </button>
              <button 
                className="btn btn-primary" 
                onClick={() => window.open(generatedUrl, '_blank')} // Add Open Post button
                disabled={!generatedUrl} // Disable if no URL is generated
              >
                Abrir Foro
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
