<template>
    <Frame leftHeader="By Ubaid Ur Rehman Dar" centerHeader="Portfolio Presentation" rightHeader="Frontend Developer"
        footerText="03" bgClass="bg-black">
        <div class="projects-content">
            <button class="back-btn" @click="goHome" aria-label="Back to Home">
                <span class="icon" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18l-6-6 6-6" stroke="#FF7EB9" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </span>
                <span class="back-text">Back</span>
            </button>
            <h1 class="pink-title">MY PROJECTS</h1>
            <transition-group name="pop" tag="div" class="projects-list">
                <div class="project-card" v-for="project in projects" :key="project.title">
                    <h2 class="project-title">{{ project.title }}</h2>
                    <p>{{ project.desc }}</p>
                    <a v-if="project.link" :href="project.link" target="_blank">View Project</a>
                </div>
            </transition-group>
        </div>
        <BottomBar />
    </Frame>
</template>

<script setup>
import BottomBar from '../components/BottomBar.vue'
import { useRouter } from 'vue-router'
import Frame from '../components/Frame.vue'

const router = useRouter()
function goHome() { router.push('/') }

const projects = [
    {
        title: 'Smart RC Car',
        desc: 'An academic project involving the design and development of a remote-controlled car with smart features and sensor integration, completed as part of my coursework at Riphah International University.',
        link: ''
    },
    {
        title: 'Smart City Dashboard',
        desc: 'A university project focused on building a dashboard to visualize and manage various aspects of a smart city, including real-time data analytics and interactive UI components.',
        link: ''
    },
    {
        title: 'Chakras - Music App',
        desc: 'A full-stack music application inspired by Spotify, built with the MERN stack. Features include authentication, music streaming, playlists, and a modern, responsive UI.',
        link: 'https://github.com/UbaidUrRehmaanDar/Chakras'
    },
    {
        title: 'Rawty Shawty - Restaurant Website',
        desc: 'A Vue-based restaurant website featuring an interactive menu and ordering flow, designed to showcase creative UI/UX and smooth frontend interactions.',
        link: 'https://github.com/UbaidUrRehmaanDar/rawtyshawty'
    }
]
</script>

<style scoped>
.projects-content {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
}

.pink-title {
    font-size: 3.8rem;
    font-weight: 900;
    color: #FF7EB9;
    margin-bottom: 2rem;
    text-align: left;
}

.projects-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
}

.project-card {
    background: rgba(255, 255, 255, 0.09);
    border-radius: 12px;
    padding: 1.6rem;
    color: #fff;
    box-shadow: 0 2px 14px rgba(0, 0, 0, 0.11);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    animation: popIn 0.4s cubic-bezier(.68, .01, .68, 1.03);
}

.project-title {
    color: #FF7EB9;
    font-size: 1.5rem;
    font-weight: 700;
}

a {
    color: #FF7EB9;
    font-weight: 600;
}

a:hover {
    text-decoration: underline;
}

/* Animation for transition-group */
.pop-enter-active {
    transition: all 0.35s cubic-bezier(.68, .01, .68, 1.03);
}

.pop-enter-from {
    opacity: 0;
    transform: scale(0.92) translateY(35px);
}

.pop-leave-to {
    opacity: 0;
    transform: scale(0.92) translateY(-35px);
}

@keyframes popIn {
    from {
        opacity: 0;
        transform: scale(0.92) translateY(35px);
    }

    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

/* Back button styles */
.back-btn {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    color: #FF7EB9;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 1.2rem;
    padding: 0.3rem 0.7rem 0.3rem 0;
    transition: color 0.2s;
    outline: none;
    position: absolute;
    left: 0;
    top: 0;
}

.back-btn:hover {
    color: #fff;
}

.icon {
    display: flex;
    align-items: center;
    margin-right: 0.4em;
}

.back-text {
    font-size: 1.1rem;
    font-weight: 700;
}
</style>