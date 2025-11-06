# How to Run this Repo's Code (Frontend + Backend)

This project is a **MERN (MongoDB, Express, React, Node.js)** based web application that includes both **frontend (client)** and **backend (server)** parts.  
Follow the steps below to download, install, and run the complete project successfully.

---

## Step 1: Download the Code

a. Click on the **"Code"** button at the top of this repository.  
b. Click on **"Download ZIP"** to download the project files.

---

## Step 2: Extract the Code Files

a. Locate the downloaded ZIP file in your computer’s "Downloads" folder.  
b. Right-click on the ZIP file and click on **"Extract Here"**.  
c. After extraction, a new folder will be created with the same name as the downloaded file.  
d. We will use this extracted folder in the next steps.

---

## Step 3: Open the Project in VS Code

a. Double-click on the extracted folder.  
b. Right-click inside the folder and select **"Open with VS Code"**.  
c. Once VS Code is opened, make sure you can see both folders named **client** and **server**.

---

## Step 4: Install Frontend Dependencies

a. In VS Code, open a new terminal window.  
b. Navigate to the **client** folder by typing the command below and pressing Enter:

c. Type the command below to install all required packages:


---

## Step 5: Run the Frontend (React App)

a. After installing, type the command below to start the React development server:
npm run dev


b. If successful, a message will appear in the terminal showing a **local URL**, something like:


http://localhost:5173


c. Copy this URL, open it in your web browser, and you will see the frontend of the project running.

---

## Step 6: Install Backend Dependencies

a. Open another terminal window in VS Code.  
b. Navigate to the **server** folder by typing:

cd server


c. Type the command below to install backend dependencies:


npm install


---

## Step 7: Setup Environment File for Backend

a. Inside the **server** folder, create a new file named `.env`  
b. Add the following lines to this file:
MONGO_URI=mongodb://localhost:27017/myDBTest
JWT_SECRET=mysecretkey
PORT=5000


📝 Note:  
- Make sure **MongoDB** is installed on your system.  
- You can open MongoDB Compass to confirm your database connection.

---

## Step 8: Run the Backend Server

a. In the same **server** terminal window, type the following command:

npm start

or if you have **nodemon** installed:

nodemon index.js


b. If successful, you will see the following messages:

Connected to MongoDB
Server running on port 5000


---

## Step 9: Connect Frontend and Backend

- Keep both terminals **running** (Frontend + Backend).  
- The frontend (React) will communicate with the backend (Node.js + Express) through APIs.  
- When you register or log in, the data will be stored in MongoDB.

---

## Step 10: View the Output

You can now open your browser and view the complete working project.

- Frontend URL:  

http://localhost:5173


- Backend API runs on:  


http://localhost:5000


---

## Project Overview

- **Frontend:** React.js (Vite)  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT (JSON Web Token)  
- **Main Features:**  
- User Registration  
- Login & Authentication  
- Dashboard Page  
- Recipe Search Functionality  
- Responsive User Interface  

---

---

## Additional Notes

- Ensure MongoDB service is running before starting the backend.  
- If you face any port errors, stop previous terminals and restart them.  
- The backend must run first for proper API connection with the frontend.

---

## Author

**AWD-B (062-151)**  
GitHub Repository: [https://github.com/AWD-B/login-system-062-151](https://github.com/AWD-B/login-system-062-151)



