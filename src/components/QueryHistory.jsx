import React from 'react';

const QueryHistory = ({ history, onQuerySelect }) => {
  return (
    <div className="query-history">
      <h3>Query History</h3>
      {history.length === 0 ? (
        <p>No queries executed yet</p>
      ) : (
        <ul>
          {history.map((item, index) => (
            <li key={index} onClick={() => onQuerySelect(item.query)}>
              <div className="query-text">{item.query.substring(0, 50)}{item.query.length > 50 ? '...' : ''}</div>
              <div className="query-meta">
                <span>{new Date(item.timestamp).toLocaleTimeString()}</span>
                <span>{item.executionTime.toFixed(2)}ms</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QueryHistory;