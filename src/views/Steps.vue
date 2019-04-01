<template>
  <div id="steps">
    <form @submit.prevent="formSend" id="rebatesForm">
      <div v-if="step === 1">
        <user-form v-on:updateDateOfBirth="translateText"></user-form>
      </div>
      <div v-else-if="step === 2">
        <radioButtons></radioButtons>
      </div>
      <div v-else>
        <result v-bind:dataReceived="dataReceived"></result>
        <button class="au-btn">Submit</button>
      </div>
      <div class="row">
        <div class="col-md-12">
          <button class="au-btn" @click.prevent="prev">Previous</button>
          <button class="au-btn" @click.prevent="next">Next</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios"
import radioButtons from "../components/radioButtons.vue"
import userForm from "../components/userForm.vue"
import Result from "../components/Result.vue"

export default {
  data() {
    return {
      step:1,
      dataToSend: {
        persons: {
          parent1: {
          }
        },
        families: {
          family1: {
            parents: ["parent1"]
          }
        }
      },
      dataReceived: {},
    }
  },
  components: {
    radioButtons,
    userForm,
    Result
  },
  methods:{
    prev() {
      this.step--
    },
    next() {
      this.step++
    },
    translateText(formatted_date) {

      let child = {
            is_nsw_resident: {
              "2019-03": true
            },
            is_enrolled_in_school: {
              "2019-03": true
            },
            birth: {
              ETERNITY: ""
            },
            age: {
              "2019-03": null
            },
            has_valid_medicare_card: {
              "2019-03": true
            },
            active_kids__child_meets_criteria: {
              "2019-03": null
            },
            creative_kids__child_meets_criteria: {
              "2019-03": null
            },
            active_kids__voucher_amount: {
              "2019-03": null
            },
            creative_kids__voucher_amount: {
              "2019-03": null
            }
          }

      this.dataToSend.persons.child1 = child

      this.dataToSend.families.family1.children = ['child1']

      this.dataToSend.persons.child1.birth.ETERNITY = formatted_date
    },
    formSend() {
      axios
        .post(
          "https://openfisca-nsw-staging.herokuapp.com/calculate",
          this.dataToSend
        )
        .then(response => {
          console.log(response)
          this.dataReceived = JSON.stringify(response.data, null, 4)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style>

</style>
