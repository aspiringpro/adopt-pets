<template>
  <div class="">
    <PetTable
    species="dogs"
    :pets="dogs"/>
  </div>
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
        'dogs'
      ])
    }
  }
</script>

<style lang="css" scoped>
  . {

  }
</style>
