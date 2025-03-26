import React from 'react';

const SavedQueries = ({ queries, onQuerySelect }) => {
  return (
    <div className="saved-queries">
      <h3>Sample Queries</h3>
      <select 
        onChange={(e) => onQuerySelect(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>Select a sample query</option>
        {queries.map((query) => (
          <option key={query.id} value={query.query}>
            {query.name}
          </option>
        ))}
      </select>
      
      <div className="query-descriptions">
        {queries.map((query) => (
          <div key={query.id} className="query-description">
            <h4>{query.name}</h4>
            <p>{query.description}</p>
            <button onClick={() => onQuerySelect(query.query)}>
              Use this query
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedQueries;