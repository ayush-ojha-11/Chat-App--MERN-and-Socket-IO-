# Realtime Chat Application

This is a **Realtime Chat Application** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) and **Socket.IO** for real-time communication.

## Features

- User authentication and authorization.
- Real-time messaging with Socket.IO.
- Group chat functionality.
- Responsive design for all devices.
- MongoDB for database management.

## Tech Stack

- **Frontend**: React.js, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-time Communication**: Socket.IO

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ayush-ojha-11/Chat-App.git
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the following:

   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   SOCKET_PORT=your_socket_port
   ```

4. Start the application:

   - Backend:
     ```bash
     cd backend
     npm run dev
     ```
   - Frontend:
     ```bash
     cd frontend
     npm run dev
     ```

5. Open your browser and navigate to `http://localhost:5173`.

## Screenshots

### Login Page

![Login Page](https://github.com/user-attachments/assets/9ecea502-9c34-49cf-a595-0d78f82825b9)

### Home Page

![Home Page](https://github.com/user-attachments/assets/88a2b9d9-12c7-480c-8673-a6595cb4f53b)

### Chat Interface

![Chat Interface](https://github.com/user-attachments/assets/473ff8f7-93eb-4171-ac45-160c780cea16)

## Folder Structure

```
/frontend
  ├── public
  ├── src
        ├── components
        ├── pages
        ├── utils
/backend
  ├── config
  ├── controllers
  ├── models
  ├── routes
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## Contact

For any inquiries, feel free to reach out:

- Email: ayushojha1512@gmail.com
- GitHub: [ayush-ojha-11](https://github.com/ayush-ojha-11)
