import React from 'react'
import { Link } from 'react-router-dom'

import imgCardWomen from '../assets/images/imgCardWomen.jpg';
import imgCardMen from '../assets/images/imgCardMen.jpg';
import imgCardKids from '../assets/images/imgCardKids.jpg';
import imgCardBike from '../assets/images/imgCardBike.jpg';
import imgCardSwim from '../assets/images/imgCardSwim.jpg';
import imgCardTennis from '../assets/images/imgCardTennis.jpg';

export default function Landing() {
	return (

		
		<div className="">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
				<div className="container-fluid">
					<a className="navbar-brand" href="/login">SPORT COLLECTION</a>
					
					<div id="navbarText">
						<span className="navbar-text">
							<Link to="/login" type="button" className="btn btn-sm btn-outline-light d-flex">Ingresar</Link>
						</span>
					</div>
				</div>
			</nav>
			<div className="container mt-5">
				<div className="card bg-dark my-3 cardWelcomeLanding shadow">
					<div className="card-body py-5 m-3">
						<h3 className="card-title text-white text-shadow">Bienvenid@!</h3>
						<p className="card-text text-white text-shadow">Conozca nuestro catálogo de productos</p>
					</div>
				</div>

				<h2 className="text-start mx-4 mt-5">Categoría</h2>

				<div className="d-flex justify-content-evenly row">
					<div className="card shadow col-12 col-md-6 col-lg-4 m-3 px-0">
						<img src={ imgCardWomen } className="card-img-top" alt="..." />
						<div className="card-body bg-light">
							<h5 className="card-title text-dark">Mujer</h5>
						</div>
					</div>
					<div className="card shadow col-12 col-md-6 col-lg-4 m-3 px-0">
						<img src={ imgCardMen } className="card-img-top" alt="..." />
						<div className="card-body bg-light">
							<h5 className="card-title text-dark">Hombre</h5>
						</div>
					</div>
					<div className="card shadow col-12 col-md-6 col-lg-4 m-3 px-0">
						<img src={ imgCardKids } className="card-img-top" alt="..." />
						<div className="card-body bg-light">
							<h5 className="card-title text-dark">Niños</h5>
						</div>
					</div>
				</div>
				
				<h2 className="text-start mx-4 mt-4">Tendencias</h2>

				<div className="d-flex justify-content-evenly row">
					<div className="card shadow col-12 col-md-6 col-lg-4 m-3 px-0">
						<img src={ imgCardBike } className="card-img-top" alt="..." />
					</div>
					<div className="card shadow col-12 col-md-6 col-lg-4 m-3 px-0">
						<img src={ imgCardSwim } className="card-img-top" alt="..." />
					</div>
					<div className="card shadow col-12 col-md-6 col-lg-4 m-3 px-0">
						<img src={ imgCardTennis } className="card-img-top" alt="..." />
					</div>
				</div>
			</div>
		</div>
	)
}
