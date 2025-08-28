<template>
    <Frame leftHeader="By Ubaid Ur Rehman Dar" centerHeader="Portfolio Presentation" rightHeader="Frontend Developer"
        footerText="04" bgClass="bg-white">
        <transition name="fade-up">
            <div class="vision-content" v-if="show">
                <button class="back-btn" @click="goHome" aria-label="Back to Home">
                    <span class="icon" aria-hidden="true">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18l-6-6 6-6" stroke="#FF7EB9" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </span>
                    <span class="back-text">Back</span>
                </button>
                <h1 class="pink-title">VISION</h1>
                <p>
                    I believe technology should feel natural — not just functional, but intuitive, creative, and human.
                    My vision as a developer is to design and build digital experiences that don’t just solve problems,
                    but also inspire and connect people.
                </p>
                <p>
                    Frontend development and UI/UX design are where I find my spark: blending code with creativity,
                    shaping ideas into clean interfaces, and crafting user journeys that feel effortless. Whether it’s
                    experimenting with new frameworks, sketching concepts in Figma, or bringing designs to life in React
                    or Vue, I want every project to reflect clarity, simplicity, and imagination.
                </p>
                <p>
                    Long term, my goal is to grow into a developer who builds products that matter — tools, apps, and
                    platforms that make life a little easier and a little more beautiful.
                </p>
                <blockquote>
                    <em>“Design is intelligence made visible.”</em>
                </blockquote>
            </div>
        </transition>
        <BottomBar />
    </Frame>
</template>

<script setup>
import BottomBar from '../components/BottomBar.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
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
.vision-content {
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

p {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
}

blockquote {
    font-size: 1.3rem;
    color: #FF7EB9;
    margin-top: 2rem;
    border-left: 4px solid #FF7EB9;
    padding-left: 1rem;
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
    color: #000;
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