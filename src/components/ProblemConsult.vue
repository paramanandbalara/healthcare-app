<template>
  <div>
    <h2>Describe Your Problem</h2>
    <textarea v-model="problemDescription"></textarea>
    <button @click="submitProblem">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      problemDescription: ''
    }
  },
  methods: {
    submitProblem() {
      // Submit problem to backend.
    }
  }
}
</script>
