<template>
    <Frame leftHeader="By Ubaid Ur Rehman Dar" centerHeader="Portfolio Presentation" rightHeader="Frontend Developer"
        footerText="03" bgClass="bg-white">
        <transition name="fade-up">
            <div class="projects-content" v-if="show">
                <button class="back-btn" @click="goHome" aria-label="Back to Home">
                    <span class="icon" aria-hidden="true">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18l-6-6 6-6" stroke="#FF7EB9" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </span>
                    <span class="back-text">Back</span>
                </button>
                <h1 class="pink-title">PROJECTS</h1>
                <p>
                    Here's a collection of projects that showcase my journey as a frontend developer and UI/UX enthusiast.
                    Each project reflects my passion for creating modern, user-friendly digital experiences.
                </p>
                
                <div class="projects-grid">
                    <div class="project-card">
                        <h3>Chakras</h3>
                        <p>A full-stack music streaming application inspired by Spotify. Built with React and the MERN stack, 
                           featuring user authentication, playlist creation, and a clean, intuitive interface for music discovery.</p>
                        <div class="project-links">
                            <button @click="openGallery('chakras')" class="gallery-btn">View Images</button>
                            <a href="https://github.com/UbaidUrRehmaanDar/khakras" target="_blank" rel="noopener">View Code</a>
                        </div>
                    </div>

                    <div class="project-card">
                        <h3>Rawty Shawty</h3>
                        <p>A Vue-based restaurant website showcasing an interactive menu and ordering flow. 
                           Deployed on Cloudflare Pages with playful UI design and smooth user interactions for food enthusiasts.</p>
                        <div class="project-links">
                            <button @click="openGallery('rawty-shawty')" class="gallery-btn">View Images</button>
                            <a href="https://rawty-shawty.pages.dev/" target="_blank" rel="noopener">Live Demo</a>
                            <a href="https://github.com/UbaidUrRehmaanDar/rawty-shawty" target="_blank" rel="noopener">View Code</a>
                        </div>
                    </div>

                    <div class="project-card">
                        <h3>Smart City Dashboard</h3>
                        <p>An interactive dashboard for visualizing smart city data and analytics. Built with modern React, 
                           featuring responsive design, data visualization, and real-time updates for urban planning insights.</p>
                        <div class="project-links">
                            <button @click="openGallery('sccd')" class="gallery-btn">View Images</button>
                            <a href="https://smart-city-dashboard.vercel.app/" target="_blank" rel="noopener">Live Demo</a>
                            <a href="https://github.com/UbaidUrRehmaanDar/sccd" target="_blank" rel="noopener">View Code</a>
                        </div>
                    </div>

                    <div class="project-card">
                        <h3>Smart RC Car</h3>
                        <p>An Arduino-based intelligent RC car with Bluetooth control and color sensor automation. 
                           Features voice command recognition for music playlists and automatic stopping when detecting red markers. 
                           Combines robotics, entertainment, and real-time environmental sensing.</p>
                        <div class="project-links">
                            <button @click="openGallery('rc-car')" class="gallery-btn">View Images</button>
                            <button @click="openDocumentation" class="gallery-btn">Documentation</button>
                        </div>
                    </div>
                </div>

                <p class="bottom-note">
                    Each project represents a step in my learning journey, combining creativity with technical skills 
                    to build meaningful digital experiences.
                </p>
            </div>
        </transition>

        <!-- Image Gallery Modal -->
        <div v-if="isGalleryOpen" class="gallery-overlay" @click="closeGallery">
            <div class="gallery-modal" @click.stop>
                <button class="close-btn" @click="closeGallery" aria-label="Close Gallery">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="#FF7EB9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                
                <div class="gallery-content">
                    <h3 class="gallery-title">{{ currentProject.title }} - Images</h3>
                    <div class="gallery-image-container">
                        <button 
                            class="nav-arrow left" 
                            @click="prevImage" 
                            :disabled="currentImageIndex === 0"
                            aria-label="Previous Image"
                        >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18l-6-6 6-6" stroke="#FF7EB9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        
                        <div class="image-display">
                            <img 
                                :src="currentProject.images[currentImageIndex]" 
                                :alt="`${currentProject.title} - Image ${currentImageIndex + 1}`"
                                class="gallery-image"
                            />
                            <div class="image-counter">
                                {{ currentImageIndex + 1 }} / {{ currentProject.images.length }}
                            </div>
                        </div>
                        
                        <button 
                            class="nav-arrow right" 
                            @click="nextImage" 
                            :disabled="currentImageIndex === currentProject.images.length - 1"
                            aria-label="Next Image"
                        >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18l6-6-6-6" stroke="#FF7EB9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    
                    <!-- Thumbnail strip -->
                    <div class="thumbnails">
                        <img 
                            v-for="(image, index) in currentProject.images" 
                            :key="index"
                            :src="image" 
                            :alt="`Thumbnail ${index + 1}`"
                            class="thumbnail"
                            :class="{ active: index === currentImageIndex }"
                            @click="currentImageIndex = index"
                        />
                    </div>
                </div>
            </div>
        </div>

        <!-- Documentation Modal -->
        <div v-if="isDocumentationOpen" class="gallery-overlay" @click="closeDocumentation">
            <div class="documentation-modal" @click.stop>
                <button class="close-btn" @click="closeDocumentation" aria-label="Close Documentation">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="#FF7EB9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                
                <div class="documentation-content">
                    <h3 class="doc-title">Smart RC Car - Documentation</h3>
                    <div class="doc-body">
                        <p><strong>Prepared by:</strong> Ubaid Ur Rehman Dar</p>
                        
                        <h4>Overview</h4>
                        <p>This project is a Smart RC Car controlled by Arduino, Bluetooth, and a TCS3200 color sensor. The car responds to voice commands sent via Bluetooth — if the user says "happy" or "sad", it plays the matching playlist while moving forward. When the color sensor detects a red marker, the car immediately stops both its movement and the music playback.</p>
                        
                        <p>The system combines entertainment and automation, showing how microcontrollers can handle real-time user input and environmental sensing. It uses Arduino Uno, HC-05 Bluetooth module, L298N motor driver, DC motors with a chassis, a TCS3200 sensor, and speakers for music output.</p>
                        
                        <h4>Testing Results</h4>
                        <p>The car worked reliably in tests: commands were received quickly, playlists played correctly, and the sensor consistently detected red markers.</p>
                        
                        <h4>Limitations</h4>
                        <ul>
                            <li>Only two commands available</li>
                            <li>Light-sensitive color detection</li>
                            <li>Limited music playback capabilities</li>
                        </ul>
                        
                        <h4>Future Scope</h4>
                        <ul>
                            <li>Adding more voice commands</li>
                            <li>Better sensor integration</li>
                            <li>Autonomous navigation capabilities</li>
                        </ul>
                        
                        <h4>Conclusion</h4>
                        <p>The Smart RC Car demonstrates an interactive prototype blending robotics, music, and automation into one cohesive system.</p>
                    </div>
                </div>
            </div>
        </div>

        <BottomBar />
    </Frame>
