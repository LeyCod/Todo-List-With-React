import React, { useState } from "react";

//components
import List from "./List.jsx";
//Styles

const TodoList = () => {
	const [listTodo, setListTodo] = useState([]);
	const [newTodo, setNewTodo] = useState("");

	//Handel events

	const handelClick = () => {
		const newListTodo = [...listTodo, newTodo];
		setListTodo(newListTodo);
		setNewTodo("");
	};

	const handelKeyEnter = (e) => {
		if (e.code === "Enter") {
			const newListTodo = [...listTodo, newTodo];
			setListTodo(newListTodo);
			setNewTodo("");
		}
	};

	//Delete

	const DeleteTask = (IndexToDelete) =>
		setTasksList(
			TasksList.filter((Task, TaskIndex) => TaskIndex !== IndexToDelete)
		);

	console.log({ listTodo });

	return (
		<div className="container-fluid">
			<div className="row justify-content-center">
				<div className="col-md-4">
					<div className="input-group mb-3 mt-3">
						<h1 className="input-group justify-content-center">
							Todo List
						</h1>
						<input
							type="text"
							className="form-control"
							id="new-task"
							placeholder="Add New Todo"
							aria-label="Add New Todo"
							aria-describedby="basic-addon2"
							value={newTodo}
							onChange={(e) => setNewTodo(e.target.value)}
							onKeyPress={handelKeyEnter}
						/>
						<button
							className="input-group-text btn btn-primary"
							id="basic-addon2"
							onClick={handelClick}>
							Add New Task
						</button>
					</div>
				</div>
				{listTodo.map((todo, index) => (
					<List key={index} todo={todo} />
				))}
			</div>
		</div>
	);
};

export default TodoList;

//PropTypes
/**
 * @todo
 * delete todo
 */
