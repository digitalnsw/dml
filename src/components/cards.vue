<template>

  <div id="cards">
    <div class="container au-grid">
      <div class="row">
        <h3>Do you have any of the following Concession, Pension or Membership cards?</h3>
        <!-- <div class="col-xs-4 AU-spacing"> -->
        <div v-for="(card_obj, index) in cardsList.filter(isVisible)" :key="index" class="col-md-4 col-xs-6">
          <div class="card">
            <img class="card-img-top img-fluid" :src="card_obj.srcImage" :alt="card_obj.cardName">
              <div class="card-body">
                <h4 class="card-title">{{card_obj.cardName}}<br>{{card_obj.cardName2}}</h4>
                <p class="card-text">{{card_obj.cardText}}</p>
                <br>
                <label class="au-control-input au-control-input--small" style="margin-top: 3rem;" >
                  <input class="au-control-input__input" name="cards" v-model="card_obj.answer" type="checkbox" :value="card_obj.variable">
                  <span class="au-control-input__text"></span>
                </label>
                <br>
                <br>
              </div><!-- card-body -->
          </div><!-- card -->
        </div><!-- end col -->
      
      </div><!-- row -->
    </div><!-- container -->
  </div><!-- cards -->

</template>

<script>
export default {
  props: ['cardsList'],
  methods: {
    isVisible(value) {
      if(value.visible == true) {
        return true
      } else {
        return false
        }
    }
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

    const answersObject = arrayToObject(this.$props.cardsList)

    this.$emit('updateAnswers', answersObject)
  }
}
</script>