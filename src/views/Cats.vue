<template>
  <div class="">
    <PetTable
    species="cats"
    :pets="cats"/>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import PetTable from '@/components/PetTable'
  export default {
    components: {
      PetTable
    },
    data(){
      return {}
    },
    computed: {
      ...mapState([
        'cats'
      ])
    }
  }
</script>

<style lang="css" scoped>
  . {

  }
</style>
