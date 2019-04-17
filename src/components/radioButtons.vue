<template>
  <div id="radioButtons">
    <div class="row">
      <div class="col-md-12">
        <div v-for="(question_obj, index) in questions.filter(isVisible)" :key="index" class="form-group form-radio form-spacing">
          <span>{{ question_obj.text }} -<i> {{ question_obj.variable }} </i></span>
          <br>
          <label class="au-control-input au-control-input--small">
            <input class="au-control-input__input" type="radio" v-on:click="hideQuestions($event, question_obj.variable)" :name="question_obj.variable" value="true" v-model="question_obj.answer" :checked="question_obj.variable == 'yes'">
            <span class="au-control-input__text">Yes</span>
          </label>
          <label class="au-control-input au-control-input--small">
            <input class="au-control-input__input" type="radio" v-on:click="hideQuestions($event, question_obj.variable)" :name="question_obj.variable" value="false" v-model="question_obj.answer" :checked="question_obj.variable == 'no'">
            <span class="au-control-input__text">No</span>
          </label>
        </div><!-- form group -->
      </div> <!-- end col -->
    </div><!-- row -->
    <buttons></buttons>
  </div><!-- radio buttons -->
</template>

<script>

import Buttons from './Buttons.vue'

export default {
  name: 'radioButtons',
  props: ['rebatesList', 'questionsToRemove'],
  components: {
    Buttons
  },
  data () {
    return {
      questions: [
{
  variable: 'is_full_age_pension_recipient',
  text: 'Are you a full-age pension recipient from Department of Human Services?',
  answer: null,
  answers: {
    false: [],
    true: ['is_veterans_pension_recipient']
  },
  visible: true,
},
{
  variable: 'is_veterans_pension_recipient',
  text: 'Are you a Veterans Affairs pension recipient?',
  answer: null,
  answers: {
    false: [],
    true: ['is_full_age_pension_recipient']
  },
  visible: true,
},
{
  variable: 'gas_rebate__already_issued_in_financial_year',
  text: 'Have you already received a gas rebate in the current financial year?',
  answer: null,
  answers: {
    false: [],
    true: ['energy_bottled_gas_user',]
  },
  visible: true,
},
{
  variable: 'energy_bottled_gas_user',
  text: 'Do you use bottled LPG gas?',
  answer: null,
  answers: {
    false: [],
    true: []
  },
  visible: true,
},
{
  variable: 'energy_provider_supply_customer',
  text: 'Do you receive your energy bill from a Strata manager or community village operator?',
  answer: null,
  answers: {
    false: [],
    true: []
  },
  visible: true,
},
{
  variable: 'is_energy_account_holder',
  text: 'Do you have an energy account in your name?',
  answer: null,
  answers: {
    false: ['is_energy_account_holder', 'gas_rebate__already_issued_in_financial_year', 'energy_bottled_gas_user'],
    true: []
  },
  visible: true,
},
{
  variable: 'is_family_tax_benefit_recipient',
  text: 'Have you had your Family Tax Benefit payment finalised for the previous year?',
  answer: null,
  answers: {
    false: ['energy_provider_supply_customer'],
    true: []
  },
  visible: true,
}],
    }
  },
  methods:{
    hideQuestions(event, variable) {

      let questionToProcess = this.questions.find(question => question.variable == variable)

      if(event.target.value === 'true') {
        questionToProcess.answers.true.forEach( element => {
          let questionToProcess2 = this.questions.find(question => question.variable == element)
          questionToProcess2.visible = false
        })
        questionToProcess.answers.false.forEach( element => {
          let questionToProcess2 = this.questions.find(question => question.variable == element)
          questionToProcess2.visible = true
        })
      } else {
        questionToProcess.answers.false.forEach( element => {
          let questionToProcess2 = this.questions.find(question => question.variable == element)
          questionToProcess2.visible = false
        })
        questionToProcess.answers.true.forEach( element => {
          let questionToProcess2 = this.questions.find(question => question.variable == element)
          questionToProcess2.visible = true
        })
      }
    },
    isVisible(value) {
      if(value.visible == true) {
        return true
      } else {
        return false
      }

    }
  },
  created() {
    this.$props.questionsToRemove.forEach( element => {
      let questionToProcess2 = this.questions.find(question => question.variable == element)
      if(questionToProcess2) {
        questionToProcess2.visible = false
      }
    })
  },
  destroyed() {
    let currentMonth = (new Date().getMonth() + 1).toString()
    const currentYear = new Date().getFullYear()

    currentMonth = currentMonth.padStart(2, 0)
    const yearMonth = currentYear + '-' + currentMonth
    const arrayToObject = (array) =>
      array.reduce((obj, item) => {
        obj[item.variable] = { [yearMonth]: item.answer }
        return obj
      }, {})
    const arrayToObject2 = (array) =>
      array.reduce((obj, item) => {
        obj[item.variable] = { [yearMonth]: null }
        return obj
      }, {})

    const answersObject = arrayToObject(this.questions)
    const rebatesObject = arrayToObject2(this.$props.rebatesList)

    let merged = {...answersObject, ...rebatesObject}

    this.$emit('updateAnswers', merged)

  },

}

</script>

<style>
</style>
