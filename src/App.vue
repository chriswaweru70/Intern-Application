<template>
	<div id="app">
		<!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
		</div>-->
		<router-view />
	</div>
</template>
<style lang=scss>
/* background image for register page to be corrected later */

.register {
	background-image: linear-gradient(
			96deg,
			rgba(#fff, 0.9) 50%,
			rgba(#fff, 0.9) 50%,
			transparent 50%
		),
		url('../public/img/tim-van-der-kuip-CPs2X8JYmS8-unsplash.jpg');
	background-size: cover;
	background-position: center;
	height: 50rem;
	border-radius: 7px;
	width: 70rem;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.login {
	background-image: linear-gradient(
			96deg,
			rgba(#fff, 0.9) 50%,
			rgba(#fff, 0.9) 50%,
			transparent 50%
		),
		url('../public/img/brooke-cagle-NoRsyXmHGpI-unsplash.jpg');
	background-size: cover;
	background-position: left;
	height: 50rem;
	border-radius: 7px;
	width: 70rem;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
