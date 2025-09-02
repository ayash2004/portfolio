import { useState } from "react"
import emailjs from "emailjs-com";

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState("")
  const [errors, setErrors] = useState({})
  const service_id = import.meta.env.VITE_SERVICE_ID    
  const template_id = import.meta.env.VITE_TEMPLATE_ID
  const public_key = import.meta.env.VITE_PUBLIC_KEY
  const validateForm = () => {
    const newErrors = {}
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

    // Check if fields are empty
    if (name.trim() === "") {
      newErrors.name = "Name is required"
    }
    
    if (email.trim() === "") {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email address"
    }
    
    if (message.trim() === "") {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    
    // If no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      submitForm()
      return true
    }
    
    // Clear success message if there are errors
    setSuccess("")
    return false
  }
  
  const submitForm = () => {
    const templateParams = {
      name,
      email,
      message,
    }

    emailjs
      .send(
        service_id,  
        template_id, 
        templateParams,
        public_key   
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text)
          setSuccess("✅ Message sent successfully!")
          setName("")
          setEmail("")  
          setMessage("")
          setErrors({})

          setTimeout(() => {
          setSuccess("");
        }, 3000);
        },
        (err) => {
          console.error("FAILED...", err)
          setSuccess("❌ Failed to send message. Try again later.")
        }
      )
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
      e.preventDefault(); // stop default new line
      validateForm();     // run your validation + submit
    }
  };

  const skills = [
    {
      title: "Frontend ",
      icon: "💻",
      tags: ["React", "Redux Toolkit" , "JavaScript (ES6+)", "HTML", "CSS3", "TailwindCSS", "Responsive UI/UX Design", "React Router", "Context API"]
    },
    {
      title: "Tools & Platforms", 
      icon: "🛠",
      tags: ["GitHub", "VS Code", "Appwrite", "Postman"," Netlify" , " Vercel"]
    },
    {
      title: "Version Control & Deployment",
      icon: "🌐", 
      tags: [" Git ", " GitHub" ," Netlify", "Vercel" ," CI/CD "]
    },
  ]

  const projects = [
    {
      title: "BlogSpace",
      icon: "📝",
      description: " Developed a full-featured blogging platform with user authentication, post CRUD operations, rich text editing, image uploads, and a responsive UI, leveraging React, Redux, Tailwind CSS, and Appwrite.",
      tags: ["React", "Redux", "TailwindCSS", "Appwrite", "CRUD Operations", "Responsive UI"],
      livelink : "https://blog-space-git-main-yash-agarwals-projects-5132f746.vercel.app/",
      githubrepo : "https://github.com/ayash2004/BlogSpace",
    },
    {
      title: "Weather App",
      icon: "🌦",
      description: "Built a responsive dashboard with real-time weather updates and city search functionality using React, Tailwind CSS, and the OpenWeather API.",
      tags: ["React", "Tailwind", "OpenWeather API", "Responsive Design"],
      livelink : "https://weather-api-git-main-yash-agarwals-projects-5132f746.vercel.app/",
      githubrepo : "https://github.com/ayash2004/WeatherAPI",
    },
    {
      title: "To-Do Manager",
      icon: "✅", 
      description: "Implemented CRUD operations (add/edit/delete) with local storage persistence to  seamless task management experience.",
      tags: ["React", "CRUD Operations", "Local Storage", "DOM Manipulation"],
      livelink : "https://todo-manager-git-main-yash-agarwals-projects-5132f746.vercel.app/",
      githubrepo : "https://github.com/ayash2004/Todo-Manager",
    },
    {
      title: "News App",
      icon: "📰",
      description: "Integrated News API with search and filter features to deliver dynamic content delivery and improve user experience.",
      tags: ["API Integration", "JavaScript", "Search & Filter", "Dynamic Content"],
      livelink : "",
      githubrepo : "/",
    },
    {
      title: "Form Validation with Appwrite",
      icon: "🔐",
      description: "Implemented robust form validation rules and integrated the frontend with the Appwrite database to ensure secure and reliable data handling. " ,
      tags: ["Form Validation", "Appwrite", "Database Integration", "Security"],
      livelink : "",
      githubrepo : "",
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Yash Agarwal
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <p className="text-blue-400 text-lg mb-4">Hello, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-[1.25] inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent pb-[2px]">
            Yash Sharad Agarwal
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
             Web Developer | Mumbai, Maharashtra
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Developing responsive, user-friendly web applications with modern JavaScript frameworks. Turning ideas into seamless and refined digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
              View Projects →
            </a>
            <a href="#contact" className="border border-gray-600 px-8 py-3 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all">
              📧 Contact Me
            </a>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-center mb-12">
            <span className="text-blue-400 text-3xl ">01.</span>
            <h2 className="text-4xl font-bold ml-4">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                An aspiring Web Developer with hands-on experience in JavaScript, React, and API integrations. Holds a B.Sc. in IT (CGPA: 8.85) along with certifications in CCNA and Advanced Excel.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Gained valuable experience at TCS in technical support, resolving 30+ customer issues daily and mentoring new team members, while sharpening problem-solving and communication skills.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Passionate about building scalable web applications and eager to contribute to real-world projects that make a difference
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-1 rounded-2xl">
                <div className="bg-gray-800 rounded-2xl p-8 flex flex-col items-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    YA
                  </div>
                  <h3 className="text-xl font-bold mb-2">Yash Agarwal</h3>
                  <p className="text-gray-400">Web Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto"> 
          <div className="flex items-center justify-center mb-12">
            <span className="text-blue-400 text-3xl ">02.</span>
            <h2 className="text-4xl font-bold ml-4">Skills & Technologies</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all transform hover:scale-105">
                <div className="text-3xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm hover:bg-purple-600" >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <span className="text-blue-400 text-3xl">03.</span>
            <h2 className="text-4xl font-bold ml-4">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 justify-center ">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{project.icon}</span>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm hover:bg-purple-600">
                      {tag}
                    </span>
                  ))}
                </div>

              <div className="flex gap-4 mt-4 ">
                {/* <!-- Code Button --> */}
                <a href={project.githubrepo} target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-blue-500 text-blue-400 rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-200 no-underline">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 18l6-6-6-6"/>
                        <path d="M8 6l-6 6 6 6"/>
                    </svg>
                    Code
                </a>

                {/* <!-- View Project Button --> */}
                <a href={project.livelink} target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md hover:from-purple-600 hover:to-pink-600 transition-all duration-200 no-underline">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14,2 14,8 20,8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10,9 9,9 8,9"/>
                    </svg>
                    View Project
                </a>
            </div>
               </div>
              
            ))}    
             </div>
             
          </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <span className="text-blue-400 text-3xl">04.</span>
            <h2 className="text-4xl font-bold ml-4">Education</h2>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">🎓 Bachelor of Science in Information Technology</h3>
                  <p className="text-gray-300">M.L. Dahanukar College, University of Mumbai</p>
                </div>
                <div className="text-right">
                  <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">Graduate</span>
                  <p className="text-gray-400 mt-2">2022</p>
                  <p className="text-gray-400">Mumbai, Maharashtra</p>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">🏆 Academic Highlights</h4>
                <p className="text-green-400 font-bold">CGPA: 8.85</p>
                <p className="text-gray-300 mt-2">
                  Demonstrated  Strong academic performance with focus on programming fundamentals, database systems, 
                  web technologies, and software engineering principles.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">📚 Key Subjects:</h4>
                <div className="flex flex-wrap gap-2">
                  {["Web Programming", "Database Systems", "Software Engineering", "Data Structures", "Computer Networks"].map((subject, index) => (
                    <span key={index} className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">🎓 Higher Secondary (PCM)</h3>
                  <p className="text-gray-300">Elphinstone College, University of Mumbai</p>
                </div>
                <div className="text-right">
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">Higher Secondary</span>
                  <p className="text-gray-400 mt-2">2020</p>
                  <p className="text-gray-400">Percentage: 58.92%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <span className="text-blue-400 text-3xl">05.</span>
            <h2 className="text-4xl font-bold ml-4">Work Experience</h2>
          </div>
          <div className="bg-gray-800 rounded-xl p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Technical Support Executive</h3>
                <p className="text-blue-400 text-lg">Tata Consultancy Services (TCS)</p>
                <p className="text-gray-400">AGL Client</p>
              </div>
              <div className="text-right">
                <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">Full-time</span>
                <p className="text-gray-400 mt-2">Jun 2023 – Jun 2024</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3">🎯 Key Responsibilities</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Operational Efficiency : Resolved 30+ customer issues daily (WiFi & SIM), ensuring timely and effective support.</li>
                  <li>• Performance Excellence: Consistently exceeded performance targets through strong problem-solving skills and attention to detail.</li>
                  <li>• Training & Development: Mentored and onboarded new team members, contributing to a collaborative and high-performing work environment.</li>
                  <li>• Team Collaboration: Worked closely with a 20-member support team, enhancing communication and streamlining troubleshooting workflows.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">🏆 Achievements</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Resolved 2000+ customer cases with high satisfaction scores</li>
                  <li>• Gained recognition from leadership for consistently providing high-quality technical support.</li>
                  <li>• Enhanced problem-solving, debugging, and troubleshooting skills, which can be applied to debugging in web development. </li>
                  <li>• Enhanced client communication abilities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <span className="text-blue-400 text-3xl ">06.</span>
            <h2 className="text-4xl font-bold ml-4">Certifications & Languages</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">🏅 Certifications</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm mr-3">Networking</span>
                  <span className="text-gray-300">Cisco Certified Network Associate (CCNA)</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm mr-3">Office</span>
                  <span className="text-gray-300">Advanced Excel Certification</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">🌐 Languages</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">English</span>
                  <span className="text-green-400">Professional Proficiency</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Hindi</span>
                  <span className="text-green-400">Professional Proficiency</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Marathi</span>
                  <span className="text-green-400">Professional Proficiency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <span className="text-blue-400 text-3xl ">07.</span>
            <h2 className="text-4xl font-bold ml-4">Get In Touch</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Build Something Amazing Together</h3> 
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always open to exploring new opportunities and innovative projects. Whether you’re looking for support with web development, need expertise in React applications, or simply want to connect and chat about technology and career possibilities, I'd love to hear from you!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-6 h-6 text-white"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></div>
                  <div> 
                    <h4 className="text-lg font-semibold"> &nbsp; Email</h4>
                    <p className="text-gray-400">&nbsp; yasha9340@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-6 h-6 text-white"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
                  <div>
                    <h4 className="text-lg font-semibold">&nbsp; Location</h4>
                    <p className="text-gray-400">&nbsp; Mumbai, Maharashtra, India</p>
                  </div>
                </div>  

                <div className="flex items-center ">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-6 h-6 text-white"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
                  <div>
                    <h4 className="text-lg font-semibold">&nbsp; Phone</h4>
                    <p className="text-gray-400">&nbsp; +91 8369200915</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
              <p className="text-gray-400 mb-6">Complete the form below and I'll get back to you within 24 hours.</p>
              
              {/* Success Message */}
              {success && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="text-green-400 text-xl">✓</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-green-800 font-medium">{success}</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={(e) => {
                e.preventDefault()
                validateForm()
               }}
                onKeyDown={handleKeyDown}
                className="space-y-6" >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 text-white ${
                      errors.name
                        ? 'border-red-400 focus:border-red-500 focus:ring-red-200'
                        : 'border-gray-600 focus:border-blue-500 focus:ring-blue-200'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <span className="mr-1">⚠</span>
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 text-white ${
                      errors.email
                        ? 'border-red-400 focus:border-red-500 focus:ring-red-200'
                        : 'border-gray-600 focus:border-blue-500 focus:ring-blue-200'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <span className="mr-1">⚠</span>
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message"
                    rows="4"
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 resize-none text-white ${
                      errors.message
                        ? 'border-red-400 focus:border-red-500 focus:ring-red-200'
                        : 'border-gray-600 focus:border-blue-500 focus:ring-blue-200'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <span className="mr-1">⚠</span>
                      {errors.message}
                    </p>
                  )}
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  ✈️ Send Message
                </button>
            </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Top: Links + Social */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand / Name */}
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Yash Agarwal
            </div>

            {/* Quick Links */}
            <div className="flex space-x-6 text-gray-400">
              <a href="#about" className="hover:text-blue-400 transition">About</a>
              <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-5 text-gray-400">
              <a href="https://github.com/ayash2004" target="_blank" className="hover:text-blue-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.3-1.28-1.65-1.28-1.65-1.05-.7.08-.68.08-.68 1.16.08 1.77 1.2 1.77 1.2 1.04 1.77 2.73 1.26 3.4.96.1-.75.41-1.26.75-1.55-2.55-.3-5.23-1.27-5.23-5.65 0-1.25.44-2.28 1.16-3.08-.12-.3-.5-1.52.1-3.18 0 0 .96-.3 3.14 1.18a10.94 10.94 0 0 1 5.72 0c2.18-1.48 3.14-1.18 3.14-1.18.6 1.66.22 2.88.1 3.18.72.8 1.16 1.83 1.16 3.08 0 4.4-2.68 5.35-5.24 5.64.42.37.8 1.1.8 2.22v3.3c0 .31.2.66.8.55A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/yashagarwal2004" target="_blank" className="hover:text-blue-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.77 0 5-2.24 5-5v-14c0-2.76-2.23-5-5-5zM8.34 20h-3.03v-9.9h3.03V20zM6.82 8.65c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76c.97 0 1.76.79 1.76 1.76s-.79 1.76-1.76 1.76zM20 20h-3.03v-5.33c0-1.27-.03-2.91-1.77-2.91-1.77 0-2.04 1.38-2.04 2.82V20h-3.03v-9.9h2.9v1.35h.04c.4-.75 1.38-1.55 2.85-1.55 3.05 0 3.61 2 3.61 4.59V20z"/>
                </svg>
              </a>
               <a href="mailto:agrawalyash329@gmail.com" className="hover:text-blue-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 
                  1.1.9 2 2 2h16c1.1 0 2-.9 
                  2-2V6c0-1.1-.9-2-2-2zm0 
                  4-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom: Copyright */}
          <div className="text-center text-gray-500 text-sm mt-8">
            © {new Date().getFullYear()} Yash Sharad Agarwal. Built with 💙 React & Tailwind CSS.
          </div>
        </div>
      </footer>

      {/* Footer */}
      {/* <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Yash Sharad Agarwal. Built with React & Tailwind CSS.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="mailto:agrawalyash329@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
              <span className="text-2xl">📧</span>
            </a>
            <a href="tel:8369200915" className="text-gray-400 hover:text-blue-400 transition-colors">
              <span className="text-2xl">📞</span>
            </a>
          </div>
        </div>
      </footer> */}
    </div>
  )
}

export default App