// database connection through node postgres
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.connect()

// QUERIES

pool.query(`
SELECT students.id, name, cohort_id
FROM students
LIMIT 5;
`)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));


const cohortName = process.argv[2]
const resultsNumber = process.argv[3]
pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE '%${cohortName}%'
LIMIT ${resultsNumber};
`)
.then(res => {
  res.rows.forEach(student => {
    console.log(`${student.name} has an id of ${student.student_id} and was in the ${student.cohort} cohort`);
  })
});

