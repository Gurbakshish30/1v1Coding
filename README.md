# 🔥 1v1Coding (Real-Time Coding Battle Platform)

## 🚀 Overview
This project is a **real-time coding battle platform** inspired by platforms like **LeetCode, CodeForces, and Codingame**. It allows users to compete in live coding challenges, get real-time feedback, and rank on leaderboards.

## 🎯 Features

### 1️⃣ User Authentication & Profile Management 🔐
- Secure **JWT-based authentication** for user login.
- User profile management with coding history, ranking, and past battles.

### 2️⃣ Matchmaking System 🎮
- **Ranking-based matchmaking** to pair users of similar skill levels.
- Real-time search and auto-assignment of coding challenges.

### 3️⃣ Real-Time Coding Battle ⚔️
- Integrated **Monaco Editor** (VS Code-like) for a smooth coding experience.
- **WebSockets for real-time updates** (opponent progress, timer sync).
- **Countdown timer** to enforce challenge time limits.

### 4️⃣ Code Evaluation & Winner Selection 🏆
- Code is **compiled and tested** against multiple test cases using **Judge0 API**.
- Automatic **correctness check** and performance evaluation.
- **Winner selection** based on efficiency and correctness.

### 5️⃣ Leaderboard & Ranking System 📊
- **Points-based ranking** to encourage competition.
- **Database updates** after every match, tracking user performance.

### 6️⃣ AI Code Review & Auto-Completion 🤖
- **Efficiency suggestions** for better time and space complexity.
- **Error detection** to help users debug their solutions faster.

## 📜 System Workflow
**Workflow Document & Resources:** [Google Drive Link](https://drive.google.com/file/d/1h8ctn-OMYdeKB9yR800Z7MwG15f-T_sO/view?usp=sharing) 

## ⚙️ Tech Stack
- **Frontend:** React.js, Monaco Editor, WebSockets, GSAP (for animations)
- **Backend:** Node.js, Express.js, JWT Authentication, WebSockets
- **Database:** MongoDB (for user profiles, match history, leaderboard)
- **Code Execution API:** Judge0 API (for real-time code evaluation)
- **Hosting:** Vercel/Netlify (Frontend), AWS/Heroku (Backend)

## 🛠️ Installation & Setup

1️⃣ **Clone the Repository**
```sh
 git clone https://github.com/Gurbakshish30/1v1Coding.git
 cd 1v1Coding
```

2️⃣ **Install Dependencies**
```sh
 npm install
```

3️⃣ **Run the Project**
```sh
 npm run dev
```

4️⃣ **Backend Setup** (Ensure MongoDB and Judge0 API are running)
```sh
 cd backend
 npm install
 npm run dev
```

## 📌 How It Works
1. **User logs in** → Finds a match based on ranking.
2. **Matchmaking system** pairs them with an opponent.
3. **Real-time battle starts** → Both write code in **Monaco Editor**.
4. **Code is submitted** → Evaluated using **Judge0 API**.
5. **Leaderboard updates** → Winner gets points, ranks are updated.
6. **AI review** gives feedback on efficiency and errors.

## 🤝 Contribution
Contributions are welcome! Feel free to submit a pull request. 🚀

---
🌟 **Star this repo if you find it useful!** ⭐

