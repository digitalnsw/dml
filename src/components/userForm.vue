<template>
  <div id="user-form">
    <div class="row">
      <div class="col-md-12 birthdate-spacing">
        <div class="form-group" style="margin-bottom: 5rem;">
          <h3>What is your birth date?</h3>
          <select id="day" v-model="day" class="au-select">
            <option disabled value="">Day</option>
            <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
          </select>
          <select id="month" v-model="month" class="au-select">
            <option disabled value="">Month</option>
            <option v-for="(month, index) in months" :key="index" :value="index+1">{{ month }}</option>
          </select>
          <select id="year" v-model="year" class="au-select">
            <option disabled value="">Year</option>
            <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
          </select>

            </div><!-- form-group -->
        </div><!-- end col-->
      </div> <!-- row -->
    </div><!-- user-form -->
</template>

<script>
export default {
  destroyed(){
    let textToTranslate = this.year + '/' + this.month + '/' + this.day
      textToTranslate = new Date(textToTranslate)
      let formatted_date =
          textToTranslate.getFullYear() + '-'
          + ('0' + (textToTranslate.getMonth()+1)).slice(-2) + '-'
          + ('0' + textToTranslate.getDate()).slice(-2)
      this.$emit('updateDateOfBirth', formatted_date)
  },
  data() {
    return {
      day: '',
      month: '',
      year: '',
      textToTranslate: '',
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    }
  },
  computed: {
    years() {
      const year = new Date().getFullYear()
      return Array.from(
        { length: year - 1900 },
        (value, index) => 1901 + index
      )
    },
    days() {
      let daysWithZero = []
      for (var i = 1; i <= 31; i++) {
        if (i < 10) {
          daysWithZero.push("0" + i)
        } else {
          daysWithZero.push(i)
        }
      }
      return daysWithZero
    }
  }
}
</script>

<style>

</style>
