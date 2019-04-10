<template>
  <div id="postcode">
    <div class="row">
      <div class="col-md-12">
        <div class="form-group form-spacing">
          <h2 class="text-center AU-space bottom-btn">Tell us a little about yourself</h2>

            <div class="col-md-12 postcode-spacing">
              <h3>Are you a Permanent Resident or Australian citizen?</h3>
                <label class="au-control-input au-control-input--small">
                  <input class="au-control-input__input" name="typeOfResidency" v-model="typeOfResidency" type="radio" value="true">
                  <span class="au-control-input__text">Yes</span>
                </label>

                <label class="au-control-input au-control-input--small">
                  <input class="au-control-input__input" name="typeOfResidency" v-model="typeOfResidency" type="radio" value="false">
                  <span class="au-control-input__text">No</span>
                </label>
            </div><!-- end col -->

            <div class="col-md-12 postcode-spacing">
              <h3>Are you a NSW Resident?</h3>
                  <label class="au-control-input au-control-input--small">
                    <input class="au-control-input__input" name="NSWResidency" v-model="NSWResidency" type="radio" value="true">
                    <span class="au-control-input__text">Yes</span>
                  </label>

                  <label class="au-control-input au-control-input--small">
                    <input class="au-control-input__input" name="NSWResidency" v-model="NSWResidency" type="radio" value="false">
                    <span class="au-control-input__text">No</span>
                  </label>
            </div><!-- end col -->

         <!--  <div class="col-md-12 birthdate-spacing">
            <label for="text-input au-text-input--block" value="day" style="width:3rem; padding: 12px;"><h3>What is your postcode?</h3></label>
              <input class="au-text-input" id="day" v-model="day" placeholder="">
              <br>
              <br>
              <br> -->
            </div><!-- form group -->
        </div><!-- end col -->
      </div> <!-- row -->
    </div><!-- postcode -->
</template>

<script>
export default {
  data() {
    return {
      residencyQuestions: [
        'is_family_tax_benefit_recipient',
        'is_energy_account_holder',
        'is_australian_citizen',
        'is_permanent_resident',
        'is_full_age_pension_recipient',
        'is_veterans_pension_recipient',
        'gas_rebate__already_issued_in_financial_year',
        'energy_bottled_gas_user',
        'energy_provider_supply_customer'
      ]
    }
  },
  destroyed() {
    if(this.typeOfResidency === 'true') {
      var typeOfResidency = {
        is_permanent_resident: { "2019-04": true },
        is_australian_citizen: { "2019-04": true }
      }
      this.$emit('updateAnswers', typeOfResidency)
    }
    if(this.NSWResidency === 'true') {
      var NSWResidency = {
        is_nsw_resident: { "2019-04": true },
      }
      this.$emit('updateAnswers', NSWResidency)
      
    } else {
      this.$emit('updateQuestionsToRemove', this.residencyQuestions)
    }
    
  }
}
</script>