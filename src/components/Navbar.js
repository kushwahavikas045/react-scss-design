import React from 'react'
import '../styles/Navbar.css';
const Navbar = () => {
    return (
        <header class="showcase">
			<div class="container">
				<nav>
					<h1 class="logo">My Website</h1>
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">About</a></li>
						<li><a href="#">Services</a></li>
					</ul>
				</nav>

				<div class="showcase-content">
					<div>
						<h1>Make Your Website Faster</h1>
						<p class="my-1">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
							eligendi tempore atque laborum. Quisquam nemo at non. Corrupti,
							vitae dolore.
						</p>
						<a href="#" class="btn-primary">Learn More</a>
						<a href="#" class="btn-secondary">Sign Up</a>
					</div>
					<img
						src="https://www.htmlden.com/wp-content/themes/ks/img/web-developer-master-tn.svg"
					/>
				</div>
			</div>
		</header>
         )
}

export default Navbar
