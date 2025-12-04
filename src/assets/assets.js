// ---------------------------
// MAIN LOGOS + STAR ICON
// ---------------------------
import logo from "../assets/images/logo.png";
import user_icon from "../assets/images/user.png";
import microsoft_logo from "../assets/images/Microsoft_logo_(2012).svg.png";
import walmart_logo from "../assets/images/Walmart_logo_(2008).svg.png";
import paypal_logo from "../assets/images/PayPal.svg.png";
import adobe_logo from "../assets/images/Adobe_Corporate_logo.svg.png";
import google_logo from "../assets/images/google-logo-transparent.svg.png";
import star from "../assets/images/star.svg";

export const assets = {
  logo,
  user_icon,
  microsoft_logo,
  walmart_logo,
  paypal_logo,
  adobe_logo,
  google_logo,
  star,
};

// -----------------------------------------------------
// FINAL 4-COURSE DATASET WITH EDUCATOR NAME & THUMBNAIL
// -----------------------------------------------------
export const dummyCourses = [
  {
    _id: "650a00000000000000000001",
    courseTitle: "Introduction to JavaScript",
    courseThumbnail: "https://img.youtube.com/vi/CBWnBi-awSA/hqdefault.jpg",
    educator: {
      id: "675ac1512100b91a6d9b8b24",
      name: "Sarah Mitchell",
      photo: "https://i.pravatar.cc/150?img=32",
    },
    courseDescription:
      "<h2>Learn the Basics of JavaScript</h2><p>Start building interactive web pages using vanilla JavaScript.</p>",
    coursePrice: 49.99,
    discount: 20,
    isPublished: true,
    courseRatings: [
      { rating: 5 },
      { rating: 4 }
    ],
    courseContent: [],
  },

  {
    _id: "650a00000000000000000002",
    courseTitle: "Python for Beginners",
    courseThumbnail: "https://img.youtube.com/vi/rfscVS0vtbw/hqdefault.jpg",
    educator: {
      id: "675ac1512100b91a6d9b8b25",
      name: "David Harrison",
      photo: "https://i.pravatar.cc/150?img=12",
    },
    courseDescription:
      "<h2>Start Coding with Python</h2><p>Learn Python fundamentals and build small projects.</p>",
    coursePrice: 39.99,
    discount: 10,
    isPublished: true,
    courseRatings: [{ rating: 5 }],
    courseContent: [],
  },

  {
    _id: "650a00000000000000000003",
    courseTitle: "React JS — Complete Guide",
    courseThumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    educator: {
      id: "675ac1512100b91a6d9b8b26",
      name: "Emily Turner",
      photo: "https://i.pravatar.cc/150?img=47",
    },
    courseDescription:
      "<h2>Build Modern Web Apps with React</h2><p>Comprehensive React course including hooks, routing and state management.</p>",
    coursePrice: 69.99,
    discount: 25,
    isPublished: true,
    courseRatings: [
      { rating: 5 },
      { rating: 4 }
    ],
    courseContent: [],
  },

  {
    _id: "650a00000000000000000004",
    courseTitle: "Node.js & Express.js Fundamentals",
    courseThumbnail: "https://img.youtube.com/vi/TlB_eWDSMt4/hqdefault.jpg",
    educator: {
      id: "675ac1512100b91a6d9b8b27",
      name: "Michael Roberts",
      photo: "https://i.pravatar.cc/150?img=21",
    },
    courseDescription:
      "<h2>Backend Development with Node</h2><p>Build REST APIs using Node and Express with hands-on examples.</p>",
    coursePrice: 54.99,
    discount: 20,
    isPublished: true,
    courseRatings: [{ rating: 5 }],
    courseContent: [],
  },
];
