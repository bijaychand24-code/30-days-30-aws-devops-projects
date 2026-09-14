# Day 03 — Static Website Hosting on Amazon S3 ☁️🚀

## 📌 Project Overview

In this project, I hosted a static website using Amazon S3.

The website files were uploaded to an Amazon S3 bucket and configured for static website hosting.

This project helped me understand how AWS S3 can be used to store and serve static website files.

## 🛠️ Technologies Used

- Amazon S3
- HTML5
- CSS3
- Git
- GitHub
- AWS Management Console

## 🔄 Deployment Workflow

Local Website → Git → GitHub → Amazon S3 → Static Website → Live Website

## 📂 Project Structure

Day-03-S3-Static-Website/
│
├── README.md
├── src/
│   ├── index.html
│   └── style.css
│
└── screenshots/

## ☁️ Amazon S3 Setup

1. Open the AWS Management Console.
2. Go to Amazon S3.
3. Create a new S3 bucket.
4. Select an AWS Region.
5. Upload the website files.
6. Enable Static Website Hosting.
7. Configure the required bucket access settings.
8. Open the S3 website endpoint.

## 📤 Upload Website Files

The following files were uploaded to the S3 bucket:

- index.html
- style.css

## 🌐 Static Website Hosting

Amazon S3 was configured to host the static website.

The website uses:

- `index.html` as the index document
- `style.css` for website styling

## 🔐 Access Configuration

The required S3 access configuration was applied so that the website could be accessed through the S3 website endpoint.

## 🚀 Deployment Steps

### Step 1 — Create S3 Bucket

Create a unique S3 bucket in the AWS Management Console.

### Step 2 — Upload Files

Upload:

```text
index.html
style.css
