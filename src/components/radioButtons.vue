<template>
  <div id="radioButtons">
    <div class="row">
      <div class="col-md-12">
        <div v-for="question_obj in questions" :key="question_obj" class="form-group form-radio form-spacing">
          <span>{{ question_obj.question }}</span>
          <br>
          <label class="au-control-input au-control-input--small">
            <input class="au-control-input__input" type="radio" :name="question_obj.variable" value="yes" >
            <span class="au-control-input__text">Yes</span>
          </label>
          <label class="au-control-input au-control-input--small">
            <input class="au-control-input__input" type="radio" :name="question_obj.variable" value="no" >
            <span class="au-control-input__text">No</span>
          </label>
        </div><!-- form group -->
      </div> <!-- end col -->
    </div><!-- row -->
  </div><!-- radio buttons -->
</template>

<script>

export default {
  destroyed(){
    const radio = getFormDataAsJSON(rebatesForm);
    console.log(radio);
  },
  name: 'radioButtons',
  components: {
  },
  data () {
    return {
    questions: [
      // {'Are you individual or a household', ''},
      // {'Family has more than one eligible child' (creative kids), 'creative_kids__family_has_children_eligible'},
      // {'Family has more than one eligible child' (active kids),'active_kids__family_has_children_eligible'},
      { question: 'Are you a NSW resident', variable: 'is_nsw_resident'},
      { question: 'What is your date of birth', variable: 'birth'},
      { question: 'Are you the guardian', variable: 'is_guardian'},
      { question: 'Are you the parent', variable: 'is_parent'},
      { question: 'Are you the carer', variable: 'is_carer'},
      { question: 'Does your child have a vaild Medicare card', variable: 'has_valid_madicare_card'},
      { question: 'Is your child enrolled in school or an equivalent learning situation', variable: 'is_enroled_in_school'},
      { question: 'Do you hold an existing NRMA membership', variable: 'NRMA_free2go__is_NRMA_member'},
      { question: 'Are you an ACT resident', variable: 'is_act_resident'},
      { question: 'Have you received an Active Kids voucher during the previous year', variable: 'active_kids__already_issued_in_calendar_year'},
      { question: 'Have you received a Creative Kids voucher during the previous year', variable: 'creative_kids__already_issued_in_calendar_year'},
      { question: 'Have you had your Family Tax Benefit payment finalised for the previous year', variable: 'is_family_tax_benefit_recipient'},
      { question: 'Do you have an energy account in your name', variable: 'is_energy_account_holder'},
      { question: 'Do you have a Human Services pensioner card', variable: 'has_a_department_human_services_pensioner_concession_card'},
      { question: 'Do you have a Veteran Affairs concession card', variable: 'has_department_veteran_affairs_pensioner_concession_card'},
      { question: 'Do you have a Veteran Affairs gold card', variable: 'has_department_veteran_affairs_gold_card'},
      { question: 'Are you an Australian citizen', variable: 'is_australian_citizen'},
      { question: 'Are you a permament resident', variable: 'is_permament_resident'},
      { question: 'Are you a full-age pension recipient from Department of Human Services', variable: 'is_full_age_pension_recipient'},
      { question: 'Are you a veteran affairs pension recipient', variable: 'is_veterans_pension_recipient'},
      { question: 'Do you have a health care card issued by Department of Human Services', variable: 'has_health_care_card'},
      { question: 'Do you have a concession card issued by Department of Human Services', variable: 'has_concession_card'},
      { question: 'Have you already received a gas rebate in the current financial year', variable: 'gas_rebate__already_issued_in_financial_year'},
      { question: 'Do you use bottled LPG gas', variable: 'energy_bottled_gas_user'},
      { question: 'Do you receive your energy bill from a strata manager or community village operator', variable: 'energy_provider_supply_customer'}
    ],
    requests: [
      { request: 'NRMA Free2Go', variable: 'NRMA_free2go__is_eligible'},
      { request: 'Active Kids', variable: 'active_kids__is_eligible'},
      { request: 'Creative Kids', variable: 'creative_kids__is_eligible'},
      { request: 'Family Energy Rebate', variable: 'family_energy_rebate__person_meets_retail_criteria'},
      { request: 'Gas Rebate', variable: 'gas_rebate__person_meets_retail_criteria'},
      { request: 'Free Will Preparation', variable: 'will_preparation_eligible_for_free_will_preparation'}
    ]
  }
}
}

</script>

<style>
</style>
