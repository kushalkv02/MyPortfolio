// Add type declaration for particlesJS
declare const particlesJS: any

// Particle.js configuration
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#6366f1",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#6366f1",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
})

// Mobile navigation
const hamburger = document.querySelector(".hamburger") as HTMLElement
const navMenu = document.querySelector(".nav-menu") as HTMLElement

hamburger?.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu?.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger?.classList.remove("active")
    navMenu?.classList.remove("active")
  }),
)

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e: Event) {
    e.preventDefault()
    const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href")
    const target = document.querySelector(href!) as HTMLElement
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Fix the project expansion button event handling by ensuring it works properly

// Replace the existing project card click handlers section with this improved version:

// Project card click handlers - Fixed event handling
document.addEventListener("DOMContentLoaded", () => {
  // Wait for DOM to be fully loaded before attaching event listeners

  // Add click event to each expand button specifically
  const attachExpandListeners = () => {
    const expandButtons = document.querySelectorAll(".project-expand")

    expandButtons.forEach((button, index) => {
      // Remove any existing listeners
      button.replaceWith(button.cloneNode(true))
    })

    // Re-select after cloning
    const newExpandButtons = document.querySelectorAll(".project-expand")

    newExpandButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault()
        e.stopPropagation()

        console.log("Expand button clicked!") // Debug log

        const target = e.currentTarget as HTMLElement
        const projectCard = target.closest(".project-card") as HTMLElement
        if (!projectCard) {
          console.log("No project card found")
          return
        }

        const projectType = projectCard.getAttribute("data-project") as keyof typeof projectData
        console.log("Project type:", projectType) // Debug log

        if (projectData[projectType]) {
          const modal = document.getElementById("projectModal") as HTMLElement
          const modalContent = document.getElementById("modalContent") as HTMLElement

          if (modal && modalContent) {
            modalContent.innerHTML = projectData[projectType].description
            modal.style.display = "block"
            document.body.style.overflow = "hidden"
            console.log("Modal should be open now") // Debug log
          } else {
            console.log("Modal elements not found")
          }
        } else {
          console.log("Project data not found for:", projectType)
        }
      })
    })
  }

  // Call the function to attach listeners
  attachExpandListeners()

  // Also attach listeners after a short delay to ensure DOM is ready
  setTimeout(attachExpandListeners, 100)
})

// Close modal - Move this inside DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("projectModal") as HTMLElement
  const closeBtn = document.querySelector(".close") as HTMLElement

  closeBtn?.addEventListener("click", () => {
    modal.style.display = "none"
    document.body.style.overflow = "auto"
  })

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none"
      document.body.style.overflow = "auto"
    }
  })
})

// Contact form handling
const contactForm = document.getElementById("contactForm") as HTMLFormElement
contactForm?.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = new FormData(contactForm)
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  // Simple validation
  if (!name || !email || !message) {
    alert("Please fill in all fields")
    return
  }

  // Simulate form submission
  alert("Thank you for your message! I'll get back to you soon.")
  contactForm.reset()
})

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar") as HTMLElement
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(15, 23, 42, 0.98)"
  } else {
    navbar.style.background = "rgba(15, 23, 42, 0.95)"
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in")
    }
  })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll(".project-card, .timeline-item, .achievement-card, .contact-item").forEach((el) => {
  observer.observe(el)
})