</template>

<script setup>
import BottomBar from '../components/BottomBar.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import Frame from '../components/Frame.vue'

const router = useRouter()
const show = ref(false)
const isGalleryOpen = ref(false)
const isDocumentationOpen = ref(false)
const currentImageIndex = ref(0)
const currentProject = ref({})

// Project images data - replace these URLs with your actual image paths
const projectImages = {
    'chakras': {
        title: 'Chakras',
        images: [
            '/images/chakras/chakras-1.png',
            '/images/chakras/chakras-2.png',
            '/images/chakras/chakras-3.png'
        ]
    },
    'rawty-shawty': {
        title: 'Rawty Shawty',
        images: [
            '/images/rawty-shawty/rawty-1.png',
            '/images/rawty-shawty/rawty-2.png',
            '/images/rawty-shawty/rawty-3.png',
            '/images/rawty-shawty/rawty-4.png'
        ]
    },
    'sccd': {
        title: 'Smart City Dashboard',
        images: [
            '/images/sccd/sccd-1.png',
            '/images/sccd/sccd-2.png',
            '/images/sccd/sccd-3.png',
            '/images/sccd/sccd-4.png'
        ]
    },
    'rc-car': {
        title: 'Smart RC Car',
        images: [
            '/images/rc-car/rc-1.jpg'
        ]
    }
}

