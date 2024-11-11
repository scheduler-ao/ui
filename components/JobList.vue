<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import type { TaskResponse } from "~/types/types";

const props = defineProps<{
  taskResponse: TaskResponse;
}>();

const onSubmit = () => {
  console.log("submitted");
};
</script>

<template>
  <Table>
    <TableCaption>A list of your tasks.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead class="w-[100px]"> Name </TableHead>
        <TableHead>Cron</TableHead>
        <TableHead>Description</TableHead>
        <TableHead>Status</TableHead>
        <TableHead class="text-right"> Action </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="task in props.taskResponse.tasks" :key="task.name">
        <TableCell class="font-medium">
          {{ task.name }}
        </TableCell>
        <TableCell>{{ task.cronExpression }}</TableCell>
        <TableCell>{{ task.description }}</TableCell>
        <TableCell> {{ task.status }}</TableCell>
        <TableCell class="text-right">
          <Button type="submit" @click="onSubmit" size="sm"> Edit </Button>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
