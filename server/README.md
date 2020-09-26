
## Backend:
### Schema:
```
1. student
2. professor (admin by default?)
3. user (guest/website admin/random)
4. course (w/ subschema for comments referencing students)
5. quiz (referencing course and prof)
```
### Routes

|Endpoints                |Description                                                                    |Methods               |
|-------------------------|-------------------------------------------------------------------------------|----------------------|
|/                        |The default page                                                               |GET                   |
|/users                   |Endpoint for the users registered on the website                               |GET DELETE            |
|/users/:userId           |Details of specified user                                                      |GET PUT DELETE        |
|/users/signup            |Endpoint for registeration (returns JWT)                                       |POST                  |
|/users/login             |Endpoint for logging in (returns JWT)                                          |POST                  |
|/users/logout            |[!] At present just redirects to `/`. Can be used to invalidate/blacklist JWT  |GET                   |
|/professors              |List of users current professor                                                |GET POST DELETE       |
|/professors/:professorId |Details of specified professor                                                 |GET PUT DELETE        |
|/courses                 |List of all courses in database                                                |GET POST DELETE       |
|/courses/:courseId       |Details of specified course                                                    |GET PUT DELETE        |
|/students                |List of all student in database                                                |GET POST DELETE       |
|/students/:studentId     |Details of specified student                                                   |GET PUT DELETE        |

## Frontend
???

## TODO:
1. use react forms for quiz
2. video encoding stuff
3. profile picture upload stuff
???
