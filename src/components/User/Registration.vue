<template>
	<div>
		<div class="register-container">
			<div class="row">
				<div class="register">
					<div class="register__form">
						<h4 class="heading-main">Register</h4>
						<p class="heading-sub-main">Its completely free.</p>
						<form action="#" class="form" @submit.prevent="onSignup">
							<div class="form__group">
								<input
									v-model="name"
									id="name"
									type="text"
									class="form__input"
									placeholder="Full Name"
									required
								/>
							</div>
							<div class="form__group">
								<input
									v-model="username"
									id="username"
									type="text"
									class="form__input"
									placeholder="UserName"
									required
								/>
							</div>
							<div class="form__group">
								<input
									v-model="email"
									id="email"
									type="email"
									class="form__input"
									placeholder="Email"
									required
								/>
							</div>
							<div class="form__group">
								<input
									v-model="password"
									id="password"
									type="password"
									class="form__input"
									placeholder="Password"
									required
								/>
							</div>
							<div class="form__group">
								<input
									v-model="confirmPassword"
									id="confirmPassword"
									type="password"
									class="form__input"
									placeholder="Confirm Password"
									required
								/>
								<p class="error">{{comparePasswords}}</p>
							</div>
							<div class="form__group">
								<button href="#" class="btn btn--submit">
									Submit
									&rarr;
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: '',
			username: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	},
	methods: {
		onSignup() {
			console.log({
				name: this.name,
				username: this.username,
				email: this.email,
				password: this.password,
				confirmPassword: this.confirmPassword
			})
		}
	},
	computed: {
		comparePasswords() {
			return this.password !== this.confirmPassword
				? 'Passwords do not match'
				: ''
			console.log(true)
		}
	}
}
</script>
<styles scoped lang="scss">

</styles>
