<template>
  <div class="the-container shadow-soft">
    <form name='contact' netlify>
      <div class="form-group" :class="{ invalid: nameInvalid }">
        <label for="first-name">First Name:</label>
        <input
          type="text"
          name='name'
          class="form-control"
          v-model.trim="name"
          @blur="isValid('name')"
          required
          id="first-name"
        />
      </div>
      <div class="form-group" :class="{ invalid: emailInvalid }">
        <label for="email">Your Email:</label>
        <input
          type="email"
          name='email'
          class="form-control"
          v-model.trim="email"
          @blur="
            isValid('email');
            isValid('name');
          "
          required
          id="email"
        />
      </div>

      <div class="form-group" :class="{ invalid: formInvalid }">
        <label for="message">Send me a message!</label>
        <textarea
          class="form-control"
          v-model.trim="theForm"
          @blur="
            isValid('form');
            isValid('email');
          "
          required
          id="message"
          rows="12"
        ></textarea>
      </div>
      <div class="form-group">
        <input
          class="btn btn-primary submit-btn"
          @click="
            isValid('name');
            isValid('email');
            isValid('form');
          "
          type="submit"
          value="Send"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameInvalid: false,
      emailInvalid: false,
      formInvalid: false,
      name: "",
      email: "",
      theForm: ""
    };
  },
  methods: {
    isValid(type) {
      if (type === "name") {
        this.name ? (this.nameInvalid = false) : (this.nameInvalid = true);
      } else if (type === "email") {
        this.email ? (this.emailInvalid = false) : (this.emailInvalid = true);
      } else if (type === "form") {
        this.theForm ? (this.formInvalid = false) : (this.formInvalid = true);
        console.log(this.theForm);
      }
    },
    submitForm() {
      console.log("submit");
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  width: 80%;
  margin: 5% auto;
}

.invalid {
  & > input,
  & > textarea {
    border: 1px solid rgb(255, 0, 0);
  }
  & > label {
    color: red;
  }
}

.form-group > .submit-btn {
  display: block;
  margin: 7% auto;
  width: 50%;
}

label {
  font-size: 15px;
  color: #97e7a4;
}

input {
  border: none;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: all 5000s ease-in-out 0s;
}

.the-container {
  position: absolute;
  top: 50%;
  left: 50%;
  background: var(--primary);
  border-radius: 14px;
  transform: translate(-50%, -50%);
  width: 25vw;
  min-width: 300px;
  height: 70vh;
  min-height: 640px;
  color: #97e7a4;
}

textarea,
input {
  color: #57bd68;
  box-shadow: var(--box-shadow-offset) var(--box-shadow-offset)
      var(--box-shadow-blur) var(--shadow),
    var(--box-shadow-offset-invert) var(--box-shadow-offset-invert)
      var(--box-shadow-blur) var(--shadow-light);

  &:focus {
    color: #4fb460;
    box-shadow: inset 2px 2px 5px var(--shadow),
      inset -3px -3px 7px var(--shadow-light);
  }
}
</style>