onMounted(() => {
    setTimeout(() => show.value = true, 120)
})

// Keyboard navigation
const handleKeyDown = (e) => {
    if (!isGalleryOpen.value && !isDocumentationOpen.value) return
    
    switch(e.key) {
        case 'ArrowLeft':
            if (isGalleryOpen.value) prevImage()
            break
        case 'ArrowRight':
            if (isGalleryOpen.value) nextImage()
            break
        case 'Escape':
            if (isGalleryOpen.value) closeGallery()
            if (isDocumentationOpen.value) closeDocumentation()
            break
    }
}

onMounted(() => {
    window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown)
})

function goHome() {
    router.push('/')
}

function openGallery(projectKey) {
    currentProject.value = projectImages[projectKey]
    currentImageIndex.value = 0
    isGalleryOpen.value = true
    document.body.style.overflow = 'hidden'
}

function closeGallery() {
    isGalleryOpen.value = false
    document.body.style.overflow = 'auto'
}

function openDocumentation() {
    isDocumentationOpen.value = true
    document.body.style.overflow = 'hidden'
}

function closeDocumentation() {
    isDocumentationOpen.value = false
    document.body.style.overflow = 'auto'
}

function prevImage() {
    if (currentImageIndex.value > 0) {
        currentImageIndex.value--
    }
}

function nextImage() {
    if (currentImageIndex.value < currentProject.value.images.length - 1) {
        currentImageIndex.value++
    }
}
</script>

<style scoped>
.projects-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: left;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    position: relative;
}

.pink-title {
    font-size: 3.8rem;
    font-weight: 900;
    color: #FF7EB9;
    margin-bottom: 1.5rem;
}

p {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
}

.project-card {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 12px;
    border: 2px solid transparent;
    transition: all 0.3s ease;
}

.project-card:hover {
    border-color: #FF7EB9;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 126, 185, 0.15);
}

.project-card h3 {
    color: #FF7EB9;
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
}

.project-card p {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 1rem;
}

.project-links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.project-links a,
.gallery-btn {
    color: #FF7EB9;
    text-decoration: none;
    font-weight: 600;
    padding: 0.4rem 0.8rem;
    border: 2px solid #FF7EB9;
    border-radius: 6px;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    background: transparent;
    cursor: pointer;
    font-family: inherit;
}

.project-links a:hover,
.gallery-btn:hover {
    background: #FF7EB9;
    color: white;
}

.bottom-note {
    font-style: italic;
    color: #666;
    text-align: center;
    margin-top: 2rem;
    font-size: 1.1rem;
}

.back-btn {
    position: absolute;
    top: -0.5rem;
    left: 0;
    background: transparent;
    border: none;
    color: #FF7EB9;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 8px;
    transition: background-color 0.2s;
}

.back-btn:hover {
    background: rgba(255, 126, 185, 0.1);
}

.back-text {
    font-family: inherit;
}

/* FIXED Gallery Modal Styles - NO MORE GAPS */
.gallery-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    backdrop-filter: blur(8px);
}

.gallery-modal {
    background: #1a1a1a;
    border-radius: 20px;
    max-width: 98vw;
    max-height: 98vh;
    width: 1400px;
    height: 900px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
}

.close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid #FF7EB9;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1001;
    transition: all 0.3s;
    backdrop-filter: blur(10px);
}

.close-btn:hover {
    background: #FF7EB9;
    transform: scale(1.1);
}

.close-btn:hover svg path {
    stroke: white;
}

.gallery-content {
    padding: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.gallery-title {
    color: #FF7EB9;
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
}

.gallery-image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex: 1;
    min-height: 0; /* Important for flex child */
}

