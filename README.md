### crud-reactjs

- import nodejs_database.sql in mysql database
- how to running backend
  - open terminal `cd backend`
  - backend `node app` or `nodemon app`
- how to running frontend
  - open terminal `cd frontend`
  - frontend `npm start`

### info

- node@16.16.0
- npm@8.11.0

### backend node modules

```json
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "mysql2": "^2.3.3",
    "sequelize": "^6.26.0"
}
```

### frontend node modules

```json
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.2.1",
    "bulma": "^0.9.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.4.4",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  }
```

### database

- mysql

### how to running

- cd backend

  - node app.js or nodemon app
  - use port 5000

- cd frontend
  - npm start
  - port 3000

### method and parameter

<table>
    <tr>
        <th>name</th>
        <th>method</th>
        <th>parameters</th>
        <th>url</th>
    </tr>
    <tr>
        <td>get all data users</td>
        <td>GET</td>
        <td>-</td>
        <td>http://localhost:5000/users</td>
    </tr>
    <tr>
        <td>get data users by id</td>
        <td>GET</td>
        <td>id</td>
        <td>http://localhost:5000/users/id</td>
    </tr>
    <tr>
        <td>create data users</td>
        <td>POST</td>
        <td>name,email,gender</td>
        <td>http://localhost:5000/users</td>
    </tr>
    <tr>
        <td>update data users by id</td>
        <td>PATCH</td>
        <td>id,name,email,gender</td>
        <td>http://localhost:5000/users/id</td>
    </tr>
    <tr>
        <td>delete data users by id</td>
        <td>DELETE</td>
        <td>id</td>
        <td>http://localhost:5000/users/id</td>
    </tr>
</table>
