# Day 02 — Portfolio Website Deployment on AWS EC2 🚀

## 📌 Project Overview

This project is a personal portfolio website deployed on an AWS EC2
instance using Ubuntu Linux and Nginx.

The source code is maintained on GitHub and deployed to an EC2 server.

## 🛠️ Technologies Used

- AWS EC2
- Ubuntu Linux
- Nginx
- Git
- GitHub
- HTML5
- CSS3
- JavaScript

## 🔄 Deployment Workflow

```text
Local Portfolio
      ↓
    Git
      ↓
   GitHub
      ↓
   AWS EC2
      ↓
 Ubuntu Linux
      ↓
    Nginx
      ↓
 Live Portfolio Website

## Day-02-Portfolio-Deployment/
│
├── README.md
├── src/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── screenshots/
# Day 02 — Portfolio Website Deployment on AWS EC2 🚀

## 📌 Project Overview

This project is a personal portfolio website deployed on an AWS EC2 instance using Ubuntu Linux and Nginx.

The source code is maintained on GitHub and deployed to an EC2 server.

## 🛠️ Technologies Used

- AWS EC2
- Ubuntu Linux
- Nginx
- Git
- GitHub
- HTML5
- CSS3
- JavaScript

## 🔄 Deployment Workflow

Local Portfolio → Git → GitHub → AWS EC2 → Ubuntu Linux → Nginx → Live Website

## 📂 Project Structure

Day-02-Portfolio-Deployment/
│
├── README.md
├── src/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── screenshots/

## ☁️ AWS EC2 Setup

1. Launch an Ubuntu EC2 instance.
2. Configure the Security Group.
3. Allow SSH on Port 22.
4. Allow HTTP on Port 80.
5. Connect to the EC2 instance using SSH.

## 🖥️ Nginx Installation

```bash
sudo apt update
sudo apt install nginx git -y
