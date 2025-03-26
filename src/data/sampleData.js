export const sampleQueries = [
    {
      id: 'q1',
      name: 'Select all employees',
      description: 'Retrieves all records from the employees table',
      query: 'SELECT * FROM employees;'
    },
    {
      id: 'q2',
      name: 'Count employees by department',
      description: 'Groups employees by department and counts them',
      query: 'SELECT department, COUNT(*) as employee_count FROM employees GROUP BY department;'
    },
    {
      id: 'q3',
      name: 'High salary employees',
      description: 'Finds employees with salary above 100,000',
      query: 'SELECT name, salary FROM employees WHERE salary > 100000 ORDER BY salary DESC;'
    },
    {
      id: 'q4',
      name: 'Department budgets',
      description: 'Joins employees and departments to calculate total salary cost per department',
      query: 'SELECT d.name, SUM(e.salary) as total_salary, d.budget FROM departments d JOIN employees e ON d.name = e.department GROUP BY d.name, d.budget;'
    },
    {
      id: 'q5',
      name: 'Recent hires',
      description: 'Finds employees hired in the last 6 months',
      query: "SELECT name, department, hire_date FROM employees WHERE hire_date > DATE_SUB(CURRENT_DATE(), INTERVAL 6 MONTH);"
    }
  ];
  
  export const sampleResults = {
    q1: {
      columns: ['id', 'name', 'department', 'salary', 'hire_date'],
      rows: [
        [1, 'John Smith', 'Engineering', 95000, '2020-05-15'],
        [2, 'Jane Doe', 'Marketing', 88000, '2019-11-20'],
        [3, 'Robert Johnson', 'Engineering', 110000, '2018-03-10'],
        [4, 'Emily Davis', 'HR', 75000, '2021-01-05'],
        [5, 'Michael Brown', 'Marketing', 92000, '2020-08-22']
      ]
    },
    q2: {
      columns: ['department', 'employee_count'],
      rows: [
        ['Engineering', 2],
        ['Marketing', 2],
        ['HR', 1]
      ]
    },
    q3: {
      columns: ['name', 'salary'],
      rows: [
        ['Robert Johnson', 110000],
        ['John Smith', 95000],
        ['Michael Brown', 92000],
        ['Jane Doe', 88000]
      ]
    },
    q4: {
      columns: ['name', 'total_salary', 'budget'],
      rows: [
        ['Engineering', 205000, 500000],
        ['Marketing', 180000, 300000],
        ['HR', 75000, 150000]
      ]
    },
    q5: {
      columns: ['name', 'department', 'hire_date'],
      rows: [
        ['Emily Davis', 'HR', '2021-01-05'],
        ['Michael Brown', 'Marketing', '2020-08-22'],
        ['John Smith', 'Engineering', '2020-05-15']
      ]
    },
    default: {
      columns: ['id', 'name', 'value'],
      rows: [
        [1, 'Sample Result 1', 123.45],
        [2, 'Sample Result 2', 678.90],
        [3, 'Sample Result 3', 456.78]
      ]
    }
  };