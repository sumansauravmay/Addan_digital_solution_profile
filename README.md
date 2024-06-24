
# Addan Digital Soulution Assignment

## 1. Backend

### Description:

This is an Express.js application with routes for user and profile management, connected to a database.

<hr/>

### Features

- User routes
- Profile routes
- Database connection
- Environment configuration
- CORS support
- DOTENV
- JSON request parsing

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sumansauravmay/Addan_digital_solution_profile.git

   ```

2. Navigate to the project directory:

```bash
   cd Backend
```

3. Install the dependencies:

```bash
   npm install
```

4. Create a `.env` file in the root of the project and add the following variables:

```bash
   PORT=3000
   mongoURL=your-database-connection-string
```

### Usage

1. Start the server:
```bash
   npm start
```

2. Project Structure

```bash
.
├── config
│   └── db.js 
├── models
|     └── user.model.js 
├── middlewares
|     └── user.middlewares.js  
│                      
├── routes
│   ├── user.route.js  
│   └── profile.route.js 
├── .env              
├── .gitignore         
├── package.json       
└── index.js.js          
```
3. Dependencies

```bash
  Express
  mongoose
  nodemon
  jsonwebtoken
  bcrypt
  dotenv
  cors
```

### Contributing
```base
1. Fork the repository
2. Create a new branch (git checkout -b feature-branch)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin feature-branch)
5. Create a new Pull Request
````


# Backend Deployement

```bash
https://addan-digital-solution-profile-1.onrender.com
```



````base
This README file gives a clear overview of your project, including how to set it up, run it, and contribute to it.
````



2. ## Frontend

# Netlify Deployement

```bash
https://zippy-capybara-90a739.netlify.app/
```
