export const METADATA = {
  author: "Shaam Lal",
  title: "Portfolio | Sham Lal",
  description:
    "Sham Lal is a passionate AI student with hands-on experience in Machine Learning, Computer Vision, currently researching on medical imaging and disease detection.",
  siteUrl: "https://www.shamlal.me/",
  twitterHandle: "@shamlall2",
  keywords: [
    "Sham Lal",
    "AI Student",
    "Machine Learning",
    "Computer Vision",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "AI Student & ML Enthusiast",
  "Passionate about Medical Imaging & Social Good",
  "Building real-world AI solutions",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:shamlalmarwari13@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/sham-lal-ai-enthusiatic23/",
  },
  {
    name: "github",
    url: "https://github.com/shamlal-12",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/",
  },
  {
    name: "twitter",
    url: "https://x.com/",
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/@FirstAISinger24",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "python", "cplusplus", "opencv", "streamlit", "jupyter", "kaggle", "scikitlearn", "tensorflow", "pytorch", "numpy", "pandas", "yolo"
  ],
  librariesAndFrameworks: [
    "scikitlearn", "tensorflow", "pandas", "numpy", "yolo"
  ],
  databases: [],
  other: ["youtube"]
};

// export const PROJECTS = [
//   {
//     name: "Airbnb",
//     image: "/projects/airbnb.webp",
//     blurImage: "/projects/blur/airbnb-blur.webp",
//     description: "Airbnb UI clone using NextJS + Tailwind CSS 🛏️",
//     gradient: ["#F14658", "#DC2537"],
//     url: "https://shubh73-airbnb.vercel.app/",
//     tech: ["react", "nextjs", "tailwindcss", "mapbox"],
//   },
//   {
//     name: "Medium",
//     image: "/projects/medium.webp",
//     blurImage: "/projects/blur/medium-blur.webp",
//     description: "Medium UI clone using NextJS + Tailwind CSS ✍🏻",
//     gradient: ["#FFA62E", "#EA4D2C"],
//     url: "https://shubh73-medium.vercel.app/",
//     tech: ["typescript", "react", "nextjs", "tailwindcss", "sanity.io"],
//   },
//   {
//     name: "Inshorts",
//     image: "/projects/inshorts.webp",
//     blurImage: "/projects/blur/airbnb-blur.webp",
//     description:
//       "Conversational Voice Controlled React News Application using Alan AI 🎙",
//     gradient: ["#000066", "#6699FF"],
//     url: "https://shubh73-inshorts.netlify.app/",
//     tech: ["react", "chakra-ui", "alan"],
//   },
//   {
//     name: "Tesla",
//     image: "/projects/tesla.webp",
//     blurImage: "/projects/blur/tesla-blur.webp",
//     description: "A Tesla React Native App 🏎️",
//     gradient: ["#142D46", "#2E4964"],
//     url: "https://github.com/shubh73/tesla",
//     tech: ["react"],
//   },
// ];

