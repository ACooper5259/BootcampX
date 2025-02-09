SELECT cohorts.name AS cohort_name, count(students.id) AS student_count
FROM cohorts 
JOIN students 
ON students.cohort_id = cohorts.id
GROUP by cohorts.name
HAVING count (students.id) >= 18
ORDER BY student_count;
