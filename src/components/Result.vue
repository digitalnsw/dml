<template>

  <div id="result">
    <div class="container au-grid">
      <div class="row">
        <div v-for="(rebate_obj, index) in rebatesList.filter(isVisible)" :key="index" class="col-xs-4">

          <div class="result-card" style="width: 18rem;">
            <img class="card-img-top img-fluid" :src="rebate_obj.srcImage" :alt="rebate_obj.rebateName">
              <div class="card-body">
                <h4 class="card-title">{{rebate_obj.rebateName}}</h4>
                <p class="card-text">Content about rebate goes here. Perhaps the eligibility criteria.</p>
                <br>
                <a href="#" class="btn btn-primary">Link to Rebate website</a>
                <br>
                <br>
              </div><!-- card-body -->
          </div><!-- card -->
        </div><!-- end col -->
        
      </div><!-- row -->
    </div><!-- container -->
  </div><!-- result -->
</template>

<script>
export default {
  name: 'result',
  props: ['rebatesList', 'dataReceived'],
  watch: {
    dataReceived(newValue, oldValue) {
      if(newValue) {
        this.eligible()
      }
    }
  },
  methods: {
    isVisible(value) {
      if(value.visible == true) {
        return true
      } else {
        return false
      }

    },
    eligible() {
      let entriesList = Object.entries(this.dataReceived.persons.parent1)

      this.rebatesList.forEach( rebate => {

        rebate.visible = false

        for (const [rebateID, objWithAnswer] of entriesList) {

          let valuesList = Object.values(objWithAnswer)

          if(rebateID == rebate.variable && valuesList[0] == true) {

            rebate.visible = true

          }
        }
      })
    }
  }
}

</script>

<style>

</style>
