import React from "react";
import PropTypes from "prop-types";

const List = (props) => {
	return (
		<div className="container-fluid g-0 px-3">
			<div className="row justify-content-center">
				<div className="col-md-4 border border-primary p-3 rounded shadow">
					<div className="d-flex flex-row justify-content-between align-items-center">
						{props.todo}
						<span
							className="btn btn-danger"
							onClick={() => props.deleteTask(props.id)}>
							<i className="fas fa-trash-alt"></i>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

List.propTypes = {
	todo: PropTypes.string,
	deleteTask: PropTypes.func,
};

export default List;
