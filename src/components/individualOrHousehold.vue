<template>

<div id="individualOrHousehold">

  <div class="au-body">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-12">
					<h2 class="text-center">Let's get started!</h2>
					<h3>Are you an Individual or a Household?</h3>

						<div id="radioButtons">
							<div class="row">
									<br>
										<div class="col-md-6">
											<img class="icon" src="docs/assets/img/children.png" alt="Individual">
                      <div class="col-12">
												<label class="au-control-input au-control-input--small bottom-btn">
													<input class="au-control-input__input" type="radio" value="true">
													<span class="au-control-input__text">Individual</span>
												</label>
                      </div>
										</div><!-- end col -->
		
										<div class="col-md-6">
											<img class="icon" src="docs/assets/img/teens.png" alt="Household">
                      <div class="col-12">
												<label class="au-control-input au-control-input--small margin bottom-btn">
													<input class="au-control-input__input" type="radio" value="true">
													<span class="au-control-input__text">Household</span>
												</label>
                      </div>
									  </div><!-- end col -->
							</div><!-- row -->
						</div><!-- radio buttons -->

				</div><!-- end col -->
			</div><!-- row -->
		</div><!-- container -->
  </div><!-- au-body -->
</div><!-- individualOrHousehold -->

</template>

<script>
export default {
  name: 'individualOrHousehold'
}

</script>

<style>

</style>