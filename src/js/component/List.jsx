import React from "react";
import PropTypes from "prop-types";

const List = (props) => {
	return (
		<div className="container-fluid">
			<div className="row justify-content-center">
				<div className="col-md-4">
					<div>{props.todo}</div>
				</div>
			</div>
		</div>
	);
};

List.propTypes = {
	todo: PropTypes.string,
};

export default List;
