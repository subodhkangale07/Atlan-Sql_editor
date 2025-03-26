import React from 'react';

const CodeEditor = ({ query, setQuery, executeQuery, clearQuery, isLoading }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      executeQuery();
    }
  };

  return (
    <div className="code-editor">
      <div className="editor-header">
        <h3>SQL Editor</h3>
        <div className="editor-actions">
          <button 
            onClick={executeQuery} 
            disabled={isLoading}
            className="run-button"
          >
            {isLoading ? 'Running...' : 'Run Query (Ctrl+Enter)'}
          </button>
          <button onClick={clearQuery} className="clear-button">
            Clear
          </button>
        </div>
      </div>
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter your SQL query here..."
        disabled={isLoading}
      />
    </div>
  );
};

export default CodeEditor;