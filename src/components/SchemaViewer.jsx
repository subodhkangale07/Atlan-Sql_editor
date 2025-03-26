import React from 'react';

const SchemaViewer = () => {
  const sampleSchemas = [
    {
      name: 'employees',
      columns: [
        { name: 'id', type: 'INT', description: 'Primary key' },
        { name: 'name', type: 'VARCHAR(100)', description: 'Employee name' },
        { name: 'department', type: 'VARCHAR(50)', description: 'Department name' },
        { name: 'salary', type: 'DECIMAL(10,2)', description: 'Annual salary' },
        { name: 'hire_date', type: 'DATE', description: 'Date of hiring' }
      ]
    },
    {
      name: 'departments',
      columns: [
        { name: 'id', type: 'INT', description: 'Primary key' },
        { name: 'name', type: 'VARCHAR(50)', description: 'Department name' },
        { name: 'location', type: 'VARCHAR(100)', description: 'Office location' },
        { name: 'budget', type: 'DECIMAL(15,2)', description: 'Annual budget' }
      ]
    },
    {
      name: 'projects',
      columns: [
        { name: 'id', type: 'INT', description: 'Primary key' },
        { name: 'name', type: 'VARCHAR(100)', description: 'Project name' },
        { name: 'start_date', type: 'DATE', description: 'Project start date' },
        { name: 'end_date', type: 'DATE', description: 'Project end date' },
        { name: 'manager_id', type: 'INT', description: 'Employee ID of manager' }
      ]
    }
  ];

  return (
    <div className="schema-viewer">
      <h3>Database Schema</h3>
      <div className="schema-tables">
        {sampleSchemas.map((table) => (
          <div key={table.name} className="schema-table">
            <h4>{table.name}</h4>
            <table>
              <thead>
                <tr>
                  <th>Column</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {table.columns.map((column) => (
                  <tr key={`${table.name}-${column.name}`}>
                    <td>{column.name}</td>
                    <td>{column.type}</td>
                    <td>{column.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchemaViewer;