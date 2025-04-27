<script setup>
import JobItem from '../components/JobItem.vue'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const route = useRoute()

const jobSearchInput = route.params.query
const jobData = ref(null)
const isLoading = ref(true)
axios
  .get('http://localhost:3000/api/get-jobs-paginated', {
    params: {
      query: jobSearchInput,
    },
  })
  .then(({ status, data }) => {
    isLoading.value = false
    if (status === 200) {
      jobData.value = data.data
      console.log(data)
    } else {
      console.error(data)
    }
  })

onMounted(() => {})
</script>

<template>
  <main>
    <div class="job-list-container">
      <div v-if="isLoading" class="loader"></div>
      <job-item v-for="job in jobData" :job-info="job" :key="job.id" />
    </div>
    <!-- <TheWelcome /> -->
  </main>
</template>

<style scoped>
.job-list-container {
  padding-top: 20vh;
  color: white;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.loader {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  font-weight: bold;
  font-family: 'Press Start 2P', system-ui;
  color: #fc70fc;
  font-size: 30px;
  padding-bottom: 8px;
  background: linear-gradient(currentColor 0 0) 0 100%/0% 3px no-repeat;
  animation: l2 2s linear infinite;
}
.loader:before {
  content: 'Loading...';
}
@keyframes l2 {
  to {
    background-size: 100% 3px;
  }
}
</style>
