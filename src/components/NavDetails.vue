<template>
<div class="nav">
    <router-link to="/signin"> SignIn </router-link> |
    <router-link to="/signin"> SignOut </router-link> |
    <router-link to="/signup"> SignUp </router-link>
</div>    
</template>

<style>
.nav {
    display: flex;
    width: calc(100% - 30px);
    flex-wrap: wrap;
    justify-content: flex-end;
    margin: 20px 5px;
    gap: 15px;
}
</style>
