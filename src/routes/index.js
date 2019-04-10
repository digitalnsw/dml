import individualOrHousehold from '../components/individualOrHousehold.vue'
import postcode from '../components/postcode.vue'
import radioButtons from '../components/radioButtons.vue'
import userForm from '../components/userForm.vue'
import cards from '../components/cards.vue'
import Result from '../components/Result.vue'

export const routes = [
 { path: '/first-step', name: 'firstStep', component: individualOrHousehold },
 { path: '/second-step', name: 'secondStep', component: postcode },
 { path: '/third-step', name: 'thirdStep', component: radioButtons },
 { path: '/fourth-step', name: 'fourthStep', component: userForm },
 { path: '/fifth-step', name: 'fifthStep', component: cards },
 { path: '/sixth-step', name: 'sixthStep', component: Result }
]
