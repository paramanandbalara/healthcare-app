

<template>
  <div class="login-container">
    <h2>Login</h2>
    <div v-if="!otpReceived">
      <input type="string" v-model="phoneNumber" placeholder="Enter your phone number" />
      <button @click="requestOTP">Request OTP</button>
    </div>
    <div v-else>
      <div class="otp-container">
        <input v-for="index in 6" :key="index" type="tel" v-model="otp[index - 1]" @input="handleOtpInput(index)"
          @keydown="handleOtpKeydown(index, $event)" maxlength="1" class="otp-box" ref="otpBox" />
      </div>
      <button @click="verifyOTP">Verify OTP</button>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import { store } from '@/store';



export default {
  data() {
    return {
      phoneNumber: '',
      otp: Array(6).fill(''),
      otpReceived: false,
      otpToken: null
    };
  },
  methods: {
    async requestOTP() {
      try {
        // Make API call
        if (!Number(this.phoneNumber)) { alert("Please enter your phone number in a valid format") }
        if (this.phoneNumber.length !== 10) { alert("Phone number should be 10 digits") }
        // const response = await axios.post('dummy_api/otp_request', { phoneNumber: this.phoneNumber });

        // Get the otpToken from the response
        // this.otpToken = response.data.otpToken;
        this.otpToken = 'response.data.otpToken';
        this.otpReceived = true;
      } catch (error) {
        console.error('Error requesting OTP:', error);
      }
    },
    async verifyOTP() {
      try {
        // Make API call for OTP verification
        // const response = await axios.post('dummy_api/otp_verify', { otp: this.otp }, {
        //   headers: {
        //     'Authorization': `Bearer ${this.otpToken}`
        //   }
        // });

        // Handle successful verification
        const response = true
        // response.data.verified = true;
        if (response) {
          alert('Logged in successfully!');
          store.isLoggedIn.value = true;
          localStorage.setItem('isLoggedIn', 'true');
          if (store.originatingPage.value) {
            this.$router.push(store.originatingPage.value);
            store.originatingPage.value = null; // clear the originating page after using
          } else {
            this.$router.push('/'); // default to home page
          }

        } else {
          alert('Invalid OTP. Try again.');
        }
      } catch (error) {
        console.error('Error verifying OTP:', error);
      }
    },
    handleOtpInput(index) {
      const nextIndex = index;
      if (nextIndex < 6) {
        this.$refs.otpBox[nextIndex].focus();
      }
    },
    handleOtpKeydown(index, event) {
      if (event.key === "Backspace" && this.otp[index - 1] === "" && index > 1) {
        this.$refs.otpBox[index - 2].focus();
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  width: 300px;
  margin: 50px auto;
  text-align: center;
}

input {
  padding: 10px;
  margin: 10px 0;
  width: 100%;
}

button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #2a8f62;
}

.otp-container {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.otp-box {
  width: 30px;
  height: 40px;
  font-size: 24px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.otp-box:focus {
  border-color: #42b983;
}
</style>



