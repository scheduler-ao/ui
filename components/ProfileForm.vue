<script setup lang="ts">
type Task = {
  name?: string;
  description?: string;
  cronExpression?: string;
  restData?: RestData;
};

type RestData = {
  url?: string;
  method?: string;
  body?: string;
};

const onSubmit = () => {
  const task: Task = {
    name: name.value,
    description: description.value,
    cronExpression: cronExpression.value,
    restData: {
      url: url.value,
      method: method.value,
      body: body.value,
    },
  };
  $fetch("http://localhost:8080/api/v1/tasks", {
    body: task,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    console.log("response : ", response);
  });
};
const name = ref<string>();
const description = ref<string>();
const cronExpression = ref<string>();
const url = ref<string>();
const method = ref<string>();
const body = ref<string>();
</script>

<template>
  <div class="flex flex-col gap-y-3 mb-8">
    <h3 class="text-lg font-medium">Scheduler</h3>
    <p class="text-sm text-muted-foreground">
      Build scheduler with your config.
    </p>
  </div>

  <div class="flex flex-col gap-y-5">
    <div>
      <Input type="text" placeholder="name" v-model="name" />
    </div>
    <div>
      <Input type="text" placeholder="description" v-model="description" />
    </div>
    <div>
      <Input
        type="text"
        placeholder="cronExpression"
        v-model="cronExpression"
      />
    </div>
    <div>
      <Input type="text" placeholder="url" v-model="url" />
    </div>
    <div>
      <Input type="text" placeholder="method" v-model="method" />
    </div>
    <div>
      <Input type="text" placeholder="body" v-model="body" />
    </div>
    <div>
      <Button type="submit" @click="onSubmit"> Update profile </Button>
    </div>
  </div>
</template>
