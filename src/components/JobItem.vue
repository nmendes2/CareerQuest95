<script setup>
defineProps({
  jobInfo: {
    type: Object,
    required: true,
  },
})

const shortenDescription = (description) => {
  if (!description) {
    return ''
  }

  if (description.length > 200) {
    return `${description.substring(0, 200)}...`
  }

  return description
}
</script>

<template>
  <div class="job-item">
    <h4>{{ jobInfo.title }}</h4>
    <h6>{{ jobInfo.company }}</h6>
    <h6 class="salary">{{ `$${jobInfo.min_amount} to $${jobInfo.max_amount}` }}</h6>
    <h6 class="location">{{ jobInfo.location }}</h6>
    <p>{{ shortenDescription(jobInfo.description) }}</p>
    <a :href="jobInfo.job_url" target="_blank" class="go-to-job">Go To Job</a>
  </div>
</template>

<style scoped>
.job-item {
  background-color: rgba(43, 16, 85, 0.8);
  border-radius: 10px;
  border: 1px solid cyan;
  box-shadow: 0px 0px 15px cyan;
  color: white;
  padding: 10px 15px;
  margin-bottom: 20px;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
}

h4,
h6 {
  margin: 15px 0px;
}

.salary {
  color: #fc70fc;
  text-shadow: 0px 0px 35px #fc70fc;
}

.go-to-job {
  color: white;
  background-color: black;
  font-size: 12px;
  border: 1px solid #fc70fc;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  width: 200px;
  margin-right: auto;
  display: block;
  font-family: 'Press Start 2P', system-ui;
}
</style>
