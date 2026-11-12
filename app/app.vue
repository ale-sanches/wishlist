<script setup lang="ts">
useHead({
  titleTemplate: title => (title ? `${title} - Вишлист` : 'Вишлист'),
  meta: [
    {
      name: 'description',
      content: 'Создайте свой вишлист и делитесь им с друзьями и близкими. Друзья бронируют подарки, а вы не узнаете, кто что выбрал.'
    }
  ]
})
</script>
<template>
  <UApp>
    <NuxtRouteAnnouncer/>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </UApp>
</template>
