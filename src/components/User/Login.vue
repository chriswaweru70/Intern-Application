<template>
	<div>
		<div class="register-container">
			<div class="row">
				<div class="login">
					<div class="login__form">
						<h4 class="heading-main">Login</h4>
						<form action="#" class="form">
							<div class="form__group">
								<input type="text" class="form__input" placeholder="UserName" id="user-name" required />
							</div>
							<div class="form__group">
								<input type="password" class="form__input" placeholder="Password" id="password" required />
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
 .login__form {
	position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%);
 }
</styles>
