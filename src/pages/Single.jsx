import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Single = () => {

	const { store } = useGlobalReducer();
	const { type, id } = useParams();

	let item = null;

	if (type === "people") {
		item = store.people.find(person => person.uid === id);
	}

	if (type === "planets") {
		item = store.planets.find(planet => planet.uid === id);
	}

	if (type === "vehicles") {
		item = store.vehicles.find(vehicle => vehicle.uid === id);
	}

	if (!item) {
		return (
			<div className="container mt-5 text-center">
				<h2>Loading...</h2>
			</div>
		);
	}

	return (
		<div className="container mt-5">

			<div className="row align-items-center mb-5">

				<div className="col-md-6">

					<img
						src={`https://placehold.co/800x600?text=${item.name}`}
						className="img-fluid rounded shadow"
						alt={item.name}
					/>

				</div>

				<div className="col-md-6 text-center">

					<h1>{item.name}</h1>

					<p className="lead">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore assumenda porro unde laboriosam, veritatis commodi, accusantium quasi ducimus eos aperiam quibusdam ratione repellendus officia sequi facere, eius suscipit ipsam velit?
					</p>

				</div>

			</div>

			<hr className="border border-danger border-2" />

			{/* PEOPLE */}

			{type === "people" && (
				<div className="row text-danger text-center mt-4">

					<div className="col">
						<h5>Name</h5>
						<p>{item.name}</p>
					</div>

					<div className="col">
						<h5>Birth Year</h5>
						<p>{item.birth_year}</p>
					</div>

					<div className="col">
						<h5>Gender</h5>
						<p>{item.gender}</p>
					</div>

					<div className="col">
						<h5>Height</h5>
						<p>{item.height}</p>
					</div>

					<div className="col">
						<h5>Hair Color</h5>
						<p>{item.hair_color}</p>
					</div>

					<div className="col">
						<h5>Eye Color</h5>
						<p>{item.eye_color}</p>
					</div>

				</div>
			)}

			{/* PLANETS */}

			{type === "planets" && (
				<div className="row text-danger text-center mt-4">

					<div className="col">
						<h5>Name</h5>
						<p>{item.name}</p>
					</div>

					<div className="col">
						<h5>Climate</h5>
						<p>{item.climate}</p>
					</div>

					<div className="col">
						<h5>Terrain</h5>
						<p>{item.terrain}</p>
					</div>

					<div className="col">
						<h5>Population</h5>
						<p>{item.population}</p>
					</div>

					<div className="col">
						<h5>Gravity</h5>
						<p>{item.gravity}</p>
					</div>

					<div className="col">
						<h5>Diameter</h5>
						<p>{item.diameter}</p>
					</div>

				</div>
			)}

			{/* VEHICLES */}

			{type === "vehicles" && (
				<div className="row text-danger text-center mt-4">

					<div className="col">
						<h5>Name</h5>
						<p>{item.name}</p>
					</div>

					<div className="col">
						<h5>Model</h5>
						<p>{item.model}</p>
					</div>

					<div className="col">
						<h5>Manufacturer</h5>
						<p>{item.manufacturer}</p>
					</div>

					<div className="col">
						<h5>Crew</h5>
						<p>{item.crew}</p>
					</div>

					<div className="col">
						<h5>Passengers</h5>
						<p>{item.passengers}</p>
					</div>

					<div className="col">
						<h5>Max Speed</h5>
						<p>{item.max_atmosphering_speed}</p>
					</div>

				</div>
			)}

			<div className="text-center mt-5">

				<Link
					to="/"
					className="btn btn-primary"
				>
					Back Home
				</Link>

			</div>

		</div>
	);
};