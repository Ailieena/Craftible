import { createRouter, createWebHistory } from 'vue-router'
import Users from '../components/Users.vue'
import Patterns from '../components/Patterns.vue'
import Pattern from '../components/Pattern.vue'
import PatternAdd from '../components/PatternAdd.vue'
import Projects from '../components/Projects.vue'
import Project from '../components/Project.vue'
import ProjectAdd from '../components/ProjectAdd.vue'
import Categories from '../components/Categories.vue'
import Login from '../components/Login.vue'
import HeaderV from '../components/Header.vue'
import Home from '../components/Home.vue'

const routes = [
    {path: '', name: 'Home', component: Home},
    {path: '/users', name: 'Users' , component: Users},
    {path: '/patterns', name: 'Patterns', component: Patterns},
    {path: '/patterns/:id', name: 'Pattern', component: Pattern},
    {path: '/patterns/add', name: 'Add Pattern', component: PatternAdd},
    {path: '/projects', name: 'Projects', component: Projects},
    {path: '/projects/:id', name: 'Project', component: Project},
    {path: '/projects/add/:id', name: 'Add Project', component: ProjectAdd},
    {path: '/categories', name: 'Categories', component: Categories},
    {path: '/login', name: 'Login', component: Login},
    {name: 'HeaderV', component: HeaderV}
    
    ]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router