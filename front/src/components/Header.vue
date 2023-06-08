<template>
    <!-- <header>
        Header:
        <br>
        <router-link to="/patterns">Patterns </router-link> |
        <router-link to="/projects">Projects </router-link> |
        <router-link to="/users">Users</router-link>
    </header> -->
    <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Home</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link to="/patterns">Patterns </router-link> |
                <router-link to="/projects">Projects </router-link> |
                <router-link to="/users">Users</router-link>
            </li>
        </ul>
        </div>
    </div>
    </nav>


</template>


<style scoped>
.navbar-nav.me-auto.mb-2.mb-lg-0{
    /* position: absolute;
    right: 10px;
    top: 5px; */

    /* float: right;
    margin-left: -50%;
    margin-top: 2em; 
    margin-right: 1em; */

    display: flex;
    flex-direction: row-reverse;

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