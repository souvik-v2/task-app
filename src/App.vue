<template>
    <!-- header -->
    <div class="header">
        <h1>TaskApp</h1>
    </div>

    <!-- container -->
    <div class="col-md-12">
      <nav-details></nav-details>
      <forms-details></forms-details>
      <user-details></user-details>
    </div> 

    <!-- footer -->
    <div class="footer">
        <p>TaskApp@souvik-v2</p>
    </div>
</template>

<script>
import NavDetails from "./components/NavDetails.vue";
import FormsDetails from "./components/FormsDetails.vue";
import UserDetails from "./components/UserDetails.vue";

import axios from "axios";

export default {
  components: {
    NavDetails,
    FormsDetails,
    UserDetails
  },
  data() {
    return {
      formData: {
        username: "",
        password: "",
      },
      showFormData: true,
      isValidUser: true,
      isValidPass: true,
      info: "",
      isInfo: 0
    };
  },
  methods: {
    onSubmit() {
      if (this.username === "" || this.password === "") {
        this.isValidUser = false;
        this.isValidPass = false;
        return false;
      } else {
        //api call to validate data
        axios.get("../../../data.jason", this.formData).then((res) => {
          //console.log(res.data);
          for (var i = 0; i < res.data.length; i++) {
            if (
              res.data[i].username === this.formData.username &&
              res.data[i].password === this.formData.password
            ) {
              console.log(res.data[i]);
              this.info = res.data[i];
              this.isInfo = this.isInfo+1;
            }
          }
          if (this.isInfo === 0) {
            //console.log(this.info);
            return false;
          } else {
            console.log(this.isInfo);
            this.showFormData = false;
            this.$emit("change-name", this.info);
          }
        });
        

      }
    },
    validateInput() {
      if (this.username === "") {
        this.isValidUser = false;
      } else if (this.password === "") {
        this.isValidPass = false;
      } else {
        this.isValidUser = true;
        this.isValidPass = true;
      }
    },

    showFormDataInParent(data) {
      console.log(data);
    },
  },
};
</script>


<style scoped>
.invalidLabel {
  color: red;
}
section {
  max-width: 30rem;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

h2 {
  text-align: center;
}
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
  max-width: 980px;
}

.header, .footer {
  padding: 20px 10px;
  background-color: #318166;
  color: #c7c7bb;
  text-align: center;
}
</style>