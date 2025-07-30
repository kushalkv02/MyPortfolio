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
});
// Mobile navigation
var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".nav-menu");
hamburger === null || hamburger === void 0 ? void 0 : hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu === null || navMenu === void 0 ? void 0 : navMenu.classList.toggle("active");
});
// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach(function (n) {
    return n.addEventListener("click", function () {
        hamburger === null || hamburger === void 0 ? void 0 : hamburger.classList.remove("active");
        navMenu === null || navMenu === void 0 ? void 0 : navMenu.classList.remove("active");
    });
});
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        var href = e.currentTarget.getAttribute("href");
        var target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});
// Fix the project expansion button event handling by ensuring it works properly
// Replace the existing project card click handlers section with this improved version:
// Project card click handlers - Fixed event handling
document.addEventListener("DOMContentLoaded", function () {
    // Wait for DOM to be fully loaded before attaching event listeners
    // Add click event to each expand button specifically
    var attachExpandListeners = function () {
        var expandButtons = document.querySelectorAll(".project-expand");
        expandButtons.forEach(function (button, index) {
            // Remove any existing listeners
            button.replaceWith(button.cloneNode(true));
        });
        // Re-select after cloning
        var newExpandButtons = document.querySelectorAll(".project-expand");
        newExpandButtons.forEach(function (button) {
            button.addEventListener("click", function (e) {
                e.preventDefault();
                e.stopPropagation();
                console.log("Expand button clicked!"); // Debug log
                var target = e.currentTarget;
                var projectCard = target.closest(".project-card");
                if (!projectCard) {
                    console.log("No project card found");
                    return;
                }
                var projectType = projectCard.getAttribute("data-project");
                console.log("Project type:", projectType); // Debug log
                if (projectData[projectType]) {
                    var modal = document.getElementById("projectModal");
                    var modalContent = document.getElementById("modalContent");
                    if (modal && modalContent) {
                        modalContent.innerHTML = projectData[projectType].description;
                        modal.style.display = "block";
                        document.body.style.overflow = "hidden";
                        console.log("Modal should be open now"); // Debug log
                    }
                    else {
                        console.log("Modal elements not found");
                    }
                }
                else {
                    console.log("Project data not found for:", projectType);
                }
            });
        });
    };
    // Call the function to attach listeners
    attachExpandListeners();
    // Also attach listeners after a short delay to ensure DOM is ready
    setTimeout(attachExpandListeners, 100);
});
// Close modal - Move this inside DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("projectModal");
    var closeBtn = document.querySelector(".close");
    closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });
    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
});
// Contact form handling
var contactForm = document.getElementById("contactForm");
contactForm === null || contactForm === void 0 ? void 0 : contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Get form data
    var formData = new FormData(contactForm);
    var name = formData.get("name");
    var email = formData.get("email");
    var message = formData.get("message");
    // Simple validation
    if (!name || !email || !message) {
        alert("Please fill in all fields");
        return;
    }
    // Simulate form submission
    alert("Thank you for your message! I'll get back to you soon.");
    contactForm.reset();
});
// Navbar scroll effect
window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
        navbar.style.background = "rgba(15, 23, 42, 0.98)";
    }
    else {
        navbar.style.background = "rgba(15, 23, 42, 0.95)";
    }
});
// Intersection Observer for animations
var observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
};
var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
        }
    });
}, observerOptions);
// Observe elements for animation
document.querySelectorAll(".project-card, .timeline-item, .achievement-card, .contact-item").forEach(function (el) {
    observer.observe(el);
});
// Add CSS for intersection observer animations
var style = document.createElement("style");
style.textContent = "\n    .project-card,\n    .timeline-item,\n    .achievement-card,\n    .contact-item {\n        opacity: 0;\n        transform: translateY(30px);\n        transition: all 0.6s ease;\n    }\n    \n    .animate-in {\n        opacity: 1 !important;\n        transform: translateY(0) !important;\n    }\n    \n    .tech-stack {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 0.5rem;\n        margin: 1rem 0;\n    }\n    \n    .tech-item {\n        background: var(--gradient-1);\n        color: white;\n        padding: 0.3rem 0.8rem;\n        border-radius: 15px;\n        font-size: 0.8rem;\n        font-weight: 500;\n    }\n    \n    .project-links-modal {\n        margin-top: 2rem;\n        text-align: center;\n    }\n    \n    .project-links-modal .btn {\n        display: inline-flex;\n        align-items: center;\n        gap: 0.5rem;\n    }\n    \n    #modalContent h3 {\n        color: var(--primary-color);\n        margin-bottom: 1rem;\n    }\n    \n    #modalContent h4 {\n        color: var(--text-primary);\n        margin: 1.5rem 0 0.5rem 0;\n    }\n    \n    #modalContent p {\n        color: var(--text-secondary);\n        line-height: 1.6;\n        margin-bottom: 1rem;\n    }\n    \n    #modalContent ul {\n        color: var(--text-secondary);\n        margin-bottom: 1rem;\n        padding-left: 1.5rem;\n    }\n    \n    #modalContent li {\n        margin-bottom: 0.5rem;\n        line-height: 1.5;\n    }\n    \n    #modalContent strong {\n        color: var(--text-primary);\n    }\n";
document.head.appendChild(style);
// Add typing effect to hero subtitle
var subtitle = document.querySelector(".hero-subtitle");
if (subtitle) {
    var text_1 = subtitle.textContent || "";
    subtitle.textContent = "";
    var i_1 = 0;
    var typeWriter_1 = function () {
        if (i_1 < text_1.length) {
            subtitle.textContent += text_1.charAt(i_1);
            i_1++;
            setTimeout(typeWriter_1, 100);
        }
    };
    setTimeout(typeWriter_1, 1000);
}
// Update the medical chatbot project data with more comprehensive content
var projectData = {
    "sign-language": {
        title: "Sign Language Detection Project",
        description: "\n            <h3>Real-time Sign Language Detection System</h3>\n            <p>This project demonstrates the power of computer vision and machine learning in creating assistive technology solutions. The system can detect and interpret sign language gestures in real-time, making communication more accessible.</p>\n            \n            <h4>Key Features:</h4>\n            <ul>\n                <li><strong>Real-time Detection:</strong> Uses Mediapipe for hand landmark extraction and tracking</li>\n                <li><strong>Custom Neural Network:</strong> Trained deep learning model for gesture classification</li>\n                <li><strong>Web Integration:</strong> JavaScript frontend with webcam feed integration</li>\n                <li><strong>REST API:</strong> Flask-based backend for live inference</li>\n                <li><strong>Accessibility:</strong> Text-to-Speech functionality for auditory feedback</li>\n                <li><strong>Stability:</strong> Confidence thresholding and prediction smoothing</li>\n            </ul>\n            \n            <h4>Technical Implementation:</h4>\n            <p>The system uses a multi-layered approach combining computer vision preprocessing, deep learning classification, and web technologies for deployment. The Mediapipe framework extracts 21 hand landmarks, which are then processed by a custom-trained neural network for gesture recognition.</p>\n            \n            <h4>Technologies Used:</h4>\n            <div class=\"tech-stack\">\n                <span class=\"tech-item\">Python</span>\n                <span class=\"tech-item\">TensorFlow</span>\n                <span class=\"tech-item\">Mediapipe</span>\n                <span class=\"tech-item\">Flask</span>\n                <span class=\"tech-item\">JavaScript</span>\n                <span class=\"tech-item\">HTML5</span>\n                <span class=\"tech-item\">WebRTC</span>\n                <span class=\"tech-item\">SpeechSynthesis API</span>\n            </div>\n            \n            <div class=\"project-links-modal\">\n                <a href=\"https://github.com/kushalkv02/realtime-handsign-detection\" target=\"_blank\" class=\"btn btn-primary\">\n                    <i class=\"fab fa-github\"></i> View on GitHub\n                </a>\n            </div>\n        ",
        gradient: "var(--gradient-1)",
    },
    "secure-chat": {
        title: "Secure Chat Application",
        description: "\n            <h3>End-to-End Encrypted Peer-to-Peer Chat</h3>\n            <p>A sophisticated chat application implementing military-grade encryption protocols to ensure complete privacy and security in communications. This project demonstrates deep understanding of cryptographic principles and secure communication protocols.</p>\n            \n            <h4>Security Features:</h4>\n            <ul>\n                <li><strong>Diffie-Hellman Key Exchange:</strong> Secure key establishment without direct transmission</li>\n                <li><strong>AES-CBC Encryption:</strong> Industry-standard symmetric encryption</li>\n                <li><strong>Random IV Generation:</strong> Prevents plaintext attacks and ensures message uniqueness</li>\n                <li><strong>Perfect Forward Secrecy:</strong> Each session uses unique encryption keys</li>\n                <li><strong>Zero-Knowledge Architecture:</strong> No plaintext data stored or transmitted</li>\n                <li><strong>Secure Socket Communication:</strong> Real-time encrypted message exchange</li>\n            </ul>\n            \n            <h4>Cryptographic Implementation:</h4>\n            <p>The application uses a hybrid approach combining asymmetric cryptography for key exchange and symmetric encryption for message transmission. The Diffie-Hellman protocol ensures that even if communications are intercepted, the encryption keys cannot be derived.</p>\n            \n            <h4>Architecture:</h4>\n            <p>Built with modular components for key generation, encryption/decryption, and secure message transmission. The design follows security best practices with proper key management and secure random number generation.</p>\n            \n            <h4>Technologies Used:</h4>\n            <div class=\"tech-stack\">\n                <span class=\"tech-item\">Python</span>\n                <span class=\"tech-item\">Cryptography</span>\n                <span class=\"tech-item\">Sockets</span>\n                <span class=\"tech-item\">AES Encryption</span>\n                <span class=\"tech-item\">Diffie-Hellman</span>\n                <span class=\"tech-item\">pycryptodome</span>\n            </div>\n            \n            <div class=\"project-links-modal\">\n                <a href=\"https://github.com/kushalkv02/secure-chat-cli\" target=\"_blank\" class=\"btn btn-primary\">\n                    <i class=\"fab fa-github\"></i> View on GitHub\n                </a>\n            </div>\n        ",
        gradient: "var(--gradient-2)",
    },
    "medical-chatbot": {
        title: "Medical QA Chatbot using RAG and OCR",
        description: "\n            <h3>AI-Powered Medical Question Answering System</h3>\n            <p>An advanced RAG (Retrieval-Augmented Generation) chatbot specifically designed for medical queries. This system combines the power of large language models with curated medical knowledge bases to provide accurate, contextual answers to healthcare questions.</p>\n            \n            <h4>\uD83C\uDFAF Project Overview:</h4>\n            <p>This comprehensive medical AI system addresses the critical need for accessible, accurate medical information by combining cutting-edge AI technologies with authoritative medical sources. The system serves as an intelligent medical assistant capable of understanding complex queries and providing evidence-based responses.</p>\n            \n            <h4>\uD83D\uDE80 Core Capabilities:</h4>\n            <ul>\n                <li><strong>Domain-Specific RAG:</strong> Retrieval from WHO guidelines, medical handbooks, and peer-reviewed sources</li>\n                <li><strong>Local LLM Inference:</strong> Phi-2 model running on Apple Silicon for complete privacy and data security</li>\n                <li><strong>Advanced OCR Integration:</strong> Extract and process text from medical documents, prescriptions, and scanned reports</li>\n                <li><strong>Semantic Search:</strong> ChromaDB with SentenceTransformer embeddings for contextually relevant information retrieval</li>\n                <li><strong>Interactive Web UI:</strong> Streamlit-based interface for real-time interaction and file uploads</li>\n                <li><strong>Multilingual Support:</strong> Translation modules for global accessibility across different languages</li>\n                <li><strong>Regional Disease Filtering:</strong> Location-based medical information and disease prevalence data</li>\n                <li><strong>Medical Document Analysis:</strong> Automated processing of medical reports, lab results, and prescriptions</li>\n            </ul>\n            \n            <h4>\uD83C\uDFD7\uFE0F Technical Architecture:</h4>\n            <p>The system employs a sophisticated multi-stage pipeline that ensures accuracy, relevance, and safety in medical information delivery:</p>\n            <ul>\n                <li><strong>Document Processing Pipeline:</strong> Automated ingestion and preprocessing of medical literature</li>\n                <li><strong>Vector Embedding System:</strong> Advanced semantic understanding using state-of-the-art transformer models</li>\n                <li><strong>Retrieval Mechanism:</strong> Intelligent context selection based on query similarity and medical relevance</li>\n                <li><strong>Generation Pipeline:</strong> Contextually-aware response generation with medical accuracy validation</li>\n                <li><strong>Safety Filters:</strong> Multiple layers of content validation to ensure medical appropriateness</li>\n            </ul>\n            \n            <h4>\uD83D\uDCCA Data Processing Pipeline:</h4>\n            <p>The system processes medical documents through a comprehensive pipeline:</p>\n            <ul>\n                <li><strong>Document Ingestion:</strong> Support for PDFs, images, and scanned documents using PyMuPDF and Tesseract OCR</li>\n                <li><strong>Text Extraction & Cleaning:</strong> Advanced preprocessing to handle medical terminology and formatting</li>\n                <li><strong>Chunking Strategy:</strong> Intelligent document segmentation preserving medical context and relationships</li>\n                <li><strong>Embedding Generation:</strong> High-dimensional vector representations using specialized medical embeddings</li>\n                <li><strong>Vector Storage:</strong> Optimized ChromaDB implementation for fast similarity search and retrieval</li>\n            </ul>\n            \n            <h4>\uD83D\uDD12 Privacy & Security Features:</h4>\n            <ul>\n                <li><strong>Local Processing:</strong> All sensitive data processed locally without external API calls</li>\n                <li><strong>Data Encryption:</strong> End-to-end encryption for uploaded medical documents</li>\n                <li><strong>HIPAA Compliance Ready:</strong> Architecture designed with healthcare privacy regulations in mind</li>\n                <li><strong>Audit Logging:</strong> Comprehensive logging for compliance and monitoring</li>\n                <li><strong>Access Controls:</strong> Role-based access and authentication mechanisms</li>\n            </ul>\n            \n            <h4>\u26A1 Performance Optimizations:</h4>\n            <ul>\n                <li><strong>Efficient Inference:</strong> Optimized llama-cpp implementation for Apple Silicon</li>\n                <li><strong>Caching System:</strong> Intelligent caching of frequently accessed medical information</li>\n                <li><strong>Batch Processing:</strong> Optimized document processing for large medical databases</li>\n                <li><strong>Memory Management:</strong> Efficient handling of large medical datasets and embeddings</li>\n            </ul>\n            \n            <h4>\uD83C\uDF10 Use Cases & Applications:</h4>\n            <ul>\n                <li><strong>Medical Education:</strong> Interactive learning tool for medical students and professionals</li>\n                <li><strong>Clinical Decision Support:</strong> Quick access to medical guidelines and best practices</li>\n                <li><strong>Patient Education:</strong> Simplified medical information for patient understanding</li>\n                <li><strong>Research Assistance:</strong> Rapid literature review and medical research support</li>\n                <li><strong>Telemedicine Support:</strong> AI-assisted consultation and diagnosis support</li>\n            </ul>\n            \n            <h4>\uD83D\uDD27 Technologies Used:</h4>\n            <div class=\"tech-stack\">\n                <span class=\"tech-item\">Python</span>\n                <span class=\"tech-item\">Phi-2 LLM</span>\n                <span class=\"tech-item\">RAG Architecture</span>\n                <span class=\"tech-item\">ChromaDB</span>\n                <span class=\"tech-item\">SentenceTransformers</span>\n                <span class=\"tech-item\">PyMuPDF</span>\n                <span class=\"tech-item\">Tesseract OCR</span>\n                <span class=\"tech-item\">Streamlit</span>\n                <span class=\"tech-item\">llama-cpp</span>\n                <span class=\"tech-item\">Langchain</span>\n                <span class=\"tech-item\">Hugging Face</span>\n                <span class=\"tech-item\">OpenCV</span>\n            </div>\n            \n            <h4>\uD83D\uDCC8 Future Enhancements:</h4>\n            <ul>\n                <li><strong>Multi-Modal Support:</strong> Integration of medical imaging analysis</li>\n                <li><strong>Voice Interface:</strong> Speech-to-text and text-to-speech capabilities</li>\n                <li><strong>Mobile Application:</strong> Cross-platform mobile app development</li>\n                <li><strong>API Integration:</strong> Healthcare system integration capabilities</li>\n                <li><strong>Real-time Updates:</strong> Continuous learning from latest medical research</li>\n            </ul>\n            \n            <div class=\"project-links-modal\">\n                <a href=\"https://github.com/kushalkv02/medical-QA-chatbot\" target=\"_blank\" class=\"btn btn-primary\">\n                    <i class=\"fab fa-github\"></i> View on GitHub\n                </a>\n            </div>\n        ",
        gradient: "var(--gradient-3)",
    },
};
