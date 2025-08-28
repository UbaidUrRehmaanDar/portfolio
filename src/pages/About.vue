<template>
    <Frame leftHeader="By Ubaid Ur Rehman Dar" centerHeader="Portfolio Presentation" rightHeader="Frontend Developer"
        footerText="02" bgClass="bg-white">
        <transition name="fade-up">
            <div class="about-content" v-if="show">
                <button class="back-btn" @click="goHome" aria-label="Back to Home">
                    <span class="icon" aria-hidden="true">
                        <!-- SVG left arrow icon -->
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18l-6-6 6-6" stroke="#FF7EB9" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </span>
                    <span class="back-text">Back</span>
                </button>
                <h1 class="pink-title">ABOUT ME</h1>
                
                <!-- Personal Image -->
                <div class="profile-image-container">
                    <img src="/images/portfolio/my-image-1.jpg" alt="Ubaid Ur Rehman Dar" class="profile-image" />
                </div>
                
                <p>
                    I'm Ubaid Ur Rehman Dar, a 4th semester BSCS student at Riphah International University with a deep
                    passion for frontend development and UI/UX design. While I began with C++ and Java, my main focus now is
                    building modern, creative, and user-friendly web experiences using React, Vue, and the MERN stack.
                </p>
                <p>
                    I love working at the intersection of design and code—bringing ideas to life through clean
                    interfaces, smooth interactions, and thoughtful user journeys. Tools like Figma let me explore the
                    creative side of design before translating it into functional, responsive web apps.
                </p>
                <p>
                    I've worked on academic projects such as a Smart RC Car and Smart City Dashboard, as well as
                    personal projects like <strong>Chakras</strong>, a full-stack music app inspired by Spotify, and
                    <strong>Rawty Shawty</strong>, a Vue-based restaurant website showcasing an interactive menu and
                    ordering flow.
                </p>
                <p>
                    For me, frontend is where creativity meets technology, and I'm excited to keep growing in UI/UX and
                    development through internships and real-world projects.
                </p>
                <div class="links">
                    <a href="https://github.com/UbaidUrRehmaanDar" target="_blank">GitHub</a>
                    <a href="https://www.linkedin.com/in/ubaid-ur-rehman-dar-74a56429a/" target="_blank">LinkedIn</a>
                </div>
            </div>
        </transition>
        <BottomBar />
    </Frame>
</template>

<script setup>
import BottomBar from '../components/BottomBar.vue'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import Frame from '../components/Frame.vue'

const router = useRouter()
const show = ref(false)
onMounted(() => {
    setTimeout(() => show.value = true, 120)
})
function goHome() {
    router.push('/')
}
</script>

<style scoped>
.about-content {
    max-width: 700px;
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

.profile-image-container {
    display: flex;
    justify-content: center;
    margin: 1rem 0 2rem 0;
}

.profile-image {
    width: 200px;
    height: 200px;
    border-radius: 20px;
    object-fit: cover;
    box-shadow: 0 15px 50px rgba(255, 126, 185, 0.2);
    border: 3px solid rgba(255, 126, 185, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-image:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 60px rgba(255, 126, 185, 0.3);
}

p {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
}

.links {
    margin-top: 2rem;
    display: flex;
    gap: 2rem;
}

.links a {
    font-size: 1.15rem;
    font-weight: 700;
    color: #FF7EB9;
    transition: color 0.2s;
    border-bottom: 2px solid #FF7EB9;
    padding-bottom: 2px;
}

.links a:hover {
    color: #000;
    border-bottom: 2px solid #000;
}

.back-btn {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    color: #FF7EB9;
    cursor: pointer;
    gap: 0.5rem;
    transition: color 0.2s;
    margin-bottom: 2rem;
    position: absolute;
    top: -0.5rem;
    left: 0;
    z-index: 10;
}

.back-btn:hover {
    color: #000;
}

.back-text {
    font-family: inherit;
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

/* Responsive Design */
@media (max-width: 768px) {
    .about-content {
        padding: 1.5rem;
    }
    
    .pink-title {
        font-size: 3rem;
    }
    
    .profile-image {
        width: 150px;
        height: 150px;
    }
    
    .links {
        flex-direction: column;
        gap: 1rem;
    }
}

@media (max-width: 480px) {
    .profile-image {
        width: 120px;
        height: 120px;
    }
    
    .pink-title {
        font-size: 2.5rem;
    }
}
</style>