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
    submitForm() {
    fetch('http://localhost:3000/users/login', {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(this.form)})
        .then(response => response.json()
        .then((data) => {
            this.store.userId = data.userId
            this.store.login = data.login
            this.store.token = data.token
            console.log(data)
        })
        .catch(error => {
            console.error(error);
        }));
    }
}};
</script>

<template>
<div>
    <form @submit.prevent="submitForm">
    <label for="login">Login:</label><br>
    <input v-model="form.login" type="login" id="login" required>
    <br>
    <label for="password">Password:</label><br>
    <input v-model="form.password" type="password" id="password" required>
    <br>
    <br><button type="submit">Login</button>
    </form>
</div>
</template>
