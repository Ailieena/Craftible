<script>
export default {
data() {
    return {
    form: {
        login: '',
        password: ''
    }
    };
},
methods: {
    redirectReload() {
        this.$router
        .push({ path: '/' })
        .then(() => { this.$router.go() })
    },
    submitForm() {
        fetch('http://localhost:3000/users/login', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.form)})
            .then(response => response.json()
            .then((data) => {
                
                this.$cookies.set('token', data.token)
                this.$cookies.set('login', data.login)
                this.$cookies.set('userId', data.userId)
                console.log(data) 
                this.$router
                .push({ path: '/' })
                .then(() => { this.$router.go() })          
            })
            .catch(error => {
                console.error(error);
            }));
    }
}};
</script>

<template>
<div class="row d-flex .justify-content-center">
    <form @submit.prevent="submitForm">
    <div class="mb-3 col">
        <label for="login" class="form-label">Login:</label><br>
        <input v-model="form.login" type="login" class="form-control" id="login" required>
    </div>
    <label for="password" class="form-label">Password:</label><br>
    <input v-model="form.password" type="password" class="form-control" id="password" required>
    <br><button type="submit" class="form-control">Login</button>
    </form>
</div>
</template>
