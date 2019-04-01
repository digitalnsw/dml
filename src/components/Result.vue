<template>

  <div id="result">
    <div class="container au-grid">
      <div class="row">
        <div class="col-xs-4">

          <div class="card mb-4" style="width: 18rem;">
            <img class="card-img-top img-fluid" src="docs/assets/img/600x260.jpg" alt="Card image cap">
              <div class="card-body">
                <h4 class="card-title">Name of Rebate goes here</h4>
                <p class="card-text">{{dataReceived}} Content about rebate goes here. Perhaps the eligibility criteria.</p>
                <br>
                <a href="#" class="btn btn-primary">Link to Rebate website</a>
              </div><!-- card-body -->
          </div><!-- card -->
        </div><!-- end col -->

        <div class="col-xs-4">
          <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="docs/assets/img/600x260.jpg" alt="Card image cap">
            <div class="card-body">
              <h4 class="card-title">Name of Rebate goes here</h4>
              <p class="card-text">{{dataReceived}} Content about rebate goes here. Perhaps the eligibility criteria.</p>
              <br>
              <a href="#" class="btn btn-primary">Link to Rebate website</a>
            </div><!-- card-body -->
          </div><!-- card -->
        </div><!-- end col -->
    
        <div class="col-xs-4">
          <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="docs/assets/img/600x260.jpg" alt="Card image cap">
            <div class="card-body">
              <h4 class="card-title">Name of Rebate goes here</h4>
              <p class="card-text">{{dataReceived}} Content about rebate goes here. Perhaps the eligibility criteria.</p>
              <br>
              <a href="#" class="btn btn-primary">Link to Rebate website</a>
            </div><!-- card-body -->
          </div><!-- card -->
        </div><!-- card-body -->
        
      </div><!-- row -->
    </div><!-- container -->
  </div><!-- result -->
</template>

<script>
export default {
  name: 'result',
  props: ['dataReceived']
}
</script>

<style>

</style>
