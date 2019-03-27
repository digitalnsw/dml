<template>
  <div id="app">
    <div class="container">
      <radioButtons></radioButtons>
      <user-form v-on:formSubmit="translateText"></user-form>
      <result v-text="translatedText"></result>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import radioButtons from "./components/radioButtons.vue";
import userForm from "./components/userForm.vue";
import Result from "./components/Result.vue";

export default {
  name: "app",
  components: {
    radioButtons,
    userForm,
    Result
  },
  data() {
    return {
      translatedText: "",
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
      }
    }
  },
  methods: {
    translateText(text) {

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

      this.dataToSend.persons.child1.birth.ETERNITY = text

      axios
        .post(
          "https://openfisca-nsw-staging.herokuapp.com/calculate",
          this.dataToSend
        )
        .then(response => {
          console.log(response)
          this.translatedText = text
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
