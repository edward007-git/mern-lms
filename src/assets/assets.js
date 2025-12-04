// ---------------------------
// MAIN LOGOS
// ---------------------------
import logo from "../assets/images/logo.png";
import user_icon from "../assets/images/user.png";
import microsoft_logo from "../assets/images/Microsoft_logo_(2012).svg.png";
import walmart_logo from "../assets/images/Walmart_logo_(2008).svg.png" ;
import paypal_logo from "../assets/images/PayPal.svg.png" ;
import adobe_logo from "../assets/images/Adobe_Corporate_logo.svg.png" 
import google_logo from "../assets/images/google-logo-transparent.svg.png" 




export const assets = {
  // logos
  logo,
  user_icon,
  microsoft_logo,
  walmart_logo,
  paypal_logo,
  adobe_logo,
  google_logo
  
};

// full 10-course dataset — Option B (complete long)
export const dummyCourses = [
  {
    "_id": "650a00000000000000000001",
    "courseTitle": "Introduction to JavaScript",
    "courseDescription": "<h2>Learn the Basics of JavaScript</h2><p>Start building interactive web pages using vanilla JavaScript.</p>",
    "coursePrice": 49.99,
    "discount": 20,
    "isPublished": true,
    "educator": "675ac1512100b91a6d9b8b24",
    "enrolledStudents": [
      "user_2q0lXyr02B4Bq6hT0Gvaa5fT9V",
      "user_2q0lXyr02B4Bq6hT0Gvaa5fT9W",
      "user_2qjlgkAqIMpiR2fIWlRzvWkTeE0W"
    ],
    "courseRatings": [
      { "_id": "6773e37360cb0ab974342314", "userId": "user_2qjlgkAqIMpiR2fIWlRzvWkTeE0W", "rating": 5 },
      { "_id": "6773e37360cb0ab974342315", "userId": "user_2q0lXyr02B4Bq6hT0Gvaa5fT9V", "rating": 4 }
    ],
    "courseContent": [
      {
        "chapterId": "c001-ch1",
        "chapterOrder": 1,
        "chapterTitle": "Getting Started with JavaScript",
        "chapterContent": [
          {"lectureId":"c001-ch1-l1","lectureTitle":"What is JavaScript?","lectureDuration":8,"lectureUrl":"https://youtu.be/CBWnBi-awSA","isPreviewFree":true,"lectureOrder":1},
          {"lectureId":"c001-ch1-l2","lectureTitle":"Setup & Tools","lectureDuration":12,"lectureUrl":"https://youtu.be/2Ji-clqUYnA","isPreviewFree":false,"lectureOrder":2},
          {"lectureId":"c001-ch1-l3","lectureTitle":"First Script","lectureDuration":10,"lectureUrl":"https://youtu.be/hdI2bqOjy3c","isPreviewFree":true,"lectureOrder":3},
          {"lectureId":"c001-ch1-l4","lectureTitle":"Console & Debugging","lectureDuration":9,"lectureUrl":"https://youtu.be/0ik6X4DJKCc","isPreviewFree":false,"lectureOrder":4}
        ]
      },
      {
        "chapterId": "c001-ch2",
        "chapterOrder": 2,
        "chapterTitle": "Core Language Concepts",
        "chapterContent": [
          {"lectureId":"c001-ch2-l1","lectureTitle":"Variables & Types","lectureDuration":11,"lectureUrl":"https://youtu.be/W6NZfCO5SIk","isPreviewFree":true,"lectureOrder":1},
          {"lectureId":"c001-ch2-l2","lectureTitle":"Operators & Expressions","lectureDuration":13,"lectureUrl":"https://youtu.be/5fb2aPlgoys","isPreviewFree":false,"lectureOrder":2},
          {"lectureId":"c001-ch2-l3","lectureTitle":"Control Flow","lectureDuration":14,"lectureUrl":"https://youtu.be/ZXhuI8mJt10","isPreviewFree":false,"lectureOrder":3},
          {"lectureId":"c001-ch2-l4","lectureTitle":"Functions & Scope","lectureDuration":16,"lectureUrl":"https://youtu.be/PackzO9z9Jc","isPreviewFree":true,"lectureOrder":4}
        ]
      },
      {
        "chapterId": "c001-ch3",
        "chapterOrder": 3,
        "chapterTitle": "Working with Data",
        "chapterContent": [
          {"lectureId":"c001-ch3-l1","lectureTitle":"Arrays & Objects","lectureDuration":15,"lectureUrl":"https://youtu.be/qoSksQ4s_hg","isPreviewFree":true,"lectureOrder":1},
          {"lectureId":"c001-ch3-l2","lectureTitle":"JSON & Data","lectureDuration":12,"lectureUrl":"https://youtu.be/iiADhChRriM","isPreviewFree":false,"lectureOrder":2},
          {"lectureId":"c001-ch3-l3","lectureTitle":"Destructuring","lectureDuration":9,"lectureUrl":"https://youtu.be/6GGtG6lUq8c","isPreviewFree":false,"lectureOrder":3},
          {"lectureId":"c001-ch3-l4","lectureTitle":"Spread & Rest","lectureDuration":10,"lectureUrl":"https://youtu.be/NIq3qLaHCIs","isPreviewFree":true,"lectureOrder":4}
        ]
      },
      {
        "chapterId": "c001-ch4",
        "chapterOrder": 4,
        "chapterTitle": "DOM & Events",
        "chapterContent": [
          {"lectureId":"c001-ch4-l1","lectureTitle":"DOM Basics","lectureDuration":14,"lectureUrl":"https://youtu.be/0ik6X4DJKCc","isPreviewFree":true,"lectureOrder":1},
          {"lectureId":"c001-ch4-l2","lectureTitle":"Event Handling","lectureDuration":13,"lectureUrl":"https://youtu.be/IrX4VgkNfV8","isPreviewFree":false,"lectureOrder":2},
          {"lectureId":"c001-ch4-l3","lectureTitle":"Forms & Validation","lectureDuration":11,"lectureUrl":"https://youtu.be/5kcn6ILj6C8","isPreviewFree":false,"lectureOrder":3},
          {"lectureId":"c001-ch4-l4","lectureTitle":"DOM Performance Tips","lectureDuration":8,"lectureUrl":"https://youtu.be/Mc7sZgTX9RU","isPreviewFree":true,"lectureOrder":4}
        ]
      },
      {
        "chapterId": "c001-ch5",
        "chapterOrder": 5,
        "chapterTitle": "Advanced Topics & Project",
        "chapterContent": [
          {"lectureId":"c001-ch5-l1","lectureTitle":"Closures & Hoisting","lectureDuration":17,"lectureUrl":"https://youtu.be/-xqJo5VRP4A","isPreviewFree":false,"lectureOrder":1},
          {"lectureId":"c001-ch5-l2","lectureTitle":"Asynchronous JS","lectureDuration":20,"lectureUrl":"https://youtu.be/PoRJizFvM7s","isPreviewFree":true,"lectureOrder":2},
          {"lectureId":"c001-ch5-l3","lectureTitle":"Fetch & AJAX","lectureDuration":15,"lectureUrl":"https://youtu.be/2VbqfY8wzEg","isPreviewFree":false,"lectureOrder":3},
          {"lectureId":"c001-ch5-l4","lectureTitle":"Mini Project: ToDo App","lectureDuration":25,"lectureUrl":"https://youtu.be/EN6Dx22cPRI","isPreviewFree":true,"lectureOrder":4}
        ]
      }
    ],
    "createdAt": "2024-12-17T08:16:53.622Z",
    "updatedAt": "2025-01-02T04:47:44.701Z",
    "__v": 4
  },

  {
    "_id": "650a00000000000000000002",
    "courseTitle": "Python for Beginners",
    "courseDescription": "<h2>Start Coding with Python</h2><p>Learn Python fundamentals and build small projects.</p>",
    "coursePrice": 39.99,
    "discount": 10,
    "isPublished": true,
    "educator": "675ac1512100b91a6d9b8b25",
    "enrolledStudents": [
      "user_3b1Xy9a02B3Ab6cwT1Gbb2fT0A",
      "user_3b1Xy9a02B3Ab6cwT1Gbb2fT0B"
    ],
    "courseRatings": [
      { "_id": "6773e37360cb0ab974342316", "userId": "user_3b1Xy9a02B3Ab6cwT1Gbb2fT0A", "rating": 5 }
    ],
    "courseContent": [
      {
        "chapterId":"c002-ch1","chapterOrder":1,"chapterTitle":"Python Setup & Basics",
        "chapterContent":[
          {"lectureId":"c002-ch1-l1","lectureTitle":"Why Python?","lectureDuration":7,"lectureUrl":"https://youtu.be/rfscVS0vtbw","isPreviewFree":true,"lectureOrder":1},
          {"lectureId":"c002-ch1-l2","lectureTitle":"Install & Setup","lectureDuration":9,"lectureUrl":"https://youtu.be/YYXdXT2l-Gg","isPreviewFree":false,"lectureOrder":2},
          {"lectureId":"c002-ch1-l3","lectureTitle":"Hello World & Scripts","lectureDuration":8,"lectureUrl":"https://youtu.be/_uQrJ0TkZlc","isPreviewFree":true,"lectureOrder":3},
          {"lectureId":"c002-ch1-l4","lectureTitle":"Variables & Types","lectureDuration":11,"lectureUrl":"https://youtu.be/O9N2sXAJF1E","isPreviewFree":false,"lectureOrder":4}
        ]
      },
      {
        "chapterId":"c002-ch2","chapterOrder":2,"chapterTitle":"Control Flow & Data Structures",
        "chapterContent":[
          {"lectureId":"c002-ch2-l1","lectureTitle":"Conditionals & Loops","lectureDuration":12,"lectureUrl":"https://youtu.be/6iF8Xb7Z3wQ","isPreviewFree":true,"lectureOrder":1},
          {"lectureId":"c002-ch2-l2","lectureTitle":"Lists & Tuples","lectureDuration":13,"lectureUrl":"https://youtu.be/HGOBQPFzWKo","isPreviewFree":false,"lectureOrder":2},
          {"lectureId":"c002-ch2-l3","lectureTitle":"Dictionaries & Sets","lectureDuration":10,"lectureUrl":"https://youtu.be/NIq3qLaHCIs","isPreviewFree":true,"lectureOrder":3},
          {"lectureId":"c002-ch2-l4","lectureTitle":"Comprehensions","lectureDuration":9,"lectureUrl":"https://youtu.be/6t3yI0fNvXk","isPreviewFree":false,"lectureOrder":4}
        ]
      },
      {
        "chapterId":"c002-ch3","chapterOrder":3,"chapterTitle":"Functions & Modules",
        "chapterContent":[
          {"lectureId":"c002-ch3-l1","lectureTitle":"Defining Functions","lectureDuration":12,"lectureUrl":"https://youtu.be/eWRfhZUzrAc","isPreviewFree":true,"lectureOrder":1},
          {"lectureId":"c002-ch3-l2","lectureTitle":"Modules & pip","lectureDuration":11,"lectureUrl":"https://youtu.be/CS4cs9xVecg","isPreviewFree":false,"lectureOrder":2},
          {"lectureId":"c002-ch3-l3","lectureTitle":"Error Handling","lectureDuration":10,"lectureUrl":"https://youtu.be/ZhS7f3K7m1I","isPreviewFree":false,"lectureOrder":3},
          {"lectureId":"c002-ch3-l4","lectureTitle":"File IO","lectureDuration":13,"lectureUrl":"https://youtu.be/3wVf7mZ9a5k","isPreviewFree":true,"lectureOrder":4}
        ]
      },
      {
        "chapterId":"c002-ch4","chapterOrder":4,"chapterTitle":"Working with Data",
        "chapterContent":[
          {"lectureId":"c002-ch4-l1","lectureTitle":"CSV & JSON","lectureDuration":12,"lectureUrl":"https://youtu.be/9N6a-VLBa2I","isPreviewFree":true,"lectureOrder":1},
          {"lectureId":"c002-ch4-l2","lectureTitle":"Requests & APIs","lectureDuration":14,"lectureUrl":"https://youtu.be/1aGdR6gB2Z8","isPreviewFree":false,"lectureOrder":2},
          {"lectureId":"c002-ch4-l3","lectureTitle":"Pandas Intro","lectureDuration":18,"lectureUrl":"https://youtu.be/zmdjNSmRXF4","isPreviewFree":false,"lectureOrder":3},
          {"lectureId":"c002-ch4-l4","lectureTitle":"Mini Project","lectureDuration":22,"lectureUrl":"https://youtu.be/0Lt9w-BxKFQ","isPreviewFree":true,"lectureOrder":4}
        ]
      },
      {
        "chapterId":"c002-ch5","chapterOrder":5,"chapterTitle":"Advanced Basics & Next Steps",
        "chapterContent":[
          {"lectureId":"c002-ch5-l1","lectureTitle":"OOP Basics","lectureDuration":16,"lectureUrl":"https://youtu.be/oG7tDq5JYxY","isPreviewFree":false,"lectureOrder":1},
          {"lectureId":"c002-ch5-l2","lectureTitle":"Virtual Envs","lectureDuration":8,"lectureUrl":"https://youtu.be/5Xc8n_qp4wU","isPreviewFree":true,"lectureOrder":2},
          {"lectureId":"c002-ch5-l3","lectureTitle":"Testing & Debugging","lectureDuration":12,"lectureUrl":"https://youtu.be/6tNS--WetLI","isPreviewFree":false,"lectureOrder":3},
          {"lectureId":"c002-ch5-l4","lectureTitle":"Deploying Python Apps","lectureDuration":20,"lectureUrl":"https://youtu.be/1dzZ0c5Zbhg","isPreviewFree":true,"lectureOrder":4}
        ]
      }
    ],
    "createdAt":"2024-12-10T10:12:44.622Z",
    "updatedAt":"2025-01-02T10:00:00.000Z",
    "__v": 3
  },

  {
    "_id": "650a00000000000000000003",
    "courseTitle": "React JS — Complete Guide",
    "courseDescription": "<h2>Build Modern Web Apps with React</h2><p>Comprehensive React course including hooks, routing and state management.</p>",
    "coursePrice": 69.99,
    "discount": 25,
    "isPublished": true,
    "educator": "675ac1512100b91a6d9b8b26",
    "enrolledStudents": ["user_401","user_402","user_403","user_404"],
    "courseRatings": [
      {"_id":"6773e37360cb0ab974342317","userId":"user_401","rating":5},
      {"_id":"6773e37360cb0ab974342318","userId":"user_402","rating":4}
    ],
    "courseContent":[
      {"chapterId":"c003-ch1","chapterOrder":1,"chapterTitle":"React Basics","chapterContent":[
        {"lectureId":"c003-ch1-l1","lectureTitle":"Intro to React & JSX","lectureDuration":9,"lectureUrl":"https://youtu.be/Ke90Tje7VS0","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c003-ch1-l2","lectureTitle":"Components & Props","lectureDuration":12,"lectureUrl":"https://youtu.be/EMfFdv1wosY","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c003-ch1-l3","lectureTitle":"State & Lifecycle","lectureDuration":14,"lectureUrl":"https://youtu.be/DPnqb74Smug","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c003-ch1-l4","lectureTitle":"Handling Events","lectureDuration":10,"lectureUrl":"https://youtu.be/9U3IhLAnSxM","isPreviewFree":true,"lectureOrder":4}
      ]},
      {"chapterId":"c003-ch2","chapterOrder":2,"chapterTitle":"Hooks","chapterContent":[
        {"lectureId":"c003-ch2-l1","lectureTitle":"useState & useEffect","lectureDuration":13,"lectureUrl":"https://youtu.be/F9UC9DY-vIU","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c003-ch2-l2","lectureTitle":"useRef & useMemo","lectureDuration":11,"lectureUrl":"https://youtu.be/0ZJgIjIuY7U","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c003-ch2-l3","lectureTitle":"Custom Hooks","lectureDuration":12,"lectureUrl":"https://youtu.be/kVd2v6b7b0o","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c003-ch2-l4","lectureTitle":"Hook Patterns","lectureDuration":10,"lectureUrl":"https://youtu.be/x0f9q2n1fF8","isPreviewFree":true,"lectureOrder":4}
      ]},
      {"chapterId":"c003-ch3","chapterOrder":3,"chapterTitle":"Routing & State","chapterContent":[
        {"lectureId":"c003-ch3-l1","lectureTitle":"React Router Basics","lectureDuration":9,"lectureUrl":"https://youtu.be/Law7wfdg_ls","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c003-ch3-l2","lectureTitle":"Global State Patterns","lectureDuration":15,"lectureUrl":"https://youtu.be/8oRjPXP2R5g","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c003-ch3-l3","lectureTitle":"Context API","lectureDuration":13,"lectureUrl":"https://youtu.be/5lVQgZzLMHc","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c003-ch3-l4","lectureTitle":"State Management Tools","lectureDuration":16,"lectureUrl":"https://youtu.be/0ZJgIjIuY7U","isPreviewFree":true,"lectureOrder":4}
      ]},
      {"chapterId":"c003-ch4","chapterOrder":4,"chapterTitle":"Data & APIs","chapterContent":[
        {"lectureId":"c003-ch4-l1","lectureTitle":"Fetching Data","lectureDuration":11,"lectureUrl":"https://youtu.be/iaVxn2u7Vww","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c003-ch4-l2","lectureTitle":"Async Patterns","lectureDuration":12,"lectureUrl":"https://youtu.be/PoRJizFvM7s","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c003-ch4-l3","lectureTitle":"Optimistic UI","lectureDuration":10,"lectureUrl":"https://youtu.be/5VbA4k4W2g0","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c003-ch4-l4","lectureTitle":"Testing React Apps","lectureDuration":18,"lectureUrl":"https://youtu.be/1tRLveSyNz8","isPreviewFree":true,"lectureOrder":4}
      ]},
      {"chapterId":"c003-ch5","chapterOrder":5,"chapterTitle":"Build & Deploy","chapterContent":[
        {"lectureId":"c003-ch5-l1","lectureTitle":"Build a Project","lectureDuration":20,"lectureUrl":"https://youtu.be/Ke90Tje7VS0","isPreviewFree":false,"lectureOrder":1},
        {"lectureId":"c003-ch5-l2","lectureTitle":"Performance Optimizations","lectureDuration":14,"lectureUrl":"https://youtu.be/NXdH0ENYnf4","isPreviewFree":true,"lectureOrder":2},
        {"lectureId":"c003-ch5-l3","lectureTitle":"Deploying to Vercel","lectureDuration":12,"lectureUrl":"https://youtu.be/1aGdR6gB2Z8","isPreviewFree":true,"lectureOrder":3},
        {"lectureId":"c003-ch5-l4","lectureTitle":"CI/CD Basics","lectureDuration":13,"lectureUrl":"https://youtu.be/0Lt9w-BxKFQ","isPreviewFree":false,"lectureOrder":4}
      ]}
    ],
    "createdAt":"2024-11-20T14:25:43.742Z",
    "updatedAt":"2025-01-05T09:30:11.101Z",
    "__v": 5
  },

  {
    "_id": "650a00000000000000000004",
    "courseTitle": "Node.js & Express.js Fundamentals",
    "courseDescription":"<h2>Backend Development with Node</h2><p>Build REST APIs using Node and Express with hands-on examples.</p>",
    "coursePrice":54.99,"discount":20,"isPublished":true,
    "educator":"675ac1512100b91a6d9b8b27",
    "enrolledStudents":["user_501","user_502"],
    "courseRatings":[{"_id":"6773e37360cb0ab974342319","userId":"user_501","rating":5}],
    "courseContent":[
      {"chapterId":"c004-ch1","chapterOrder":1,"chapterTitle":"Node Basics","chapterContent":[
        {"lectureId":"c004-ch1-l1","lectureTitle":"What is Node.js?","lectureDuration":8,"lectureUrl":"https://youtu.be/TlB_eWDSMt4","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c004-ch1-l2","lectureTitle":"NPM & Modules","lectureDuration":10,"lectureUrl":"https://youtu.be/1tRLveSyNz8","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c004-ch1-l3","lectureTitle":"Async Patterns","lectureDuration":12,"lectureUrl":"https://youtu.be/5fn3Z0mJ2Y4","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c004-ch1-l4","lectureTitle":"Building CLI Tools","lectureDuration":9,"lectureUrl":"https://youtu.be/qPp2v8S7LwA","isPreviewFree":true,"lectureOrder":4}
      ]},
      {"chapterId":"c004-ch2","chapterOrder":2,"chapterTitle":"Express Core","chapterContent":[
        {"lectureId":"c004-ch2-l1","lectureTitle":"Express App & Routing","lectureDuration":11,"lectureUrl":"https://youtu.be/L72fhGm1tfE","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c004-ch2-l2","lectureTitle":"Middleware","lectureDuration":10,"lectureUrl":"https://youtu.be/Oe421EPjeBE","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c004-ch2-l3","lectureTitle":"Error Handling","lectureDuration":9,"lectureUrl":"https://youtu.be/Y8q0o8uN2nI","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c004-ch2-l4","lectureTitle":"File Uploads","lectureDuration":12,"lectureUrl":"https://youtu.be/2VbqfY8wzEg","isPreviewFree":true,"lectureOrder":4}
      ]},
      {"chapterId":"c004-ch3","chapterOrder":3,"chapterTitle":"Databases & ORMs","chapterContent":[
        {"lectureId":"c004-ch3-l1","lectureTitle":"MongoDB with Mongoose","lectureDuration":14,"lectureUrl":"https://youtu.be/1Q6r2dLkDfs","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c004-ch3-l2","lectureTitle":"Modeling Data","lectureDuration":12,"lectureUrl":"https://youtu.be/2nG8nD8K0i4","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c004-ch3-l3","lectureTitle":"Indexes & Performance","lectureDuration":11,"lectureUrl":"https://youtu.be/0kY1i3Sg0yA","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c004-ch3-l4","lectureTitle":"Transactions","lectureDuration":13,"lectureUrl":"https://youtu.be/4vXc9XWqU_8","isPreviewFree":true,"lectureOrder":4}
      ]},
      {"chapterId":"c004-ch4","chapterOrder":4,"chapterTitle":"Auth & Security","chapterContent":[
        {"lectureId":"c004-ch4-l1","lectureTitle":"Authentication Basics","lectureDuration":10,"lectureUrl":"https://youtu.be/2jqok1q5qgE","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c004-ch4-l2","lectureTitle":"JWT & Sessions","lectureDuration":12,"lectureUrl":"https://youtu.be/7YcW25PHnAA","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c004-ch4-l3","lectureTitle":"Protecting Routes","lectureDuration":9,"lectureUrl":"https://youtu.be/0sOvCWFmrtA","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c004-ch4-l4","lectureTitle":"OWASP Basics","lectureDuration":15,"lectureUrl":"https://youtu.be/3j5zHzs1R5M","isPreviewFree":true,"lectureOrder":4}
      ]},
      {"chapterId":"c004-ch5","chapterOrder":5,"chapterTitle":"Deploy & Maintain","chapterContent":[
        {"lectureId":"c004-ch5-l1","lectureTitle":"Deploy to Heroku","lectureDuration":11,"lectureUrl":"https://youtu.be/71wSzpLyW9k","isPreviewFree":false,"lectureOrder":1},
        {"lectureId":"c004-ch5-l2","lectureTitle":"Logging & Monitoring","lectureDuration":12,"lectureUrl":"https://youtu.be/3c1vA2b9j2I","isPreviewFree":true,"lectureOrder":2},
        {"lectureId":"c004-ch5-l3","lectureTitle":"Scaling Basics","lectureDuration":13,"lectureUrl":"https://youtu.be/8hly31xKli0","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c004-ch5-l4","lectureTitle":"Backup Strategies","lectureDuration":9,"lectureUrl":"https://youtu.be/4z9rLu8iU3E","isPreviewFree":true,"lectureOrder":4}
      ]}
    ],
    "createdAt":"2024-10-01T11:17:33.712Z","updatedAt":"2024-12-02T09:12:24.112Z","__v":2
  },

  {
    "_id":"650a00000000000000000005",
    "courseTitle":"MongoDB — NoSQL Crash Course",
    "courseDescription":"<h2>Master MongoDB</h2><p>Learn document modeling, queries, aggregation, and integration with Node.js.</p>",
    "coursePrice":34.99,"discount":5,"isPublished":true,
    "educator":"675ac1512100b91a6d9b8b28",
    "enrolledStudents":["user_601","user_602","user_603"],
    "courseRatings":[{"_id":"6773e37360cb0ab974342320","userId":"user_601","rating":4}],
    "courseContent":[
      {"chapterId":"c005-ch1","chapterOrder":1,"chapterTitle":"Intro to MongoDB","chapterContent":[
        {"lectureId":"c005-ch1-l1","lectureTitle":"NoSQL Concepts","lectureDuration":9,"lectureUrl":"https://youtu.be/1h9i1s5Xw0s","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c005-ch1-l2","lectureTitle":"Install & Compass","lectureDuration":10,"lectureUrl":"https://youtu.be/5uXgq7m0C7g","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c005-ch1-l3","lectureTitle":"CRUD Operations","lectureDuration":12,"lectureUrl":"https://youtu.be/9aS2Xw0Q8kQ","isPreviewFree":true,"lectureOrder":3},
        {"lectureId":"c005-ch1-l4","lectureTitle":"Data Modeling","lectureDuration":13,"lectureUrl":"https://youtu.be/PCx1s8C5xk8","isPreviewFree":false,"lectureOrder":4}
      ]},
      {"chapterId":"c005-ch2","chapterOrder":2,"chapterTitle":"Mongoose","chapterContent":[
        {"lectureId":"c005-ch2-l1","lectureTitle":"Schemas & Models","lectureDuration":11,"lectureUrl":"https://youtu.be/1Q6r2dLkDfs","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c005-ch2-l2","lectureTitle":"Validation","lectureDuration":9,"lectureUrl":"https://youtu.be/3zQxm2-3W1g","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c005-ch2-l3","lectureTitle":"Population & refs","lectureDuration":10,"lectureUrl":"https://youtu.be/k7VfK8mA6W8","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c005-ch2-l4","lectureTitle":"Aggregation Basics","lectureDuration":14,"lectureUrl":"https://youtu.be/3S9bKs1Q7h4","isPreviewFree":true,"lectureOrder":4}
      ]},
      {"chapterId":"c005-ch3","chapterOrder":3,"chapterTitle":"Indexes & Performance","chapterContent":[
        {"lectureId":"c005-ch3-l1","lectureTitle":"Creating Indexes","lectureDuration":8,"lectureUrl":"https://youtu.be/QK4kN9wIuV8","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c005-ch3-l2","lectureTitle":"Explain & Profiling","lectureDuration":11,"lectureUrl":"https://youtu.be/3ZD1xv3Y2Ks","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c005-ch3-l3","lectureTitle":"Sharding Basics","lectureDuration":12,"lectureUrl":"https://youtu.be/1c3y9u6bXGk","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c005-ch3-l4","lectureTitle":"Replication","lectureDuration":13,"lectureUrl":"https://youtu.be/4z6Xqj0q3Dk","isPreviewFree":true,"lectureOrder":4}
      ]},
      {"chapterId":"c005-ch4","chapterOrder":4,"chapterTitle":"Security & Backup","chapterContent":[
        {"lectureId":"c005-ch4-l1","lectureTitle":"Auth & Roles","lectureDuration":10,"lectureUrl":"https://youtu.be/6XH8l3I0lVY","isPreviewFree":false,"lectureOrder":1},
        {"lectureId":"c005-ch4-l2","lectureTitle":"Backup Strategies","lectureDuration":9,"lectureUrl":"https://youtu.be/2k7pLhY7GQ8","isPreviewFree":true,"lectureOrder":2},
        {"lectureId":"c005-ch4-l3","lectureTitle":"Monitoring & Metrics","lectureDuration":11,"lectureUrl":"https://youtu.be/3L8z2kY7bH4","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c005-ch4-l4","lectureTitle":"Data Migration","lectureDuration":15,"lectureUrl":"https://youtu.be/1NfZ0VYg_k0","isPreviewFree":true,"lectureOrder":4}
      ]},
      {"chapterId":"c005-ch5","chapterOrder":5,"chapterTitle":"Integrations & Projects","chapterContent":[
        {"lectureId":"c005-ch5-l1","lectureTitle":"Mongo + Node","lectureDuration":13,"lectureUrl":"https://youtu.be/7d8n8w2d7xU","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c005-ch5-l2","lectureTitle":"Search & Text Indexes","lectureDuration":12,"lectureUrl":"https://youtu.be/2zQK6x7rP1M","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c005-ch5-l3","lectureTitle":"Project: Blog API","lectureDuration":20,"lectureUrl":"https://youtu.be/0Lt9w-BxKFQ","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c005-ch5-l4","lectureTitle":"Scaling & Ops","lectureDuration":14,"lectureUrl":"https://youtu.be/8hly31xKli0","isPreviewFree":true,"lectureOrder":4}
      ]}
    ],
    "createdAt":"2024-09-12T09:36:15.212Z","updatedAt":"2024-11-18T11:05:30.771Z","__v":3
  },

  {
    "_id":"650a00000000000000000006",
    "courseTitle":"UI/UX Design Essentials",
    "courseDescription":"<h2>Design Beautiful & User-Friendly Interfaces</h2><p>Wireframing, prototyping and visual design principles.</p>",
    "coursePrice":29.99,"discount":0,"isPublished":true,
    "educator":"675ac1512100b91a6d9b8b29",
    "enrolledStudents":["user_701","user_702"],
    "courseRatings":[{"_id":"6773e37360cb0ab974342321","userId":"user_701","rating":5}],
    "courseContent":[
      {"chapterId":"c006-ch1","chapterOrder":1,"chapterTitle":"Foundations of Design","chapterContent":[
        {"lectureId":"c006-ch1-l1","lectureTitle":"Principles of Design","lectureDuration":10,"lectureUrl":"https://youtu.be/3bU8qY8Bvrc","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c006-ch1-l2","lectureTitle":"Color Theory","lectureDuration":9,"lectureUrl":"https://youtu.be/1Yv6FYuQ-F0","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c006-ch1-l3","lectureTitle":"Typography Basics","lectureDuration":8,"lectureUrl":"https://youtu.be/8V6wQXkYJ2g","isPreviewFree":true,"lectureOrder":3},
        {"lectureId":"c006-ch1-l4","lectureTitle":"Grids & Layouts","lectureDuration":11,"lectureUrl":"https://youtu.be/7s0p2Z6t2vQ","isPreviewFree":false,"lectureOrder":4}
      ]},
      {"chapterId":"c006-ch2","chapterOrder":2,"chapterTitle":"Wireframing & Prototyping","chapterContent":[
        {"lectureId":"c006-ch2-l1","lectureTitle":"Figma Intro","lectureDuration":12,"lectureUrl":"https://youtu.be/FTFaQWZBqQ8","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c006-ch2-l2","lectureTitle":"Interaction Design","lectureDuration":10,"lectureUrl":"https://youtu.be/yWgVqD6iJDE","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c006-ch2-l3","lectureTitle":"Prototyping Tips","lectureDuration":9,"lectureUrl":"https://youtu.be/2VbqfY8wzEg","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c006-ch2-l4","lectureTitle":"Usability Testing","lectureDuration":14,"lectureUrl":"https://youtu.be/Q6kN0fY3s8s","isPreviewFree":true,"lectureOrder":4}
      ]},
      {"chapterId":"c006-ch3","chapterOrder":3,"chapterTitle":"Visual Design","chapterContent":[
        {"lectureId":"c006-ch3-l1","lectureTitle":"Iconography","lectureDuration":8,"lectureUrl":"https://youtu.be/1Z7k9lX2H4c","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c006-ch3-l2","lectureTitle":"Design Systems","lectureDuration":13,"lectureUrl":"https://youtu.be/2zQK6x7rP1M","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c006-ch3-l3","lectureTitle":"Accessibility Basics","lectureDuration":11,"lectureUrl":"https://youtu.be/8aGhZQkoFbQ","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c006-ch3-l4","lectureTitle":"Polish & Handoff","lectureDuration":10,"lectureUrl":"https://youtu.be/u2K-0w0S3Ko","isPreviewFree":true,"lectureOrder":4}
      ]},
      {"chapterId":"c006-ch4","chapterOrder":4,"chapterTitle":"Portfolio & Case Studies","chapterContent":[
        {"lectureId":"c006-ch4-l1","lectureTitle":"Case Study Framework","lectureDuration":12,"lectureUrl":"https://youtu.be/7v0l8dQK9lQ","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c006-ch4-l2","lectureTitle":"Storytelling","lectureDuration":9,"lectureUrl":"https://youtu.be/NXdH0ENYnf4","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c006-ch4-l3","lectureTitle":"Presenting Work","lectureDuration":10,"lectureUrl":"https://youtu.be/3C1vA2b9j2I","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c006-ch4-l4","lectureTitle":"Freelance Tips","lectureDuration":13,"lectureUrl":"https://youtu.be/4z9rLu8iU3E","isPreviewFree":true,"lectureOrder":4}
      ]},
      {"chapterId":"c006-ch5","chapterOrder":5,"chapterTitle":"Real Project","chapterContent":[
        {"lectureId":"c006-ch5-l1","lectureTitle":"Project Brief","lectureDuration":8,"lectureUrl":"https://youtu.be/0Lt9w-BxKFQ","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c006-ch5-l2","lectureTitle":"Prototype to Final","lectureDuration":18,"lectureUrl":"https://youtu.be/1aGdR6gB2Z8","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c006-ch5-l3","lectureTitle":"User Feedback","lectureDuration":9,"lectureUrl":"https://youtu.be/2Ji-clqUYnA","isPreviewFree":true,"lectureOrder":3},
        {"lectureId":"c006-ch5-l4","lectureTitle":"Final Presentation","lectureDuration":12,"lectureUrl":"https://youtu.be/Ke90Tje7VS0","isPreviewFree":false,"lectureOrder":4}
      ]}
    ],
    "createdAt":"2024-11-10T12:10:44.612Z","updatedAt":"2024-12-29T15:02:11.441Z","__v":1
  },

  {
    "_id":"650a00000000000000000007",
    "courseTitle":"Full-Stack Web Development",
    "courseDescription":"<h2>End-to-End Web Development</h2><p>Frontend, backend and deployment with real projects.</p>",
    "coursePrice":99.99,"discount":30,"isPublished":true,
    "educator":"675ac1512100b91a6d9b8b2a",
    "enrolledStudents":["user_801","user_802","user_803"],
    "courseRatings":[{"_id":"6773e37360cb0ab974342322","userId":"user_802","rating":4}],
    "courseContent":[
      {"chapterId":"c007-ch1","chapterOrder":1,"chapterTitle":"HTML & CSS","chapterContent":[
        {"lectureId":"c007-ch1-l1","lectureTitle":"HTML Foundations","lectureDuration":12,"lectureUrl":"https://youtu.be/UB1O30fR-EE","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c007-ch1-l2","lectureTitle":"Modern CSS","lectureDuration":14,"lectureUrl":"https://youtu.be/1PnVor36_40","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c007-ch1-l3","lectureTitle":"Flexbox & Grid","lectureDuration":13,"lectureUrl":"https://youtu.be/JJSoEo8JSnc","isPreviewFree":true,"lectureOrder":3},
        {"lectureId":"c007-ch1-l4","lectureTitle":"Responsive Design","lectureDuration":15,"lectureUrl":"https://youtu.be/srvUrASNj0s","isPreviewFree":false,"lectureOrder":4}
      ]},
      {"chapterId":"c007-ch2","chapterOrder":2,"chapterTitle":"React Frontend","chapterContent":[
        {"lectureId":"c007-ch2-l1","lectureTitle":"React Overview","lectureDuration":12,"lectureUrl":"https://youtu.be/Ke90Tje7VS0","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c007-ch2-l2","lectureTitle":"State Management","lectureDuration":15,"lectureUrl":"https://youtu.be/0ZJgIjIuY7U","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c007-ch2-l3","lectureTitle":"Forms & Validation","lectureDuration":11,"lectureUrl":"https://youtu.be/5kcn6ILj6C8","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c007-ch2-l4","lectureTitle":"Client Routing","lectureDuration":10,"lectureUrl":"https://youtu.be/Law7wfdg_ls","isPreviewFree":true,"lectureOrder":4}
      ]},
      {"chapterId":"c007-ch3","chapterOrder":3,"chapterTitle":"Backend APIs","chapterContent":[
        {"lectureId":"c007-ch3-l1","lectureTitle":"Node & Express","lectureDuration":13,"lectureUrl":"https://youtu.be/TlB_eWDSMt4","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c007-ch3-l2","lectureTitle":"REST Principles","lectureDuration":10,"lectureUrl":"https://youtu.be/L72fhGm1tfE","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c007-ch3-l3","lectureTitle":"Auth & Security","lectureDuration":12,"lectureUrl":"https://youtu.be/7YcW25PHnAA","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c007-ch3-l4","lectureTitle":"Testing APIs","lectureDuration":11,"lectureUrl":"https://youtu.be/1tRLveSyNz8","isPreviewFree":true,"lectureOrder":4}
      ]},
      {"chapterId":"c007-ch4","chapterOrder":4,"chapterTitle":"Databases","chapterContent":[
        {"lectureId":"c007-ch4-l1","lectureTitle":"Relational vs NoSQL","lectureDuration":10,"lectureUrl":"https://youtu.be/9N6a-VLBa2I","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c007-ch4-l2","lectureTitle":"MongoDB Basics","lectureDuration":12,"lectureUrl":"https://youtu.be/1Q6r2dLkDfs","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c007-ch4-l3","lectureTitle":"ORM/ODM Patterns","lectureDuration":13,"lectureUrl":"https://youtu.be/2nG8nD8K0i4","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c007-ch4-l4","lectureTitle":"Data Modeling","lectureDuration":14,"lectureUrl":"https://youtu.be/PCx1s8C5xk8","isPreviewFree":true,"lectureOrder":4}
      ]},
      {"chapterId":"c007-ch5","chapterOrder":5,"chapterTitle":"Deploy & Monitor","chapterContent":[
        {"lectureId":"c007-ch5-l1","lectureTitle":"Deploy to Vercel/Heroku","lectureDuration":12,"lectureUrl":"https://youtu.be/71wSzpLyW9k","isPreviewFree":false,"lectureOrder":1},
        {"lectureId":"c007-ch5-l2","lectureTitle":"CI/CD Pipelines","lectureDuration":13,"lectureUrl":"https://youtu.be/1aGdR6gB2Z8","isPreviewFree":true,"lectureOrder":2},
        {"lectureId":"c007-ch5-l3","lectureTitle":"Monitoring & Logs","lectureDuration":11,"lectureUrl":"https://youtu.be/3c1vA2b9j2I","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c007-ch5-l4","lectureTitle":"Scaling Strategies","lectureDuration":15,"lectureUrl":"https://youtu.be/8hly31xKli0","isPreviewFree":true,"lectureOrder":4}
      ]}
    ],
    "createdAt":"2024-10-18T07:16:22.112Z","updatedAt":"2024-12-25T13:44:19.311Z","__v":6
  },

  {
    "_id":"650a00000000000000000008",
    "courseTitle":"Data Structures & Algorithms",
    "courseDescription":"<h2>DSA for Interviews</h2><p>Arrays, strings, trees, graphs and algorithm patterns for interviews.</p>",
    "coursePrice":59.99,"discount":10,"isPublished":true,
    "educator":"675ac1512100b91a6d9b8b2b",
    "enrolledStudents":["user_901","user_902"],
    "courseRatings":[{"_id":"6773e37360cb0ab974342323","userId":"user_901","rating":5}],
    "courseContent":[
      {"chapterId":"c008-ch1","chapterOrder":1,"chapterTitle":"Foundations","chapterContent":[
        {"lectureId":"c008-ch1-l1","lectureTitle":"Complexity Analysis","lectureDuration":12,"lectureUrl":"https://youtu.be/92S4zgXN17o","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c008-ch1-l2","lectureTitle":"Arrays & Strings","lectureDuration":14,"lectureUrl":"https://youtu.be/8hly31xKli0","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c008-ch1-l3","lectureTitle":"Linked Lists","lectureDuration":13,"lectureUrl":"https://youtu.be/2qty3Iz_v84","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c008-ch1-l4","lectureTitle":"Stacks & Queues","lectureDuration":11,"lectureUrl":"https://youtu.be/bum_19loj9A","isPreviewFree":true,"lectureOrder":4}
      ]},
      {"chapterId":"c008-ch2","chapterOrder":2,"chapterTitle":"Trees & Graphs","chapterContent":[
        {"lectureId":"c008-ch2-l1","lectureTitle":"Binary Trees","lectureDuration":15,"lectureUrl":"https://youtu.be/zaT2JzNlf6w","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c008-ch2-l2","lectureTitle":"Graph Traversal","lectureDuration":16,"lectureUrl":"https://youtu.be/pcKY4hjDrx0","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c008-ch2-l3","lectureTitle":"Shortest Paths","lectureDuration":18,"lectureUrl":"https://youtu.be/3I4qKk6m4gI","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c008-ch2-l4","lectureTitle":"Tree Algorithms","lectureDuration":14,"lectureUrl":"https://youtu.be/6Qh0QkqWq3I","isPreviewFree":true,"lectureOrder":4}
      ]},
      {"chapterId":"c008-ch3","chapterOrder":3,"chapterTitle":"Sorting & Searching","chapterContent":[
        {"lectureId":"c008-ch3-l1","lectureTitle":"Sorting Algorithms","lectureDuration":13,"lectureUrl":"https://youtu.be/Rqqj8sTQk8Q","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c008-ch3-l2","lectureTitle":"Binary Search","lectureDuration":9,"lectureUrl":"https://youtu.be/XfY0H9uXcQY","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c008-ch3-l3","lectureTitle":"Divide & Conquer","lectureDuration":15,"lectureUrl":"https://youtu.be/3f8w4Y0qZf4","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c008-ch3-l4","lectureTitle":"Dynamic Programming Intro","lectureDuration":18,"lectureUrl":"https://youtu.be/OQ5jsbhAv_M","isPreviewFree":true,"lectureOrder":4}
      ]},
      {"chapterId":"c008-ch4","chapterOrder":4,"chapterTitle":"Advanced Topics","chapterContent":[
        {"lectureId":"c008-ch4-l1","lectureTitle":"Greedy Algorithms","lectureDuration":12,"lectureUrl":"https://youtu.be/5hQnrOQm5Gk","isPreviewFree":false,"lectureOrder":1},
        {"lectureId":"c008-ch4-l2","lectureTitle":"Graph Optimizations","lectureDuration":16,"lectureUrl":"https://youtu.be/2vj9bZVv2Q4","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c008-ch4-l3","lectureTitle":"Advanced DP","lectureDuration":20,"lectureUrl":"https://youtu.be/7-n4KpZ8z6o","isPreviewFree":true,"lectureOrder":3},
        {"lectureId":"c008-ch4-l4","lectureTitle":"Practice Patterns","lectureDuration":14,"lectureUrl":"https://youtu.be/0sOvCWFmrtA","isPreviewFree":true,"lectureOrder":4}
      ]},
      {"chapterId":"c008-ch5","chapterOrder":5,"chapterTitle":"Interview Prep","chapterContent":[
        {"lectureId":"c008-ch5-l1","lectureTitle":"Mock Interview 1","lectureDuration":30,"lectureUrl":"https://youtu.be/4K4Yj6wD0bA","isPreviewFree":false,"lectureOrder":1},
        {"lectureId":"c008-ch5-l2","lectureTitle":"Mock Interview 2","lectureDuration":28,"lectureUrl":"https://youtu.be/3I4qKk6m4gI","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c008-ch5-l3","lectureTitle":"Time Management","lectureDuration":10,"lectureUrl":"https://youtu.be/uxP0k3h5gPo","isPreviewFree":true,"lectureOrder":3},
        {"lectureId":"c008-ch5-l4","lectureTitle":"Problem Solving Checklist","lectureDuration":12,"lectureUrl":"https://youtu.be/7Q0L1yXgXQ8","isPreviewFree":true,"lectureOrder":4}
      ]}
    ],
    "createdAt":"2024-08-25T10:20:18.442Z","updatedAt":"2024-11-15T09:30:11.211Z","__v":4
  },

  {
    "_id":"650a00000000000000000009",
    "courseTitle":"TypeScript from Zero to Hero",
    "courseDescription":"<h2>TypeScript for JavaScript Developers</h2><p>Add static types to your JS apps and ship safer code.</p>",
    "coursePrice":49.99,"discount":5,"isPublished":true,
    "educator":"675ac1512100b91a6d9b8b2c",
    "enrolledStudents":["user_1001","user_1002"],
    "courseRatings":[{"_id":"6773e37360cb0ab974342324","userId":"user_1002","rating":5}],
    "courseContent":[
      {"chapterId":"c009-ch1","chapterOrder":1,"chapterTitle":"Getting Started","chapterContent":[
        {"lectureId":"c009-ch1-l1","lectureTitle":"Why TypeScript?","lectureDuration":10,"lectureUrl":"https://youtu.be/2r1RJ0ewJqQ","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c009-ch1-l2","lectureTitle":"Basic Types","lectureDuration":12,"lectureUrl":"https://youtu.be/0sOvCWFmrtA","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c009-ch1-l3","lectureTitle":"Interfaces","lectureDuration":13,"lectureUrl":"https://youtu.be/1Z7k9lX2H4c","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c009-ch1-l4","lectureTitle":"Enums & Tuples","lectureDuration":9,"lectureUrl":"https://youtu.be/9aS2Xw0Q8kQ","isPreviewFree":true,"lectureOrder":4}
      ]},
      {"chapterId":"c009-ch2","chapterOrder":2,"chapterTitle":"Advanced Types","chapterContent":[
        {"lectureId":"c009-ch2-l1","lectureTitle":"Generics","lectureDuration":14,"lectureUrl":"https://youtu.be/3I4qKk6m4gI","isPreviewFree":false,"lectureOrder":1},
        {"lectureId":"c009-ch2-l2","lectureTitle":"Type Guards","lectureDuration":11,"lectureUrl":"https://youtu.be/5hQnrOQm5Gk","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c009-ch2-l3","lectureTitle":"Declaration Files","lectureDuration":10,"lectureUrl":"https://youtu.be/7-n4KpZ8z6o","isPreviewFree":true,"lectureOrder":3},
        {"lectureId":"c009-ch2-l4","lectureTitle":"Tooling & tsconfig","lectureDuration":12,"lectureUrl":"https://youtu.be/0Lt9w-BxKFQ","isPreviewFree":false,"lectureOrder":4}
      ]},
      {"chapterId":"c009-ch3","chapterOrder":3,"chapterTitle":"Integration & Patterns","chapterContent":[
        {"lectureId":"c009-ch3-l1","lectureTitle":"TS with React","lectureDuration":16,"lectureUrl":"https://youtu.be/Ke90Tje7VS0","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c009-ch3-l2","lectureTitle":"Migration Strategies","lectureDuration":13,"lectureUrl":"https://youtu.be/1aGdR6gB2Z8","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c009-ch3-l3","lectureTitle":"Advanced Patterns","lectureDuration":15,"lectureUrl":"https://youtu.be/2Ji-clqUYnA","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c009-ch3-l4","lectureTitle":"Best Practices","lectureDuration":10,"lectureUrl":"https://youtu.be/0ik6X4DJKCc","isPreviewFree":true,"lectureOrder":4}
      ]},
      {"chapterId":"c009-ch4","chapterOrder":4,"chapterTitle":"Testing & Debugging","chapterContent":[
        {"lectureId":"c009-ch4-l1","lectureTitle":"Type-Driven Tests","lectureDuration":12,"lectureUrl":"https://youtu.be/3c1vA2b9j2I","isPreviewFree":false,"lectureOrder":1},
        {"lectureId":"c009-ch4-l2","lectureTitle":"Debugging TS","lectureDuration":9,"lectureUrl":"https://youtu.be/8hly31xKli0","isPreviewFree":true,"lectureOrder":2},
        {"lectureId":"c009-ch4-l3","lectureTitle":"Linting & Formatting","lectureDuration":8,"lectureUrl":"https://youtu.be/1tRLveSyNz8","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c009-ch4-l4","lectureTitle":"Deployment","lectureDuration":11,"lectureUrl":"https://youtu.be/71wSzpLyW9k","isPreviewFree":true,"lectureOrder":4}
      ]},
      {"chapterId":"c009-ch5","chapterOrder":5,"chapterTitle":"Project: Build an App","chapterContent":[
        {"lectureId":"c009-ch5-l1","lectureTitle":"Project Setup","lectureDuration":10,"lectureUrl":"https://youtu.be/1aGdR6gB2Z8","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c009-ch5-l2","lectureTitle":"Implement Features","lectureDuration":25,"lectureUrl":"https://youtu.be/Ke90Tje7VS0","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c009-ch5-l3","lectureTitle":"Refactor & Types","lectureDuration":18,"lectureUrl":"https://youtu.be/0sOvCWFmrtA","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c009-ch5-l4","lectureTitle":"Final Review","lectureDuration":12,"lectureUrl":"https://youtu.be/0Lt9w-BxKFQ","isPreviewFree":true,"lectureOrder":4}
      ]}
    ],
    "createdAt":"2024-09-30T08:22:53.112Z","updatedAt":"2024-12-12T11:30:44.901Z","__v":3
  },

  {
    "_id":"650a00000000000000000010",
    "courseTitle":"DevOps Essentials",
    "courseDescription":"<h2>CI/CD, Docker & Monitoring</h2><p>Learn toolchains and best practices for modern DevOps workflows.</p>",
    "coursePrice":79.99,"discount":20,"isPublished":true,
    "educator":"675ac1512100b91a6d9b8b2d",
    "enrolledStudents":["user_1101","user_1102"],
    "courseRatings":[{"_id":"6773e37360cb0ab974342325","userId":"user_1101","rating":4}],
    "courseContent":[
      {"chapterId":"c010-ch1","chapterOrder":1,"chapterTitle":"CI/CD Basics","chapterContent":[
        {"lectureId":"c010-ch1-l1","lectureTitle":"Introduction to CI/CD","lectureDuration":10,"lectureUrl":"https://youtu.be/1aGdR6gB2Z8","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c010-ch1-l2","lectureTitle":"GitHub Actions","lectureDuration":13,"lectureUrl":"https://youtu.be/71wSzpLyW9k","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c010-ch1-l3","lectureTitle":"Pipeline Patterns","lectureDuration":12,"lectureUrl":"https://youtu.be/8hly31xKli0","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c010-ch1-l4","lectureTitle":"Testing in CI","lectureDuration":11,"lectureUrl":"https://youtu.be/1tRLveSyNz8","isPreviewFree":true,"lectureOrder":4}
      ]},
      {"chapterId":"c010-ch2","chapterOrder":2,"chapterTitle":"Containers","chapterContent":[
        {"lectureId":"c010-ch2-l1","lectureTitle":"Docker Fundamentals","lectureDuration":14,"lectureUrl":"https://youtu.be/3c1vA2b9j2I","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c010-ch2-l2","lectureTitle":"Docker Compose","lectureDuration":12,"lectureUrl":"https://youtu.be/0Lt9w-BxKFQ","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c010-ch2-l3","lectureTitle":"Image Best Practices","lectureDuration":10,"lectureUrl":"https://youtu.be/8V6wQXkYJ2g","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c010-ch2-l4","lectureTitle":"Container Networking","lectureDuration":11,"lectureUrl":"https://youtu.be/2Ji-clqUYnA","isPreviewFree":true,"lectureOrder":4}
      ]},
      {"chapterId":"c010-ch3","chapterOrder":3,"chapterTitle":"Orchestration","chapterContent":[
        {"lectureId":"c010-ch3-l1","lectureTitle":"Kubernetes Intro","lectureDuration":16,"lectureUrl":"https://youtu.be/X48VuDVv0do","isPreviewFree":false,"lectureOrder":1},
        {"lectureId":"c010-ch3-l2","lectureTitle":"Pods & Services","lectureDuration":14,"lectureUrl":"https://youtu.be/PH-2FfFD2PU","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c010-ch3-l3","lectureTitle":"Deployments & Scaling","lectureDuration":13,"lectureUrl":"https://youtu.be/Zi7A2K0o-7I","isPreviewFree":true,"lectureOrder":3},
        {"lectureId":"c010-ch3-l4","lectureTitle":"Helm Basics","lectureDuration":12,"lectureUrl":"https://youtu.be/0sOvCWFmrtA","isPreviewFree":false,"lectureOrder":4}
      ]},
      {"chapterId":"c010-ch4","chapterOrder":4,"chapterTitle":"Monitoring & Logging","chapterContent":[
        {"lectureId":"c010-ch4-l1","lectureTitle":"Prometheus & Grafana","lectureDuration":15,"lectureUrl":"https://youtu.be/EN6Dx22cPRI","isPreviewFree":true,"lectureOrder":1},
        {"lectureId":"c010-ch4-l2","lectureTitle":"Centralized Logging","lectureDuration":12,"lectureUrl":"https://youtu.be/PoRJizFvM7s","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c010-ch4-l3","lectureTitle":"Alerting","lectureDuration":10,"lectureUrl":"https://youtu.be/2VbqfY8wzEg","isPreviewFree":false,"lectureOrder":3},
        {"lectureId":"c010-ch4-l4","lectureTitle":"SRE Practices","lectureDuration":13,"lectureUrl":"https://youtu.be/1tRLveSyNz8","isPreviewFree":true,"lectureOrder":4}
      ]},
      {"chapterId":"c010-ch5","chapterOrder":5,"chapterTitle":"Release & Rollback","chapterContent":[
        {"lectureId":"c010-ch5-l1","lectureTitle":"Blue/Green Deployments","lectureDuration":12,"lectureUrl":"https://youtu.be/8hly31xKli0","isPreviewFree":false,"lectureOrder":1},
        {"lectureId":"c010-ch5-l2","lectureTitle":"Canary Releases","lectureDuration":11,"lectureUrl":"https://youtu.be/1aGdR6gB2Z8","isPreviewFree":false,"lectureOrder":2},
        {"lectureId":"c010-ch5-l3","lectureTitle":"Rollback Strategies","lectureDuration":10,"lectureUrl":"https://youtu.be/71wSzpLyW9k","isPreviewFree":true,"lectureOrder":3},
        {"lectureId":"c010-ch5-l4","lectureTitle":"Postmortem & Learning","lectureDuration":14,"lectureUrl":"https://youtu.be/3c1vA2b9j2I","isPreviewFree":true,"lectureOrder":4}
      ]}
    ],
    "createdAt":"2024-07-19T05:16:32.722Z","updatedAt":"2024-11-20T11:50:55.111Z","__v":4
  }
];