// Add CSS for intersection observer animations
const style = document.createElement("style")
style.textContent = `
    .project-card,
    .timeline-item,
    .achievement-card,
    .contact-item {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 1rem 0;
    }
    
    .tech-item {
        background: var(--gradient-1);
        color: white;
        padding: 0.3rem 0.8rem;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 500;
    }
    
    .project-links-modal {
        margin-top: 2rem;
        text-align: center;
    }
    
    .project-links-modal .btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    #modalContent h3 {
        color: var(--primary-color);
        margin-bottom: 1rem;
    }
    
    #modalContent h4 {
        color: var(--text-primary);
        margin: 1.5rem 0 0.5rem 0;
    }
    
    #modalContent p {
        color: var(--text-secondary);
        line-height: 1.6;
        margin-bottom: 1rem;
    }
    
    #modalContent ul {
        color: var(--text-secondary);
        margin-bottom: 1rem;
        padding-left: 1.5rem;
    }
    
    #modalContent li {
        margin-bottom: 0.5rem;
        line-height: 1.5;
    }
    
    #modalContent strong {
        color: var(--text-primary);
    }
`
document.head.appendChild(style)

// Add typing effect to hero subtitle
const subtitle = document.querySelector(".hero-subtitle") as HTMLElement
if (subtitle) {
  const text = subtitle.textContent || ""
  subtitle.textContent = ""

  let i = 0
  const typeWriter = () => {
    if (i < text.length) {
      subtitle.textContent += text.charAt(i)
      i++
      setTimeout(typeWriter, 100)
    }
  }

  setTimeout(typeWriter, 1000)
}

