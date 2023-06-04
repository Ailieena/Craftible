import { createRouter, createWebHistory } from 'vue-router'
import Users from '../components/Users.vue'
import Patterns from '../components/Patterns.vue'
import Projects from '../components/Projects.vue'

const routes = [
    {path: '/users', name: 'Users' , component: Users},
    {path: '/patterns', name: 'Patterns', component: Patterns},
    {path: '/projects', name: 'Projects', component: Projects}
    ]  


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router