<template>
  <div id="user-form">
    <form v-on:submit.prevent="formSubmit">
      <!-- Date picker Dropdown -->
      <label for="day">When is your birthday?</label>
      <select id="day" v-model="day" class="au-select">
        <option value="">Day</option>
        <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
      </select>
      <select id="month" v-model="month" class="au-select">
        <option value="">Month</option>
        <option v-for="(month, index) in months" :key="index" :value="index+1">{{ month }}</option>
      </select>
      <select id="year" v-model="year" class="au-select">
        <option value="">Year</option>
        <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
      </select>
      <input class="au-btn" type="submit" value="Send Request">
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
  methods: {
    formSubmit() {
      let textToTranslate = this.year + '/' + this.month + '/' + this.day
      textToTranslate = new Date(textToTranslate)
      let formatted_date = textToTranslate.getFullYear() + "-" + (textToTranslate.getMonth() + 1) + "-" + textToTranslate.getDate()
      console.log(formatted_date)
      this.$emit('formSubmit', formatted_date)
    }
  },
  computed: {
    years () {
      const year = new Date().getFullYear()
      return Array.from({length: year - 1900}, (value, index) => 1901 + index)
    },
    days () {
        let daysWithZero = []
        for(var i=1; i <= 31; i++) {
          if(i<10) {
            daysWithZero.push('0'+ i)
          } else {
            daysWithZero.push(i)
          }
        }
        return daysWithZero
    }
  }
}
</script>

<style scoped>
#hello {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
