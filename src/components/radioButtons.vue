<template>
    <div id="radioButtons">
        <div class="form-group form-radio">
            <div class="row">
                <div class="col-12 form-spacing">
                    <div v-for="question in questions" :key="question" class="form-group form-radio">
                        <div class="row">
                            <div class="col-12 form-spacing">
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
                            </div> <!-- end col -->
                        </div><!-- row -->
                    </div><!-- form group -->
                </div><!-- end col -->
            </div><!-- row -->
        </div><!-- form group -->
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
