SELECT assignments.id AS id, name, day, chapter, count(assistance_requests.*) AS total_requests
FROM assignments
JOIN assistance_requests ON assignments.id = assistance_requests.assignment_id
GROUP By assignments.id
ORDER By total_requests DESC;