<template>
  <div id="radioButtons">
    <div class="row">
      <div class="col-md-12">
        <div v-for="question in questions" :key="question" class="form-group form-radio form-spacing">
          <span>{{ question }}</span>
          <br>
          <label class="au-control-input au-control-input--small">
            <input class="au-control-input__input" type="radio" name="radio-ex">
            <span class="au-control-input__text">Text here</span>
          </label>
          <label class="au-control-input au-control-input--small">
            <input class="au-control-input__input" type="radio" name="radio-ex">
            <span class="au-control-input__text">Text here</span>
          </label>
        </div><!-- form group -->
      </div> <!-- end col -->
    </div><!-- row -->
  </div><!-- radio buttons -->
</template>

<script>

export default {
  name: 'radioButtons',
  components: {
  },
  data () {
    return {
    questions: [
      'Here is the first question for you',
      'This is the second question!',
      'I am the third question, yes I am'
      ]
  }
}
}

</script>

<style>
</style>
