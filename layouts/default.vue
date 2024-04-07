<template>
  <div class="hidden space-y-6 p-10 pb-16 md:block">
    <div class="flex justify-between items-center space-y-0.5">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">Scheduler-AO</h2>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </div>
    <Separator class="my-6" />
    <div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
      <aside class="-mx-4 lg:w-1/5">
        <SidebarNav />
      </aside>
      <div class="flex-1 lg:max-w-2xl">
        <div class="space-y-6">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
