<template>
  <div id="steps">
    <form @submit.prevent="formSend" id="rebatesForm">
      <div v-if="step === 1">
        <individualOrHousehold></individualOrHousehold>
      </div>
      <div v-else-if="step === 2">
        <!-- <user-form v-on:updateDateOfBirth="translateText"></user-form> -->
        <postcode v-on:updateQuestionsToRemove="updateQuestionsToRemove"></postcode>
      </div>
      <div v-else-if="step === 3">
        <cards :cardsList="cardsList"></cards>
      </div>
      <div v-else-if="step === 4">
        <radioButtons v-on:updateAnswers="updateAnswers" :rebatesList="rebatesList" :questionsToRemove="questionsToRemove"></radioButtons>
      </div>
      <div v-else>
        <result :dataReceived="dataReceived" :rebatesList="rebatesList"></result>
        <button class="au-btn bottom-btn">Submit</button>
      </div>
      <div class="row">
        <div class="col-12">
          <button v-if="step > 1" :class= "isSecondStepFunction" class="au-btn col-md-2 bottom-btn" @click.prevent="prev">Previous</button>
          <button :class= "isFirstStepFunction" class="au-btn col-md-2 col-md-offset-5 bottom-btn " style="" @click.prevent="next">Next</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios"
import individualOrHousehold from "../components/individualOrHousehold.vue"
import postcode from "../components/postcode.vue"
import radioButtons from "../components/radioButtons.vue"
import userForm from "../components/userForm.vue"
import cards from "../components/cards.vue"
import Result from "../components/Result.vue"

export default {
  data() {
    return {
      step:1,
      isFirstStep:true,
      isSecondStep:true,
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
      cardsList: [
       
         {
          cardName: 'DHS',
          cardName2:'Health Care Card',
          variable:'has_health_care_card',
          srcImage: 'docs/assets/img/600x260.jpg',
          cardText: 'Department of Human Services Health Care Card',
          visible: true,
        },
         {
          cardName: 'DHS',
          cardName2:'Concession Card',
          variable:'has_concession_card',
          srcImage: 'docs/assets/img/600x260.jpg',
          cardText: 'Department of Human Services Concession card',
          visible: true,
        },
         {
          cardName: 'DHS',
          cardName2:'Pensioner Concession Card',
          variable:'has_department_human_services_pensioner_concession_card',
          srcImage: 'docs/assets/img/600x260.jpg',
          cardText: 'Department of Human Services Pensioner Concession card',
          visible: true,
        },
        {
          cardName: 'DVA',
          cardName2: 'Pensioner Concession Card',
          variable:'has_department_veteran_affairs_pensioner_concession_card',
          srcImage: 'docs/assets/img/600x260.jpg',
          cardText: 'Veteran Affairs Pensioner Concession card',
          visible: true,
        },
        {
          cardName: 'DVA',
          cardName2:'Gold Card',
          variable:'has_department_veteran_affairs_gold_card',
          srcImage: 'docs/assets/img/600x260.jpg',
          cardText: 'Veteran Affairs Gold Card',
          visible: true,
        },
         {
          cardName: 'NRMA',
          cardName2:'Membership Card',
          variable:'NRMA_free2go__is_NRMA_member',
          srcImage: 'docs/assets/img/600x260.jpg',
          cardText: 'NRMA Membership Card',
          visible: true,
        }
      ],
      rebatesList: [
        {
          rebateName: 'NRMA Free2Go',
          variable: 'NRMA_free2go__is_eligible',
          srcImage: 'docs/assets/img/NRMA_free2go__is_eligible.jpg',
          visible: false,
        },
        {
          rebateName: 'Family Energy Rebate',
          variable: 'family_energy_rebate__person_meets_retail_criteria',
          srcImage:'docs/assets/img/family_energy_rebate__person_meets_retail_criteria.jpg',
          visible: false,
        },
        {
          rebateName: 'Gas Rebate',
          variable: 'gas_rebate__person_meets_retail_criteria',
          srcImage:'docs/assets/img/gas_rebate__person_meets_retail_criteria.jpg',
          visible: false,
        },
        {
          rebateName: 'Free Will Preparation',
          variable: 'will_preparation_eligible_for_free_will_preparation',
          srcImage: 'docs/assets/img/will_preparation_eligible_for_free_will_preparation.jpg',
          visible: false,
        }
      ],
      dataReceived: {},
      questionsToRemove: []
    }
  },
  components: {
    individualOrHousehold,
    userForm,
    postcode,
    radioButtons,
    cards,
    Result
  },
  computed: {
    isFirstStepFunction: function (){
      return {
        'margin-center': this.isFirstStep =  this.step===1 ? true : false
      }
    },
    isSecondStepFunction: function (){
      return {
        'margin-offset': this.isSecondStep = this.step>1 ? true : false
      }
    }
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

      //this.dataToSend.persons.child1 = child

      //this.dataToSend.families.family1.children = ['child1']

      //this.dataToSend.persons.child1.birth.ETERNITY = formatted_date
    },
    updateAnswers(merged) {
      this.dataToSend.persons.parent1 = merged
    },
    updateQuestionsToRemove(questionsToRemove) {
      this.questionsToRemove.push(...questionsToRemove)
    },
    formSend() {
      axios
        .post(
          "https://openfisca-nsw-staging.herokuapp.com/calculate",
          this.dataToSend
        )
        .then(response => {
          console.log(response)
          this.dataReceived = response.data
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
