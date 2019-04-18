import axios from 'axios'

export default {
  data () {
    return {
      dataToSend: {
        persons: {
          parent1: {
          }
        },
        families: {
          family1: {
            parents: ['parent1']
          }
        }
      },
      dataReceived: {}
    }
  },
  methods: {
    updateDateOfBirth (formattedDate) {
      this.dataToSend.persons.parent1.birth = {}

      this.dataToSend.persons.parent1.birth.ETERNITY = formattedDate
    },
    updateAnswers (merged) {
      let currentData = this.dataToSend.persons.parent1

      this.dataToSend.persons.parent1 = {...currentData, ...merged}
    },
    updateQuestionsToRemove (questionsToRemove) {
      this.questionsToRemove.push(...questionsToRemove)
    },
    formSend () {
      axios
        .post(
          'https://openfisca-nsw-staging.herokuapp.com/calculate',
          this.dataToSend
        )
        .then(response => {
          console.log(response)
          this.dataReceived = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    yearMonth () {
      let currentMonth = (new Date().getMonth() + 1).toString()
      const currentYear = new Date().getFullYear()

      currentMonth = currentMonth.padStart(2, 0)
      return currentYear + '-' + currentMonth
    }
  }
}
