<template>
    <div v-html="data"></div>
</template>
  
<script>
  export default {
    data() {
      return {
        data: ''
      };
    },
    async fetch() {
      try {
        const response = await fetch(`https://wiki.the-seed.xyz${this.$route.path}`);
        const responseData = await response.text();
        this.data = responseData;
      } catch (error) {
        this.data = `<h1 style="color:orange;">데이터 패칭오류!</h1><p>${error}</p>`;
      }
    }
  };
</script>
