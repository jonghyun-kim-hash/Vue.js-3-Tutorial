<template>
  <form action="" @submit.prevent="handleSubmit">
    <label>Email</label>
    <input type="email" required v-model="email" />

    <label>Password</label>
    <input type="password" required v-model="password" />
    <p v-if="passwordError" class="error">{{ passwordError }}</p>

    <label>Role</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <label>Skills </label>
    <div class="flexBox">
      <input
        type="text"
        class="input-with-btn"
        v-model="tempSkill"
        ref="skillRef"
      />
      <button type="button" class="btn-for-input" @click="addSkill">Add</button>
    </div>
    <div v-for="skill in skills" :key="skill" class="pill">
      <span @click="deleteSkill(skill)">{{ skill }}</span>
    </div>

    <div class="terms">
      <input type="checkbox" required v-model="terms" />
      <label>Accept terms and conditions</label>
    </div>

    <div class="submit">
      <button>Create an Account</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "designer",
      terms: false,
      tempSkill: "",
      skills: [],
      passwordError: "",
    };
  },
  methods: {
    addSkill() {
      if (!this.skills.includes(this.tempSkill)) {
        this.skills.push(this.tempSkill);
      }
      this.tempSkill = "";
      console.log(this.$refs.skillRef);
      this.$refs.skillRef.focus();
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => skill !== item);
    },
    handleSubmit() {
      // validate password
      this.passwordError =
        this.password.length > 5
          ? ""
          : "Password must be at least 6 chars long.";
      if (!this.passwordError) {
        console.log("email", this.email);
        console.log("password", this.password);
        console.log("role", this.role);
        console.log("skills", this.skills);
        console.log("terms accepted", this.terms);
      }
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background-color: #fff;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

.flexBox {
  display: flex;
  justify-content: space-between;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.5em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}

input.input-with-btn {
  width: 80%;
}

button {
  height: 40px;
  background-color: #0b6dff;
  border: 0;
  border-radius: 10px;
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}

button:hover {
  opacity: 0.6;
}

button.btn-for-input {
  width: 15%;
  padding: 0;
  margin: 0;
}

.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background-color: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

.submit {
  text-align: center;
}

.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