export const PROJECTS = [
  {
    name: "Personal Voice Assistant",
    image: "/projects/voiceAssistant.png",
    description:
      "Python-based voice assistant for speech commands, app control, YouTube, and more. Integrated speech recognition and system-level controls.",
    gradient: ["#F14658", "#DC2537"],
    url: "https://www.linkedin.com/posts/sham-lal-ai-enthusiatic23_python-ai-voiceassistant-activity-7276225112696066048-waam/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3L4IcBvUrIuodnJdrwg91rg9MjhXJRtQA",
    tech: ["react", "nextjs", "tailwindcss"],
  },
  {
    name: "ML Model for Students Career Counseling",
    image: "/projects/AIcareer.jpg",
    description:
      "Career recommendation system using ML and statistical analysis for data-driven guidance.",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://www.linkedin.com/posts/sham-lal-ai-enthusiatic23_comprehensive-student-data-analysis-and-counselling-activity-7278841707461267456-9vOK/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3L4IcBvUrIuodnJdrwg91rg9MjhXJRtQA",
    tech: ["typescript", "react", "nextjs"],
  },
  {
    name: "Human Attributes Detector GenAI",
    image: "/projects/aidetection.png",
    description:
      "GenAI using Google Gemini AI and Streamlit to analyze gender, age, ethnicity, emotions, and more from images.",
    gradient: ["#000066", "#6699FF"],
    url: "https://www.linkedin.com/posts/sham-lal-ai-enthusiatic23_ai-generativeai-machinelearning-activity-7300016973143269377-zR9R/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3L4IcBvUrIuodnJdrwg91rg9MjhXJRtQA",
    tech: ["react", "chakra-ui", "alan"],
  },
  {
    name: "AI Virtual Mouse",
    image: "/projects/virtualMouse.jpg",
    description:
      "Virtual Mouse using OpenCV, MediaPipe, and PyAutoGUI for touch-free PC control via hand gestures.",
    gradient: ["#142D46", "#2E4964"],
    url: "https://www.linkedin.com/posts/sham-lal-ai-enthusiatic23_aiaura-ai-machinelearning-activity-7303894454707318784-mfil?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3L4IcBvUrIuodnJdrwg91rg9MjhXJRtQA",
    tech: ["react"],
  },
  {
    name: "TedPal TedTalks Chatbot",
    image: "/projects/chatbot.png",
    description:
      "RAG-based AI chatbot delivering TEDTalk insights instantly, boosting learning and productivity.",
    gradient: ["#8B31FF", "#7000FF"],
    url: "https://github.com/Maliksaad231224/TedPal-RAG-Chatbot-using-PineCone-and-Flask",
    tech: ["react", "nextjs", "tailwindcss"],
  },
  {
    name: "Personal AI Chatbot",
    image: "/projects/chatbot.png",
    description:
      "Custom AI chatbot providing personalized responses about my work, projects, and expertise.",
    gradient: ["#00C9A7", "#005F73"],
    url: "https://www.linkedin.com/posts/sham-lal-ai-enthusiatic23_aichatbot-chatgpt-ai-activity-7172356024937373697--ryO/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3L4IcBvUrIuodnJdrwg91rg9MjhXJRtQA",
    tech: ["typescript", "react", "nextjs"],
  },
  {
    name: "Medical-Cost-Predictor",
    image: "/projects/MedicalBillPredictor.png",
    description:
      "Streamlit-based app for instant insurance cost estimates using ML, improving healthcare analytics.",
    gradient: ["#FFB703", "#FB8500"],
    url: "https://github.com/shamlal-12/Medical-Cost-Prediction",
    tech: ["react", "chakra-ui", "alan"],
  },
];

export const WORK = [
  {
    id: 1,
    company: "Bright Beginning Public Higher Secondary School Daharki",
    title: "AI Intern – Educational AI Integration",
    location: "Daharki, Sindh",
    range: "July 2024 – Aug 2024",
    responsibilities: [
      "Developed AI-powered lesson planning tools and dashboards to support digital education.",
      "Conducted workshops on AI for Education, promoting tech-driven learning in rural communities.",
      "Carried out small-scale IT automation and awareness campaigns.",
    ],
    url: "",
    video: "",
  },
  {
    id: 2,
    company: "Rhomix Technologies Lahore",
    title: "ML Intern",
    location: "Virtual Internship",
    range: "Jan – March 2025",
    responsibilities: [
      "Worked on real-world machine learning projects, including data preprocessing, model training, and evaluation.",
      "Implemented machine learning algorithms using Python, Scikit-learn, and TensorFlow/PyTorch.",
      "Conducted exploratory data analysis (EDA) and feature engineering to improve model performance.",
      "Collaborated with the team to develop and optimize predictive models for various applications.",
      "Utilized Google Colab and Jupyter Notebook for experimentation and model development.",
      "Gained hands-on experience in deploying ML models and working with cloud-based tools.",
    ],
    url: "",
    video: "",
  },
];
