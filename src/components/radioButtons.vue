<template>
  <div id="radioButtons">
    <div class="row">
      <div class="col-md-12">
        <div v-for="(question_obj, index) in this.$store.state.questions.filter(isVisible)" :key="index" class="form-group form-radio form-spacing">
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
  components: {
    Buttons
  },
  data () {
    return {
      
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
    this.$store.state.questionsToRemove.forEach( element => {
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
    const rebatesObject = arrayToObject2(this.$store.state.rebatesList)

    let merged = {...answersObject, ...rebatesObject}

    this.$emit('updateAnswers', merged)

  },

}

</script>

<style>
</style>
