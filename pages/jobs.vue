<script setup lang="ts">
import type { TaskResponse } from "~/types/types";

const taskResponse = ref<TaskResponse>({
  tasks: [],
});
const getTasks = async () => {
  $fetch("http://localhost:8080/api/v1/tasks", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response as TaskResponse;
    })
    .then((data) => {
      taskResponse.value = data;
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
};

onMounted(() => {
  getTasks();
});
</script>

<template><JobList :taskResponse="taskResponse" /></template>
<style scoped></style>
