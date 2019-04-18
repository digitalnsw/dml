<template>
 
  <div class="row">
    <div class="col-12">
      <button class="au-btn col-md-2 bottom-btn" @click="navigatePrev" type="button" v-show="togglePrevious()">Previous</button>
      <button class="au-btn col-md-2 bottom-btn" @click="navigateNext" type="button">{{ nextBtnTxt() }}</button>
    </div>
  </div>
 
</template>
 
<script>
export default {

  data () {

    return {

      }
  },
  methods: {
    nextBtnTxt() {
      if(this.$route.name == 'sixthStep') {

        return 'Finish'
      }

      return 'Next'
    },
    togglePrevious() {
      if(this.$route.name == 'firstStep') {

        return false
      }

      return true
    },
    navigateNext() {

      this.nextBtnTxt = 'Next'

      if(this.$route.name == 'firstStep') {

        this.$router.push('/second-step/')
      } else if(this.$route.name == 'secondStep') {

        this.$router.push('/third-step/')

      } else if(this.$route.name == 'thirdStep') {

        this.$router.push('/fourth-step/')

      } else if(this.$route.name == 'fourthStep') {

        this.$router.push('/fifth-step/')

      } else if(this.$route.name == 'fifthStep') {

        this.$router.push('/sixth-step/')
      } else {

        this.nextBtnTxt = 'Finish'

        // handle saving of the form
      }
    },
    navigatePrev() {

      this.nextBtnTxt = 'Next'

      if(this.$route.name == 'sixthStep') {

        this.$router.push('/fifth-step/')
      } else if(this.$route.name == 'fifthStep') {

        this.$router.push('/fourth-step/')
      } else if(this.$route.name == 'fourthStep') {

        this.$router.push('/third-step/')
      } else if(this.$route.name == 'thirdStep') {

        this.$router.push('/second-step/')
      } else if(this.$route.name == 'secondStep') {

        this.$router.push('/first-step/')
      }
    }
  }
}
</script>