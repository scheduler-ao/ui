<script setup lang="ts">
type Task = {
  name?: string;
  description?: string;
  cronExpression?: string;
  restData?: RestData;
};

type RestData = {
  url?: string;
  method?: HttpMethods;
  body?: string;
};

type Header = {
  key: string;
  value: string;
};

enum HttpMethods {
  POST = "POST",
  GET = "GET",
  PUT = "PUT",
  PATCH = "PATCH",
}

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

const addHeader = () => {
  headers.value.push({
    key: "",
    value: "",
  });
};
const removeHeader = (index: number) => {
  headers.value.splice(index, 1);
};

const name = ref<string>();
const description = ref<string>();
const cronExpression = ref<string>();
const url = ref<string>();
const method = ref<HttpMethods>();
const body = ref<string>();
const headers = ref<Header[]>([
  {
    key: "",
    value: "",
  },
]);
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
      <Select v-model="method">
        <SelectTrigger>
          <SelectValue placeholder="Http Method" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <div v-for="method in HttpMethods">
              <SelectItem :value="method"> {{ method }} </SelectItem>
            </div>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <div>
      <Textarea placeholder="body" rows="6" v-model="body" />
    </div>
    <div>Headers</div>

    <div class="flex flex-col gap-y-2">
      <div class="flex w-full gap-x-4" v-for="(header, index) in headers">
        <div class="w-full">
          <Input type="text" placeholder="Key" v-model="header.key" />
        </div>
        <div class="w-full">
          <Input type="text" placeholder="Value" v-model="header.value" />
        </div>
        <div v-if="index !== headers.length - 1" class="min-w-10">
          <Button class="w-full" type="submit" @click="removeHeader(index)">
            -
          </Button>
        </div>
        <div v-if="index === headers.length - 1" class="min-w-10">
          <Button class="w-full" type="submit" @click="addHeader"> + </Button>
        </div>
      </div>
    </div>
    <div>
      <Button type="submit" @click="onSubmit"> Update profile </Button>
    </div>
  </div>
</template>
