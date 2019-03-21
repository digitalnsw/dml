<template>
  <div id="app">
    <user-form v-on:formSubmit="translateText"></user-form>
    <result v-text="translatedText"></result>
  </div>
</template>

<script>
import axios from 'axios'
import userForm from './components/userForm.vue'
import Result from './components/Result.vue'

export default {
  name: 'app',
  components: {
    userForm,
    Result
  },
  data () {
    return {
      translatedText: '',
      dataToSend: {
        "persons":{
          "parent1":{
            "is_guardian":{
              "2019-03":true
            },
            "active_kids__is_eligible":{
              "2019-03":null
            },
            "creative_kids__is_eligible":{
              "2019-03":null
            }
          },
          "child1":{
            "is_nsw_resident":{
              "2019-03":true
            },
            "is_enrolled_in_school":{
              "2019-03":true
            },
            "birth":{
              "ETERNITY":"2013-03-18"
            },
            "age":{
              "2019-03":null
            },
            "active_kids__child_meets_criteria":{
              "2019-03":null
            },
            "creative_kids__child_meets_criteria":{
              "2019-03":null
            },
            "active_kids__voucher_amount":{
              "2019-03":null
            },
            "creative_kids__voucher_amount":{
              "2019-03":null
            },
            "has_valid_medicare_card":{
              "2019-03":true
            },
            "active_kids__already_issued_in_calendar_year":{
              "2019":false
            },
            "creative_kids__already_issued_in_calendar_year":{
              "2009":false
            }
          }
        },
        "families":{
          "family1":{
            "parents":[
              "parent1"
            ],
            "children":[
              "child1"
            ]
          }
        }
      }
    }
  },
  methods: {
    translateText(text) {
      console.log(text)
      this.dataToSend.persons.child1.birth.ETERNITY = text

      axios.post('https://openfisca-nsw-staging.herokuapp.com/calculate', this.dataToSend )
      .then((response) => {
        console.log(response)
        this.translatedText = text
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
