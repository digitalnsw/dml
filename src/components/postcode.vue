<template>
  <div id="postcode">
    <div class="row">
      <div class="col-md-12">
        <div class="form-group form-spacing">
          <h2 class="text-center AU-space bottom-btn">Tell us a little about yourself</h2>

            <div class="col-12 postcode-spacing">
              <h3>Are you a Permanent Resident or Australian citizen?</h3>
<<<<<<< Updated upstream

                <label class="au-control-input au-control-input--small">
                  <input class="au-control-input__input" type="radio" value="">
                  <span class="au-control-input__text">Yes</span>
                </label>

                <label class="au-control-input au-control-input--small">
=======
                <label class="au-control-input au-control-input--small">
                  <input class="au-control-input__input" type="radio" value="">
                  <span class="au-control-input__text">Yes</span>
                </label>

                <label class="au-control-input au-control-input--small">
>>>>>>> Stashed changes
                  <input class="au-control-input__input" name="typeOfResidency" type="radio" value="">
                  <span class="au-control-input__text">No</span>
                </label>
              </div><!-- end col -->

          <div class="col-md-12 birthdate-spacing">
            <label for="text-input au-text-input--block" value="day" style="width:3rem; padding: 12px;"><h3>What is your postcode?</h3></label>
              <input class="au-text-input" id="day" v-model="day" placeholder="">
              <br>
              <br>
              <br>
            </div><!-- end col -->
        </div><!-- form group -->
      </div> <!-- end col -->
    </div><!-- row -->
  </div>
</template>

<script>
</script>