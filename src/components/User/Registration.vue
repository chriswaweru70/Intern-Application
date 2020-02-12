<template>
	<div>
		<div class="register-container">
			<div class="row">
				<div class="register">
					<div class="register__form">
						<h4 class="heading-main">Register</h4>
						<p class="heading-sub-main">Its completely free.</p>
						<form action="#" class="form">
							<div class="form__group">
								<input type="text" class="form__input" placeholder="Full Name" id="name" required />
							</div>
							<div class="form__group">
								<input type="text" class="form__input" placeholder="UserName" id="user-name" required />
							</div>
							<div class="form__group">
								<input type="email" class="form__input" placeholder="Email" id="email" required />
							</div>
							<div class="form__group">
								<input type="password" class="form__input" placeholder="Password" id="password" required />
							</div>
							<div class="form__group">
								<input
									type="password"
									class="form__input"
									placeholder="Confirm Password"
									id="c-password"
									required
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>
<styles scoped lang="scss">

</styles>
