<template>
    <header>
        Header:
        <br>
        <router-link to="/patterns">Patterns </router-link> |
        <router-link to="/projects">Projects </router-link> |
        <router-link to="/users">Users</router-link>
    </header>
</template>


<style scoped>
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
header{
    padding: .5em 1em;
    display: flex;
    justify-content: space-between;
	width: 100%;
	height: 5vw;
	background-color: var(--vt-c-blue);
	text-align: center;
	position: relative;
	position: fixed;
	top: 0;
	overflow: hidden;
  }
</style>