.image-display {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    max-height: 700px;
}

.gallery-image {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 12px;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.4);
    /* Removed background and padding that was causing issues */
}

.image-counter {
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255, 126, 185, 0.9);
    color: white;
    padding: 8px 16px;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: 600;
    backdrop-filter: blur(10px);
}

.nav-arrow {
    background: rgba(255, 126, 185, 0.1);
    border: 3px solid #FF7EB9;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
    flex-shrink: 0;
    backdrop-filter: blur(10px);
}

.nav-arrow:hover:not(:disabled) {
    background: #FF7EB9;
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(255, 126, 185, 0.4);
}

.nav-arrow:hover:not(:disabled) svg path {
    stroke: white;
}

.nav-arrow:disabled {
    opacity: 0.3;
    cursor: not-allowed;
}

.nav-arrow svg {
    width: 40px;
    height: 40px;
}

.thumbnails {
    display: flex;
    gap: 12px;
    justify-content: center;
    overflow-x: auto;
    padding: 20px 0 10px 0;
    margin-top: auto; /* Push to bottom */
}

.thumbnail {
    width: 100px;
    height: 70px;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
    border: 3px solid transparent;
    transition: all 0.3s;
    flex-shrink: 0;
    background: #2a2a2a;
}

.thumbnail:hover {
    border-color: #FF7EB9;
    transform: scale(1.05);
}

.thumbnail.active {
    border-color: #FF7EB9;
    opacity: 1;
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(255, 126, 185, 0.3);
}

.thumbnail:not(.active) {
    opacity: 0.7;
}

/* Documentation Modal Styles */
.documentation-modal {
    background: white;
    border-radius: 16px;
    max-width: 90vw;
    max-height: 90vh;
    width: 800px;
    position: relative;
    overflow-y: auto;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.documentation-content {
    padding: 2rem;
}

.doc-title {
    color: #FF7EB9;
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-align: center;
}

.doc-body {
    line-height: 1.6;
    color: #333;
}

.doc-body h4 {
    color: #FF7EB9;
    font-size: 1.2rem;
    font-weight: 600;
    margin: 1.5rem 0 0.8rem 0;
}

.doc-body p {
    margin-bottom: 1rem;
    font-size: 1rem;
}

.doc-body ul {
    margin: 0.5rem 0 1rem 1.5rem;
}

.doc-body li {
    margin-bottom: 0.3rem;
}

/* Animation */
.fade-up-enter-active {
    transition: all 0.35s cubic-bezier(.48, .05, .58, .99);
}

.fade-up-enter-from {
    opacity: 0;
    transform: translateY(40px);
}

.fade-up-leave-to {
    opacity: 0;
    transform: translateY(-40px);
}

@media (max-width: 768px) {
    .projects-content {
        padding: 1.5rem;
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .pink-title {
        font-size: 3rem;
    }
    
    .project-links {
        flex-direction: column;
    }
    
    .project-links a,
    .gallery-btn {
        text-align: center;
    }
    
    .gallery-modal {
        width: 98vw;
        height: 98vh;
        border-radius: 0;
    }
    
    .gallery-content {
        padding: 15px;
    }
    
    .gallery-image-container {
        gap: 15px;
    }
    
    .nav-arrow {
        width: 60px;
        height: 60px;
    }
    
    .nav-arrow svg {
        width: 32px;
        height: 32px;
    }
    
    .thumbnail {
        width: 80px;
        height: 60px;
    }
    
    .close-btn {
        width: 45px;
        height: 45px;
        top: 15px;
        right: 15px;
    }
    
    .documentation-modal {
        width: 98vw;
        max-height: 98vh;
        border-radius: 0;
    }
    
    .documentation-content {
        padding: 1rem;
    }
}

@media (max-width: 480px) {
    .gallery-image-container {
        gap: 10px;
    }
    
    .nav-arrow {
        width: 50px;
        height: 50px;
    }
    
    .nav-arrow svg {
        width: 28px;
        height: 28px;
    }
    
    .thumbnail {
        width: 70px;
        height: 50px;
    }
}
</style>