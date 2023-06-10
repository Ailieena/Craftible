import { createRouter, createWebHistory } from 'vue-router'
import Users from '../components/Users.vue'
import Patterns from '../components/Patterns.vue'
import Pattern from '../components/Pattern.vue'
import PatternAdd from '../components/PatternAdd.vue'
import Projects from '../components/Projects.vue'
import Project from '../components/Project.vue'
import Categories from '../components/Categories.vue'
import Login from '../components/Login.vue'

const routes = [
    {path: '/users', name: 'Users' , component: Users},
    {path: '/patterns', name: 'Patterns', component: Patterns},
    {path: '/patterns/:id', name: 'Pattern', component: Pattern},
    {path: '/patterns/add', name: 'Add Pattern', component: PatternAdd},
    {path: '/projects', name: 'Projects', component: Projects},
    {path: '/projects/:id', name: 'Project', component: Project},
    {path: '/categories', name: 'Categories', component: Categories},
    {path: '/login', name: 'Login', component: Login}
    ]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router