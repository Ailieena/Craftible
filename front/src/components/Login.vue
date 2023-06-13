<script>
export default {
data() {
    return {
    form: {
        login: '',
        password: ''
    }};
},
computed:  {
    failure: false
},    
methods: {
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
                this.failure = true
                console.error(error);
                console.log("failure: " + this.failure);
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
    <br>
    </form>
    <p v-if=this.failure>Incorrect credentials, try again.</p>
</div>
</template>
