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
        </div>
        </div>

<div class="col-xs-4">
          <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="docs/assets/img/600x260.jpg" alt="Card image cap">
            <div class="card-body">
              <h4 class="card-title">Name of Rebate goes here</h4>
              <p class="card-text">{{dataReceived}} Content about rebate goes here. Perhaps the eligibility criteria.</p>
              <br>
              <a href="#" class="btn btn-primary">Link to Rebate website</a>
            </div><!-- card-body -->
          </div>
</div>
    
<div class="col-xs-4">
          <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="docs/assets/img/600x260.jpg" alt="Card image cap">
            <div class="card-body">
              <h4 class="card-title">Name of Rebate goes here</h4>
              <p class="card-text">{{dataReceived}} Content about rebate goes here. Perhaps the eligibility criteria.</p>
              <br>
              <a href="#" class="btn btn-primary">Link to Rebate website</a>
            </div><!-- card-body -->
          </div>
</div>


          </div>
          </div>

  </div><!-- card -->

        </div><!-- end col -->
      </div><!-- row -->
    </div><!-- container -->
  </div><!-- result -->
</template>


       
        <div class="card mb-4">
            <img class="card-img-top img-fluid" src="//placehold.it/500x280" alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title">2 Card title</h4>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div class="w-100 d-none d-sm-block d-md-none"><!-- wrap every 2 on sm--></div>
        <div class="card mb-4">
            <img class="card-img-top img-fluid" src="//placehold.it/500x280" alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title">3 Card title</h4>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        </div>

<script>
export default {
  name: 'result',
  props: ['dataReceived']
}
</script>

<style>

</style>
