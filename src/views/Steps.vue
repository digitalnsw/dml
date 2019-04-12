<template>
  <div id="steps">
    <form @submit.prevent="formSend" id="rebatesForm">
      <div v-if="step === 1">
        <individualOrHousehold></individualOrHousehold>
      </div>
      <div v-else-if="step === 2">
        <postcode v-on:updateAnswers="updateAnswers" v-on:updateQuestionsToRemove="updateQuestionsToRemove"></postcode>
        <user-form v-on:updateDateOfBirth="updateDateOfBirth"></user-form>
      </div>
      <div v-else-if="step === 3">
        <cards v-on:updateAnswers="updateAnswers" :cardsList="cardsList"></cards>
      </div>
      <div v-else-if="step === 4">
        <radioButtons v-on:updateAnswers="updateAnswers" :rebatesList="rebatesList" :questionsToRemove="questionsToRemove"></radioButtons>
      </div>
      <div v-else>
        <result :dataReceived="dataReceived" :rebatesList="rebatesList"></result>
        <button class="au-btn bottom-btn">Submit</button>
      </div>
      <div class="row">
        <div>
          <button v-if="step > 1" :class="isSecondStepFunction" class="au-btn col-md-2 bottom-btn" @click.prevent="prev">Previous</button>
          <button :class="isFirstStepFunction" class="au-btn col-md-2 col-md-offset-5 bottom-btn" @click.prevent="next">Next</button>
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
          answer: null,
          visible: true,
        },
         {
          cardName: 'DHS',
          cardName2:'Concession Card',
          variable:'has_concession_card',
          srcImage: 'docs/assets/img/600x260.jpg',
          cardText: 'Department of Human Services Concession card',
          answer: null,
          visible: true,
        },
         {
          cardName: 'DHS',
          cardName2:'Pensioner Concession Card',
          variable:'has_department_human_services_pensioner_concession_card',
          srcImage: 'docs/assets/img/600x260.jpg',
          cardText: 'Department of Human Services Pensioner Concession card',
          answer: null,
          visible: true,
        },
        {
          cardName: 'DVA',
          cardName2: 'Pensioner Concession Card',
          variable:'has_department_veteran_affairs_pensioner_concession_card',
          srcImage: 'docs/assets/img/600x260.jpg',
          cardText: 'Veteran Affairs Pensioner Concession card',
          answer: null,
          visible: true,
        },
        {
          cardName: 'DVA',
          cardName2:'Gold Card',
          variable:'has_department_veteran_affairs_gold_card',
          srcImage: 'docs/assets/img/600x260.jpg',
          cardText: 'Veteran Affairs Gold Card',
          answer: null,
          visible: true,
        },
         {
          cardName: 'NRMA',
          cardName2:'Membership Card',
          variable:'NRMA_free2go__is_NRMA_member',
          srcImage: 'docs/assets/img/600x260.jpg',
          cardText: 'NRMA Membership Card',
          answer: null,
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
    updateDateOfBirth(formatted_date) {

      this.dataToSend.persons.parent1.birth = {}

      this.dataToSend.persons.parent1.birth.ETERNITY = formatted_date
    },
    updateAnswers(merged) {
      let currentData = this.dataToSend.persons.parent1

      this.dataToSend.persons.parent1 = {...currentData,...merged}

      console.log(this.dataToSend.persons.parent1)
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
