import React, { useState, useEffect } from 'react';
import CodeEditor from './components/CodeEditor';
import ResultsTable from './components/ResultsTable';
import QueryHistory from './components/QueryHistory';
import SavedQueries from './components/SavedQueries';
import SchemaViewer from './components/SchemaViewer';
import ThemeToggle from './components/ThemeToggle';
import { sampleQueries, sampleResults } from './data/sampleData';
import './styles/App.css';
import './styles/themes.css';

function App() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [executionTime, setExecutionTime] = useState(0);
  const [queryHistory, setQueryHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  const executeQuery = () => {
    if (!query.trim()) {
      setError('Please enter a query');
      return;
    }

    setIsLoading(true);
    setError(null);
    
    // Simulate query execution delay
    const startTime = performance.now();
    
    setTimeout(() => {
      // Find matching result from sample data
      const matchedQuery = sampleQueries.find(q => q.query.toLowerCase() === query.toLowerCase().trim());
      
      const endTime = performance.now();
      setExecutionTime(endTime - startTime);
      
      if (matchedQuery) {
        setResult(sampleResults[matchedQuery.id]);
      } else {
        // Default result if query doesn't match samples
        setResult(sampleResults.default);
      }
      
      // Add to history
      const historyItem = {
        query,
        timestamp: new Date().toISOString(),
        executionTime: endTime - startTime
      };
      
      setQueryHistory(prev => [historyItem, ...prev.slice(0, 9)]);
      setIsLoading(false);
    }, 500 + Math.random() * 1000); // Random delay between 500-1500ms
  };

  const handleQuerySelect = (selectedQuery) => {
    setQuery(selectedQuery);
    setSelectedQuery(selectedQuery);
  };

  const clearQuery = () => {
    setQuery('');
    setResult(null);
    setError(null);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <header>
        <h1>SQL Query Runner</h1>
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>
      
      <div className="main-content">
        <div className="left-panel">
          <SchemaViewer />
          <SavedQueries 
            queries={sampleQueries} 
            onQuerySelect={handleQuerySelect} 
          />
        </div>
        
        <div className="query-section">
          <CodeEditor 
            query={query} 
            setQuery={setQuery} 
            executeQuery={executeQuery} 
            clearQuery={clearQuery} 
            isLoading={isLoading}
          />
          
          {error && <div className="error-message">{error}</div>}
          
          <div className="results-section">
            {isLoading ? (
              <div className="loading-indicator">
                <div className="spinner"></div>
                <p>Executing query...</p>
              </div>
            ) : (
              <>
                {result && (
                  <>
                    <div className="query-info">
                      <span>Execution time: {executionTime.toFixed(2)}ms</span>
                      <span>Rows returned: {result.rows.length}</span>
                    </div>
                    <ResultsTable data={result} />
                  </>
                )}
              </>
            )}
          </div>
        </div>
        
        <div className="right-panel">
          <QueryHistory 
            history={queryHistory} 
            onQuerySelect={handleQuerySelect} 
          />
        </div>
      </div>
      
      <footer>
        <p>Atlan Frontend Internship Task - 2025</p>
      </footer>
    </div>
  );
}

export default App;