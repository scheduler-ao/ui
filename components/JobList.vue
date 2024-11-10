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
import type { Item } from "~/types/types";

const props = defineProps({
  items: {
    type: Array as PropType<Item[]>,
    default: () => [],
  },
});
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
      <TableRow v-for="invoice in props.items" :key="invoice.name">
        <TableCell class="font-medium">
          {{ invoice.name }}
        </TableCell>
        <TableCell>{{ invoice.cron }}</TableCell>
        <TableCell>{{ invoice.description }}</TableCell>
        <TableCell> {{ invoice.status }}</TableCell>
        <TableCell class="text-right">
          <Button type="submit" @click="onSubmit" size="sm"> Edit </Button>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
