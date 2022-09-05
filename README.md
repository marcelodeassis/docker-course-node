# docker-course-node

Simple docker compose project, using Node, MySql and Nginx, for Full Cycle course.

## Instructions
- Clone this repo
- docker-compose up

This should start the 3 containers: Nginx redirecting from external port 80 , to Node running at internal 3000.

Ps.: For Node part I used and  old API project I've made, so:
List persons: /api/person
Add person: /api/person/add/<NAME>