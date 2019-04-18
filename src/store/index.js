import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
  {
    state: {
      test: '',
      questions: [
        {
          variable: 'is_full_age_pension_recipient',
          text: 'Are you a full-age pension recipient from Department of Human Services?',
          answer: null,
          answers: {
            false: [],
            true: ['is_veterans_pension_recipient']
          },
          visible: true
        },
        {
          variable: 'is_veterans_pension_recipient',
          text: 'Are you a Veterans Affairs pension recipient?',
          answer: null,
          answers: {
            false: [],
            true: ['is_full_age_pension_recipient']
          },
          visible: true
        },
        {
          variable: 'gas_rebate__already_issued_in_financial_year',
          text: 'Have you already received a gas rebate in the current financial year?',
          answer: null,
          answers: {
            false: [],
            true: ['energy_bottled_gas_user']
          },
          visible: true
        },
        {
          variable: 'energy_bottled_gas_user',
          text: 'Do you use bottled LPG gas?',
          answer: null,
          answers: {
            false: [],
            true: []
          },
          visible: true
        },
        {
          variable: 'energy_provider_supply_customer',
          text: 'Do you receive your energy bill from a Strata manager or community village operator?',
          answer: null,
          answers: {
            false: [],
            true: []
          },
          visible: true
        },
        {
          variable: 'is_energy_account_holder',
          text: 'Do you have an energy account in your name?',
          answer: null,
          answers: {
            false: ['is_energy_account_holder', 'gas_rebate__already_issued_in_financial_year', 'energy_bottled_gas_user'],
            true: []
          },
          visible: true
        },
        {
          variable: 'is_family_tax_benefit_recipient',
          text: 'Have you had your Family Tax Benefit payment finalised for the previous year?',
          answer: null,
          answers: {
            false: ['energy_provider_supply_customer'],
            true: []
          },
          visible: true
        }
      ],
      cardsList: [
        {
          cardName: 'DHS',
          cardName2: 'Health Care Card',
          variable: 'has_health_care_card',
          srcImage: 'docs/assets/img/600x260.jpg',
          cardText: 'Department of Human Services Health Care Card',
          answer: null,
          visible: true
        },
        {
          cardName: 'DHS',
          cardName2: 'Concession Card',
          variable: 'has_concession_card',
          srcImage: 'docs/assets/img/600x260.jpg',
          cardText: 'Department of Human Services Concession card',
          answer: null,
          visible: true
        },
        {
          cardName: 'DHS',
          cardName2: 'Pensioner Concession Card',
          variable: 'has_department_human_services_pensioner_concession_card',
          srcImage: 'docs/assets/img/600x260.jpg',
          cardText: 'Department of Human Services Pensioner Concession card',
          answer: null,
          visible: true
        },
        {
          cardName: 'DVA',
          cardName2: 'Pensioner Concession Card',
          variable: 'has_department_veteran_affairs_pensioner_concession_card',
          srcImage: 'docs/assets/img/600x260.jpg',
          cardText: 'Veteran Affairs Pensioner Concession card',
          answer: null,
          visible: true
        },
        {
          cardName: 'DVA',
          cardName2: 'Gold Card',
          variable: 'has_department_veteran_affairs_gold_card',
          srcImage: 'docs/assets/img/600x260.jpg',
          cardText: 'Veteran Affairs Gold Card',
          answer: null,
          visible: true
        },
        {
          cardName: 'NRMA',
          cardName2: 'Membership Card',
          variable: 'NRMA_free2go__is_NRMA_member',
          srcImage: 'docs/assets/img/600x260.jpg',
          cardText: 'NRMA Membership Card',
          answer: null,
          visible: true
        }
      ],
      rebatesList: [
        {
          rebateName: 'NRMA Free2Go',
          variable: 'NRMA_free2go__is_eligible',
          srcImage: 'docs/assets/img/NRMA_free2go__is_eligible.jpg',
          visible: false
        },
        {
          rebateName: 'Family Energy Rebate',
          variable: 'family_energy_rebate__person_meets_retail_criteria',
          srcImage: 'docs/assets/img/family_energy_rebate__person_meets_retail_criteria.jpg',
          visible: false
        },
        {
          rebateName: 'Gas Rebate',
          variable: 'gas_rebate__person_meets_retail_criteria',
          srcImage: 'docs/assets/img/gas_rebate__person_meets_retail_criteria.jpg',
          visible: false
        },
        {
          rebateName: 'Free Will Preparation',
          variable: 'will_preparation_eligible_for_free_will_preparation',
          srcImage: 'docs/assets/img/will_preparation_eligible_for_free_will_preparation.jpg',
          visible: false
        }
      ],
      questionsToRemove: []
    },
    mutations: {
      setTest (state, value) {
        state.test = value
      }

    }
  }
)
