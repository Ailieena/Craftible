<script>
export default {
    data() {
        return {
            userId: null,
            login: null
        }
    },
    beforeMount() {
        {
            this.userId = this.$cookies.get('userId')
            this.login = this.$cookies.get('login')
        }
    },
    methods: {
        logout() {
            console.log("trying to log out")
            this.$cookies.remove('userId')
            this.$cookies.remove('login')
            this.$cookies.remove('token')
            this.$router.go(0)
        }
    }

}
</script>


<template>
    <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand col col-lg-2" href="/">Home</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto col-md-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link to="/patterns">Patterns </router-link> |
                <router-link to="/projects">Projects </router-link> |
                <router-link to="/users">Users</router-link>
            </li>
        </ul>
        <div class="navbar-nav me-auto col-md-auto mb-2 mb-lg-0">
            <div v-if="this.userId">Hello, {{ login }}! </div>
        </div>
        <div class="col-md-auto">
            <div v-if="!this.userId"><button type="button" class="btn btn-dark"><router-link to="/login">Log in</router-link></button></div>
            <div v-else><button type="button" class="btn btn-dark" v-on:click="logout()">Log out </button></div>
        </div>
    </div>
    </div>
    </nav>
</template>


<style scoped>




.navbar-nav.me-auto.mb-2.mb-lg-0{
    display: flex;
    /* flex-direction: row-reverse; */

}
a{
    color:var(--vt-c-dark);
    text-decoration: none;
}

a.hover{
    background-color: var(--vt-c-blue);
    text-decoration: bold;
}

.router-link-exact-active{
    border-radius: 5px;
    color: var(--vt-c-offwhite);
    font-variant: bold;
}
.navbar.navbar-expand-lg.bg-body-tertiary{
	background-color: var(--vt-c-blue);
}
</style>