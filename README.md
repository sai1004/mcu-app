Coding Assignment
#Phase 1 — APIs
Build a RESTful API app that lets you manage companies and users. The company/user
data should to be stored in a database. The preferred tech stack is Node Express, MySQL,
but you are free to choose the stack you love.

> Company Fields

-   Company Name
-   Company Address
-   Coordinates (latlong based on company address, fetched dynamically)

    > User Fields

-   First name
-   Last name
-   Email
-   Designation
-   Date of Birth
-   Active (Boolean)

Endpoints
Companies

1. List companies
2. Get a specific company by ID
3. Create a company
4. Update a company
5. Add / remove users to / from a company
6. Delete a company
   Users
7. List users
8. Get a specific user by ID
9. Create a user
10. Update a user
11. Deactivate a user (sets to active=false)
12. Delete a user
    Note: The endpoints should follow RESTful resource naming conventions, relevant HTTP
    verbs, handle status codes and emit JSON.

#Phase 2 — UI
Build a rich, UI-friendly web app on top of your REST APIs to manage companies and users
from the browser. The preferred front-end stack is React, but you are free to choose the
stack you love.
Operations Supported 13. Create and manage companies 14. On the company detail page, show the company address plotted on the map based
on your stored coordinates 15. Create and manage users under companies 16. Migrating a user to another company
