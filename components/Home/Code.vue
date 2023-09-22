<template>
  <div class="w-full px-8">
    <div class="rounded-md bg-surface-100 bg-opacity-60">
      <div
        class="font-semibol flex w-full flex-col items-center justify-center p-2 text-white"
      >
        <div class="flex w-full gap-2">
          <span>1.</span>
          <strong class="flex-grow text-center text-accent-100">
            <strong class="text-accent-200">{{ "new class " }}</strong>
            <strong>{{ "Programmer {" }}</strong>
          </strong>
        </div>
        <div class="flex w-full gap-2">
          <span>2.</span>
          <strong class="flex-grow text-center text-accent-100">
            <strong class="text-accent-200">{{ "constructor" }}</strong>
            {{ "() {" }}
          </strong>
        </div>
        <div class="flex w-full gap-2">
          <span>3.</span>
          <strong class="flex-grow text-center text-accent-100">
            <strong class="text-accent-200">{{ "this" }}</strong>
            {{ ".name = " }}
            <strong class="text-accent-200">{{ "“Luís”" }}</strong>
          </strong>
        </div>
        <div class="flex w-full gap-2">
          <span>4.</span>
          <strong class="flex-grow text-center text-accent-100">
            <strong class="text-accent-200">{{ "this" }}</strong>
            {{ ".skills = " }}
            <strong class="text-accent-200">{{ "[“Front”, “Back”]" }}</strong>
          </strong>
        </div>
        <div class="flex w-full gap-2">
          <span>5.</span>
          <strong class="flex-grow text-center text-accent-100">{{
            "} }"
          }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>