// Update the medical chatbot project data with more comprehensive content
const projectData = {
  "sign-language": {
    title: "Sign Language Detection Project",
    description: `
            <h3>Real-time Sign Language Detection System</h3>
            <p>This project demonstrates the power of computer vision and machine learning in creating assistive technology solutions. The system can detect and interpret sign language gestures in real-time, making communication more accessible.</p>
            
            <h4>Key Features:</h4>
            <ul>
                <li><strong>Real-time Detection:</strong> Uses Mediapipe for hand landmark extraction and tracking</li>
                <li><strong>Custom Neural Network:</strong> Trained deep learning model for gesture classification</li>
                <li><strong>Web Integration:</strong> JavaScript frontend with webcam feed integration</li>
                <li><strong>REST API:</strong> Flask-based backend for live inference</li>
                <li><strong>Accessibility:</strong> Text-to-Speech functionality for auditory feedback</li>
                <li><strong>Stability:</strong> Confidence thresholding and prediction smoothing</li>
            </ul>
            
            <h4>Technical Implementation:</h4>
            <p>The system uses a multi-layered approach combining computer vision preprocessing, deep learning classification, and web technologies for deployment. The Mediapipe framework extracts 21 hand landmarks, which are then processed by a custom-trained neural network for gesture recognition.</p>
            
            <h4>Technologies Used:</h4>
            <div class="tech-stack">
                <span class="tech-item">Python</span>
                <span class="tech-item">TensorFlow</span>
                <span class="tech-item">Mediapipe</span>
                <span class="tech-item">Flask</span>
                <span class="tech-item">JavaScript</span>
                <span class="tech-item">HTML5</span>
                <span class="tech-item">WebRTC</span>
                <span class="tech-item">SpeechSynthesis API</span>
            </div>
            
            <div class="project-links-modal">
                <a href="https://github.com/kushalkv02/realtime-handsign-detection" target="_blank" class="btn btn-primary">
                    <i class="fab fa-github"></i> View on GitHub
                </a>
            </div>
        `,
    gradient: "var(--gradient-1)",
  },
  "secure-chat": {
    title: "Secure Chat Application",
    description: `
            <h3>End-to-End Encrypted Peer-to-Peer Chat</h3>
            <p>A sophisticated chat application implementing military-grade encryption protocols to ensure complete privacy and security in communications. This project demonstrates deep understanding of cryptographic principles and secure communication protocols.</p>
            
            <h4>Security Features:</h4>
            <ul>
                <li><strong>Diffie-Hellman Key Exchange:</strong> Secure key establishment without direct transmission</li>
                <li><strong>AES-CBC Encryption:</strong> Industry-standard symmetric encryption</li>
                <li><strong>Random IV Generation:</strong> Prevents plaintext attacks and ensures message uniqueness</li>
                <li><strong>Perfect Forward Secrecy:</strong> Each session uses unique encryption keys</li>
                <li><strong>Zero-Knowledge Architecture:</strong> No plaintext data stored or transmitted</li>
                <li><strong>Secure Socket Communication:</strong> Real-time encrypted message exchange</li>
            </ul>
            
            <h4>Cryptographic Implementation:</h4>
            <p>The application uses a hybrid approach combining asymmetric cryptography for key exchange and symmetric encryption for message transmission. The Diffie-Hellman protocol ensures that even if communications are intercepted, the encryption keys cannot be derived.</p>
            
            <h4>Architecture:</h4>
            <p>Built with modular components for key generation, encryption/decryption, and secure message transmission. The design follows security best practices with proper key management and secure random number generation.</p>
            
            <h4>Technologies Used:</h4>
            <div class="tech-stack">
                <span class="tech-item">Python</span>
                <span class="tech-item">Cryptography</span>
                <span class="tech-item">Sockets</span>
                <span class="tech-item">AES Encryption</span>
                <span class="tech-item">Diffie-Hellman</span>
                <span class="tech-item">pycryptodome</span>
            </div>
            
            <div class="project-links-modal">
                <a href="https://github.com/kushalkv02/secure-chat-cli" target="_blank" class="btn btn-primary">
                    <i class="fab fa-github"></i> View on GitHub
                </a>
            </div>
        `,
    gradient: "var(--gradient-2)",
  },
  "medical-chatbot": {
    title: "Medical QA Chatbot using RAG and OCR",
    description: `
            <h3>AI-Powered Medical Question Answering System</h3>
            <p>An advanced RAG (Retrieval-Augmented Generation) chatbot specifically designed for medical queries. This system combines the power of large language models with curated medical knowledge bases to provide accurate, contextual answers to healthcare questions.</p>
            
            <h4>🎯 Project Overview:</h4>
            <p>This comprehensive medical AI system addresses the critical need for accessible, accurate medical information by combining cutting-edge AI technologies with authoritative medical sources. The system serves as an intelligent medical assistant capable of understanding complex queries and providing evidence-based responses.</p>
            
            <h4>🚀 Core Capabilities:</h4>
            <ul>
                <li><strong>Domain-Specific RAG:</strong> Retrieval from WHO guidelines, medical handbooks, and peer-reviewed sources</li>
                <li><strong>Local LLM Inference:</strong> Phi-2 model running on Apple Silicon for complete privacy and data security</li>
                <li><strong>Advanced OCR Integration:</strong> Extract and process text from medical documents, prescriptions, and scanned reports</li>
                <li><strong>Semantic Search:</strong> ChromaDB with SentenceTransformer embeddings for contextually relevant information retrieval</li>
                <li><strong>Interactive Web UI:</strong> Streamlit-based interface for real-time interaction and file uploads</li>
                <li><strong>Multilingual Support:</strong> Translation modules for global accessibility across different languages</li>
                <li><strong>Regional Disease Filtering:</strong> Location-based medical information and disease prevalence data</li>
                <li><strong>Medical Document Analysis:</strong> Automated processing of medical reports, lab results, and prescriptions</li>
            </ul>
            
            <h4>🏗️ Technical Architecture:</h4>
            <p>The system employs a sophisticated multi-stage pipeline that ensures accuracy, relevance, and safety in medical information delivery:</p>
            <ul>
                <li><strong>Document Processing Pipeline:</strong> Automated ingestion and preprocessing of medical literature</li>
                <li><strong>Vector Embedding System:</strong> Advanced semantic understanding using state-of-the-art transformer models</li>
                <li><strong>Retrieval Mechanism:</strong> Intelligent context selection based on query similarity and medical relevance</li>
                <li><strong>Generation Pipeline:</strong> Contextually-aware response generation with medical accuracy validation</li>
                <li><strong>Safety Filters:</strong> Multiple layers of content validation to ensure medical appropriateness</li>
            </ul>
            
            <h4>📊 Data Processing Pipeline:</h4>
            <p>The system processes medical documents through a comprehensive pipeline:</p>
            <ul>
                <li><strong>Document Ingestion:</strong> Support for PDFs, images, and scanned documents using PyMuPDF and Tesseract OCR</li>
                <li><strong>Text Extraction & Cleaning:</strong> Advanced preprocessing to handle medical terminology and formatting</li>
                <li><strong>Chunking Strategy:</strong> Intelligent document segmentation preserving medical context and relationships</li>
                <li><strong>Embedding Generation:</strong> High-dimensional vector representations using specialized medical embeddings</li>
                <li><strong>Vector Storage:</strong> Optimized ChromaDB implementation for fast similarity search and retrieval</li>
            </ul>
            
            <h4>🔒 Privacy & Security Features:</h4>
            <ul>
                <li><strong>Local Processing:</strong> All sensitive data processed locally without external API calls</li>
                <li><strong>Data Encryption:</strong> End-to-end encryption for uploaded medical documents</li>
                <li><strong>HIPAA Compliance Ready:</strong> Architecture designed with healthcare privacy regulations in mind</li>
                <li><strong>Audit Logging:</strong> Comprehensive logging for compliance and monitoring</li>
                <li><strong>Access Controls:</strong> Role-based access and authentication mechanisms</li>
            </ul>
            
            <h4>⚡ Performance Optimizations:</h4>
            <ul>
                <li><strong>Efficient Inference:</strong> Optimized llama-cpp implementation for Apple Silicon</li>
                <li><strong>Caching System:</strong> Intelligent caching of frequently accessed medical information</li>
                <li><strong>Batch Processing:</strong> Optimized document processing for large medical databases</li>
                <li><strong>Memory Management:</strong> Efficient handling of large medical datasets and embeddings</li>
            </ul>
            
            <h4>🌐 Use Cases & Applications:</h4>
            <ul>
                <li><strong>Medical Education:</strong> Interactive learning tool for medical students and professionals</li>
                <li><strong>Clinical Decision Support:</strong> Quick access to medical guidelines and best practices</li>
                <li><strong>Patient Education:</strong> Simplified medical information for patient understanding</li>
                <li><strong>Research Assistance:</strong> Rapid literature review and medical research support</li>
                <li><strong>Telemedicine Support:</strong> AI-assisted consultation and diagnosis support</li>
            </ul>
            
            <h4>🔧 Technologies Used:</h4>
            <div class="tech-stack">
                <span class="tech-item">Python</span>
                <span class="tech-item">Phi-2 LLM</span>
                <span class="tech-item">RAG Architecture</span>
                <span class="tech-item">ChromaDB</span>
                <span class="tech-item">SentenceTransformers</span>
                <span class="tech-item">PyMuPDF</span>
                <span class="tech-item">Tesseract OCR</span>
                <span class="tech-item">Streamlit</span>
                <span class="tech-item">llama-cpp</span>
                <span class="tech-item">Langchain</span>
                <span class="tech-item">Hugging Face</span>
                <span class="tech-item">OpenCV</span>
            </div>
            
            <h4>📈 Future Enhancements:</h4>
            <ul>
                <li><strong>Multi-Modal Support:</strong> Integration of medical imaging analysis</li>
                <li><strong>Voice Interface:</strong> Speech-to-text and text-to-speech capabilities</li>
                <li><strong>Mobile Application:</strong> Cross-platform mobile app development</li>
                <li><strong>API Integration:</strong> Healthcare system integration capabilities</li>
                <li><strong>Real-time Updates:</strong> Continuous learning from latest medical research</li>
            </ul>
            
            <div class="project-links-modal">
                <a href="https://github.com/kushalkv02/medical-QA-chatbot" target="_blank" class="btn btn-primary">
                    <i class="fab fa-github"></i> View on GitHub
                </a>
            </div>
        `,
    gradient: "var(--gradient-3)",
  },
}
