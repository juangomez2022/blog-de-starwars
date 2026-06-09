import { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();

	useEffect(() => {

		fetch("https://www.swapi.tech/api/people")
			.then(res => res.json())
			.then(async data => {

				const detailedPeople = await Promise.all(

					data.results.map(async person => {

						const response = await fetch(person.url);
						const details = await response.json();

						return {
							...person,
							...details.result.properties
						};
					})
				);

				dispatch({
					type: "set_people",
					payload: detailedPeople
				});
			});

		fetch("https://www.swapi.tech/api/planets")
			.then((response) => response.json())
			.then(async (data) => {

				const detailedPlanets = await Promise.all(
					data.results.map(async (planet) => {
						const res = await fetch(planet.url);
						const details = await res.json();

						return {
							uid: planet.uid,
							name: planet.name,
							...details.result.properties
						};
					})
				);

				dispatch({
					type: "set_planets",
					payload: detailedPlanets
				});
			});

		fetch("https://www.swapi.tech/api/vehicles")
			.then((response) => response.json())
			.then(async (data) => {

				const detailedVehicles = await Promise.all(
					data.results.map(async (vehicle) => {
						const res = await fetch(vehicle.url);
						const details = await res.json();

						return {
							uid: vehicle.uid,
							name: vehicle.name,
							...details.result.properties
						};
					})
				);

				dispatch({
					type: "set_vehicles",
					payload: detailedVehicles
				});
			});



	}, []);



	return (
		<div className="container mt-4">

			{/* ================= CHARACTERS ================= */}
			<h2 className="text-warning mb-3">Characters</h2>

			<div className="d-flex overflow-auto gap-3 pb-3">

				{store.people.map((person) => (
					<div
						key={person.uid}
						className="card flex-shrink-0 shadow"
						style={{ width: "200px" }}
					>
						<img
							src={`https://placehold.co/300x400?text=${person.name}`}
							alt={person.name}
							className="card-img-top"
						/>

						<div className="card-body">

							<h5 className="card-title">
								{person.name}
							</h5>

							<p>
								Gender: {person.gender}
							</p>

							<p>
								Hair Color: {person.hair_color}
							</p>

							<p>
								Eye Color: {person.eye_color}
							</p>

							<div className="d-flex justify-content-between">

								<Link
									to={`/single/people/${person.uid}`}
									className="btn btn-outline-primary"
								>
									Learn More
								</Link>

								<button
									className="btn btn-warning"
									onClick={() =>
										dispatch({
											type: "add_favorite",
											payload: planet.name
										})
									}
								>
									❤️
								</button>

							</div>

						</div>
					</div>
				))}
			</div>

			{/* ================= PLANETS ================= */}
			<h2 className="text-warning mt-5 mb-3">Planets</h2>

			<div className="d-flex overflow-auto gap-3 pb-3">

				{store.planets.map((planet) => (
					<div
						key={planet.uid}
						className="card flex-shrink-0 shadow"
						style={{ width: "200px" }}
					>
						<img
							src={`https://placehold.co/300x400?text=${planet.name}`}
							alt={planet.name}
							className="card-img-top"
						/>

						<div className="card-body">
							<h5 className="card-title">{planet.name}</h5>

							<p>
								<strong>Climate:</strong> {planet.climate}
							</p>

							<p>
								<strong>Population:</strong> {planet.population}
							</p>

							<p>
								<strong>Terrain:</strong> {planet.terrain}
							</p>

							<div className="d-flex justify-content-between">

								<Link to={`/single/planets/${planet.uid}`}>
									<button className="btn btn-outline-primary">
										Learn More
									</button>
								</Link>

								<button
									className="btn btn-warning"
									onClick={() =>
										dispatch({
											type: "add_favorite",
											payload: planet.name
										})
									}
								>
									❤️
								</button>

							</div>
						</div>
					</div>
				))}
			</div>

			{/* ================= VEHICLES ================= */}
			<h2 className="text-warning mt-5 mb-3">Vehicles</h2>

			<div className="d-flex overflow-auto gap-3 pb-3">

				{store.vehicles.map((vehicle) => (
					<div
						key={vehicle.uid}
						className="card flex-shrink-0 shadow"
						style={{ width: "200px" }}
					>

						<img
							src={`https://placehold.co/300x400?text=${vehicle.name}`}
							alt={vehicle.name}
							className="card-img-top"
						/>
						<div className="card-body">
							<h5 className="card-title">{vehicle.name}</h5>

							<p>
								<strong>Model:</strong> {vehicle.model}
							</p>

							<p>
								<strong>Manufacturer:</strong> {vehicle.manufacturer}
							</p>

							<p>
								<strong>Crew:</strong> {vehicle.crew}
							</p>

							<div className="d-flex justify-content-between">

								<Link to={`/single/vehicles/${vehicle.uid}`}>
									<button className="btn btn-outline-primary">
										Learn More
									</button>
								</Link>

								<button
									className="btn btn-warning"
									onClick={() =>
										dispatch({
											type: "add_favorite",
											payload: vehicle.name
										})
									}
								>
									❤️
								</button>

							</div>
						</div>
					</div>
				))}
			</div>

		</div>
	);
};