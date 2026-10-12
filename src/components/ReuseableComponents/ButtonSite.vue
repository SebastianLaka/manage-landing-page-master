<template>
  <button><slot /></button>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/colors.scss' as *;
button {
  padding: 1em 2em;
  background-color: setColor('orange-400');
  color: setColor('gray-50');
  border-radius: 4em;
  box-shadow: -1px 21px 27px -10px hsla(12, 97%, 75%, 0.5);
}
</style>
