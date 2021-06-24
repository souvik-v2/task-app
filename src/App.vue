<template>
  <div class="container" v-if="showFormData">
    <div class="col-md-12">
      <form @submit.prevent="onSubmit()">
        <div class="row">
          <div class="form-group">
            <label
              for="username"
              id="username"
              class="username"
              :class="{ invalidLabel: !isValidUser }"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              @blur="validateInput"
              class="form-control"
              :style="{ borderColor: !isValidUser ? 'red' : 'black' }"
              v-model="formData.username"
            />
            <p v-if="!isValidUser" style="color: red">
              Please enter the valid username !!!
            </p>
          </div>
        </div>
        <div class="row">
          <div class="form-group">
            <label
              for="password"
              id="password"
              class="password"
              :class="{ invalidLabel: !isValidPass }"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              @blur="validateInput"
              class="form-control"
              :style="{ borderColor: !isValidPass ? 'red' : 'black' }"
              v-model="formData.password"
            />
            <p v-if="!isValidUser" style="color: red">
              Please enter the valid password !!!
            </p>
          </div>
        </div>
        <button type="submit" class="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  </div>

  <div v-else>
    <!--<forms-details @change-name="showFormDataInParent"></forms-details>-->
    <table>
      <tr v-for="(value, key) in info" :key="value.id">
        <th>{{ key }}</th>
        <td>{{ value }}</td>
      </tr>
    </table>
    <button @click="showFormData = true">Back</button>
  </div>
</template>


<script>
//import FormsDetails from "./components/FormsDetails.vue";
import axios from "axios";

export default {
  /*components: {
    FormsDetails,
  },*/
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
</style>