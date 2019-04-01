<template>
  <div id="radioButtons">
    <div class="row">
      <div class="col-md-12">
        <div v-for="(question_obj, index) in questions" :key="index" class="form-group form-radio form-spacing">
          <span>{{ question_obj.question }} -<i> {{ question_obj.variable }} </i></span>
          <br>
          <label class="au-control-input au-control-input--small">
            <input class="au-control-input__input" type="radio" :name="'question-' + index" v-model="radio_data[questions[index].variable]" value="true" :checked="question_obj.variable == 'yes'">
            <span class="au-control-input__text">Yes</span>
          </label>
          <label class="au-control-input au-control-input--small">
            <input class="au-control-input__input" type="radio" :name="'question-' + index" v-model="radio_data[questions[index].variable]" value="false" :checked="question_obj.variable == 'no'">
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
    var newArray = []
    for(var i = 1; i < this.questions.length; i++) {
      newArray.push(this.questions[i].variable)
    }
    console.log(newArray)
  },
  name: 'radioButtons',
  components: {
  },
  data () {
    return {
      radio_data: {
        'is_nsw_resident': '',
        'NRMA_free2go__is_NRMA_member': '',
        'is_act_resident': '',
        'is_family_tax_benefit_recipient': '',
        'is_energy_account_holder': '',
        'has_a_department_human_services_pensioner_concession_card': '',
        'has_department_veteran_affairs_pensioner_concession_card': '',
        'has_department_veteran_affairs_gold_card': '',
        'is_australian_citizen': '',
        'is_permament_resident': '',
        'is_full_age_pension_recipient': '',
        'is_veterans_pension_recipient': '',
        'has_health_care_card': '',
        'has_concession_card': '',
        'gas_rebate__already_issued_in_financial_year': '',
        'energy_bottled_gas_user': '',
        'energy_provider_supply_customer': '',
      },
      questions: [
      {
 variable: 'is_nsw_resident',
 text: "Are you an NSW resident?",
 answers: {
   true: ['is_act_resident'],
   false: ['is_family_tax_benefit_recipient', 'is_energy_account_holder', 'has_a_department_human_services_pensioner_concession_card', 'has_department_veteran_affairs_pensioner_concession_card', 'has_department_veteran_affairs_gold_card', 'is_australian_citizen', 'is_permament_resident', 'is_full_age_pension_recipient', 'is_veterans_pension_recipient', 'has_health_care_card', 'has_concession_card', 'gas_rebate__already_issued_in_financial_year', 'energy_bottled_gas_user', 'energy_provider_supply_customer']
 }
},
{
 variable: 'is_act_resident',
 text: 'Are you an ACT resident?',
 answers: {
   false: ['is_nsw_resident'],
   true: ['is_family_tax_benefit_recipient', 'is_energy_account_holder', 'has_a_department_human_services_pensioner_concession_card', 'has_department_veteran_affairs_pensioner_concession_card',
   'has_department_veteran_affairs_gold_card', 'is_australian_citizen', 'is_permament_resident', 'is_full_age_pension_recipient', 'is_veterans_pension_recipient', 'has_health_care_card',
   'has_concession_card', 'gas_rebate__already_issued_in_financial_year', 'energy_bottled_gas_user', 'energy_provider_supply_customer']
 }
},
{
 variable: 'has_a_department_human_services_pensioner_concession_card',
 text: 'Do you have a Human Services pensioner card?',
 answers: {
  false: [],
  true: ['has_department_veteran_affairs_pensioner_concession_card', 'has_department_veteran_affairs_gold_card', 'has_health_care_card', 'has_concession_card']
 }
},
{
  variable: 'has_department_veteran_affairs_pensioner_concession_card',
  text: 'Do you have a Veteran Affairs pensioner concession card?',
  answers: {
    false: [],
    true: ['has_a_department_human_services_pensioner_concession_card', 'has_department_veteran_affairs_gold_card', 'has_health_care_card', 'has_concession_card']
  }
},
{
  variable: 'has_department_veteran_affairs_gold_card',
  text: 'Do you have a Veterans Affairs gold card?',
  answers: {
    false: [],
    true: ['has_a_department_human_services_pensioner_concession_card', 'has_department_veteran_affairs_pensioner_concession_card', 'has_health_care_card', 'has_concession_card']
  }
},
{
  variable: 'has_health_care_card',
  text: 'Do you have a health care card issued by Department of Human Services??',
  answers: {
    false: [],
    true: ['has_a_department_human_services_pensioner_concession_card', 'has_department_veteran_affairs_pensioner_concession_card', 'has_department_veteran_affairs_gold_card', 'has_concession_card']
  }
},
{
  variable: 'has_concession_card',
  text: 'Do you have a Concession card issued by Department of Human Services?',
  answers: {
    false: [],
    true: ['has_a_department_human_services_pensioner_concession_card', 'has_department_veteran_affairs_pensioner_concession_card', 'has_department_veteran_affairs_gold_card', 'has_health_care_card']
  }
},
{
  variable: 'is_australian_citizen',
  text: 'Are you an Australian citizen?',
  answers: {
    false: [],
    true: ['is_permament_resident']
  }
},
{
  variable: 'is_permament_resident',
  text: 'Are you a permanent resident?',
  answers: {
    false: [],
    true: ['is_australian_citizen']
  }
},
{
  variable: 'is_full_age_pension_recipient',
  text: 'Are you a full-age pension recipient from Department of Human Services?',
  answers: {
    false: [],
    true: ['is_veterans_pension_recipient']
  }
},
{
  variable: 'gas_rebate__already_issued_in_financial_year',
  text: 'Have you already received a gas rebate in the current financial year?',
  answers: {
    false: [],
    true: ['energy_bottled_gas_user', 'has_concession_card', 'has_health_care_card', 'has_department_veteran_affairs_gold_card', 'has_department_veteran_affairs_pensioner_concession_card', 'has_a_department_human_services_pensioner_concession_card']
  }
},
{
  variable: 'energy_bottled_gas_user',
  text: 'Do you use bottled LPG gas?',
  answers: {
    false: [],
    true: []
  }
},
{
  variable: 'energy_provider_supply_customer',
  text: 'Do you receive your energy bill from a Strata manager or community village operator?',
  answers: {
    false: [],
    true: []
  }
},
{
  variable: 'is_energy_account_holder',
  text: 'Do you have an energy account in your name?',
  answers: {
    false: ['is_energy_account_holder', 'has_a_department_human_services_pensioner_concession_card', 'has_department_veteran_affairs_pensioner_concession_card', 'has_department_veteran_affairs_gold_card',
    'has_health_care_card', 'has_concession_card', 'gas_rebate__already_issued_in_financial_year', 'energy_bottled_gas_user'],
    true: []
  }
},
{
  variable: 'is_family_tax_benefit_recipient',
  text: 'Have you had your Family Tax Benefit payment finalised for the previous year?',
  answers: {
  false: ['energy_provider_supply_customer'],
  true: []
}
},
{
  variable: 'NRMA_free2go__is_NRMA_member',
  text: 'Do you hold an existing NRMA membership?',
  answers: {
  false: ['is_act_resident', 'is_australian_citizen', 'is_permament_resident'],
  true: []
}
}],
      requests: [
        { request: 'NRMA Free2Go', variable: 'NRMA_free2go__is_eligible'},
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
