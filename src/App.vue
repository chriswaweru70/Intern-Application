<template>
	<div id="app">
		<!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
		</div>-->
		<router-view />
	</div>
</template>
<style>
/* background image for register page to be corrected later */
.register-container {
	background-image: linear-gradient(
		to right bottom,
		rgba(248, 84, 87, 0.8),
		rgba(114, 62, 151, 0.8)
	);
}

.register {
	background-image: url('../public/img/bg.jpg');
	background-size: cover;
	background-position: center;
	border-radius: 3px;
	box-shadow: 0 4.5rem 1rem rgba(#000, 0.6);
}
</style>
