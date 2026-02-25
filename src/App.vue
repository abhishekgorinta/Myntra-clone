<script>
import Navabar from './components/navbar.vue';
export default {
  components: { Navabar }
}
</script>

<template>
  <Navabar />
  <router-view></router-view>
</template>