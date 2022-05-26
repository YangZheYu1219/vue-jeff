    <template>
		<div class="navbar dropdowns">
			<div class="navbar-top">
				<div class="left-nav1">
					<a href=""><i class="fa-solid fa-paw"></i></a><a href="">PETS</a>
				</div>
				<div class="right-nav1">
					<input type="text" placeholder="Search" class="search">
					<div class="call">
						<strong>Call Us</strong>
						<br>
						123-456-7890
					</div>
					<div class="hamburger">
						<ul class="fa-solid fa-burger">
							<div class="hamburgerContainer">
								<a href=""><li>Dogs</li></a>
								<a href=""><li>Cats</li></a>
								<a href=""><li>Birds</li></a>
								<a href=""><li>Smalls</li></a>
							</div>
						</ul>
					</div>
				</div>
			</div>
			<hr>
			<div class="navbar-bottom">
				<div class="left-nav2">
					<a href="">Dogs</a>
					<a href="">Cats</a>
					<a href="">Birds</a>
					<a href="">Small animals</a>
				</div>
				<div class="right-nav2">
					<router-link to="/accountView">
						<i class="fa-solid fa-circle-user"></i><span class="log"> Log in</span>
					</router-link>
					<span class="showCartContainer">
						
						<div class="cartValueContainer">
							<router-link to="/cartView">
							<i class="fa-solid fa-cart-shopping"></i>
							</router-link>
							<div class="showCartValue"></div>							
						</div>
						
						<div class="cart-style">
							<div class="cart-head">
								Cart
							</div>
							
							<ul class="showCartList ">
								
								
							</ul>
							
						</div>
					</span>	
				</div>
			</div>
		</div>
	</template>