<template>
  <div class="container">
    <div class="col-md-12">
      <ul>
        <li><strong>Name: </strong> {{ username }}</li>
        <li><strong>Gender: </strong> {{ password }}</li>
        <li><strong>Hobby: </strong> {{ email }}</li>
      </ul>
    </div>
  </div>
</template>


<script>
//import axios from 'axios';

export default {
  //props: [username, password, email],
  data() {
    return {
    }
  }
};
</script>


<style scoped>
.invalidLabel {
  color: red;
}
</style>