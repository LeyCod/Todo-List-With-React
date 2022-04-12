import React from "react";
import PropTypes from "prop-types";

const List = (props) => {
	return (
		<div className="container-fluid">
			<div className="row justify-content-center">
				<div className="col-md-4">
					<div className="row justify-content-between">
						{props.todo}
						<span
							className="btn btn-danger"
							onClick={props.deleteTask}>
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
