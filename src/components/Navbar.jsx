import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer();

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">

				<Link className="text-decoration-none " to="/">
					<span className="text-decoration-none navbar-brand mb-0 h1 ">
						Star Wars Blog
					</span>
				</Link>

				<div className="dropdown">

					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						data-bs-toggle="dropdown"
					>
						Favorites ({store.favorites.length})
					</button>

					<ul className="dropdown-menu dropdown-menu-end">

						{store.favorites.length === 0 ? (
							<li>
								<span className="dropdown-item">
									No favorites yet
								</span>
							</li>
						) : (
							store.favorites.map((favorite, index) => (
								<li
									key={index}
									className="dropdown-item d-flex justify-content-between"
								>
									{favorite}

									<button
										className="btn btn-sm btn-danger"
										onClick={() =>
											dispatch({
												type: "remove_favorite",
												payload: favorite
											})
										}
									>
										X
									</button>
								</li>
							))
						)}

					</ul>

				</div>

			</div>
		</nav>
	);
};