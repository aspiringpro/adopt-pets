<template>
  <div class="home-view-container">
    <p>
    We have <b>{{animalsCount}}</b> pets ready for a new home.
    {{getAllCats.length}} of them are cats.
    </p>
    <h1>Adopt a New Best Friend Today!</h1>
    <button @click="togglePetForm" type="button" name="button" class="btn btn-primary">Add a Pet</button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">


      <b-form-group id="input-group-2" label="Pet Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="formData.age"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'home',
  data(){
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  computed: {

    ...mapGetters([
      'animalsCount',
      'getAllCats'
    ])
  },

  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm() {
      this.showPetForm = !this.showPetform
    },
    handleSubmit() {
      const {species, name, age} = this.formData
      const payload = {

        species,
        pet: {
          name,
          age
        }

      }
      this.addPet(payload)

      //reset form after Submit
      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  }
}
</script>
