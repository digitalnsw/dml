<template>

  <div id="result">
    <div class="container au-grid">
      <div class="row">
        <div v-for="(rebate_obj, index) in rebatesList" :key="index" class="col-xs-4">

          <div class="card mb-4" style="width: 18rem;">
            <img class="card-img-top img-fluid" src="docs/assets/img/600x260.jpg" alt="Card image cap">
              <div class="card-body">
                <h4 class="card-title">{{rebate_obj.rebateName}}</h4>
                <p class="card-text">Content about rebate goes here. Perhaps the eligibility criteria.</p>
                <br>
                <a href="#" class="btn btn-primary">Link to Rebate website</a>
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
  created() {

  }
}

</script>

<style>

</style>
