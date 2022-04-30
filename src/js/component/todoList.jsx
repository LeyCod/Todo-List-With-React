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

	//Delete Task

	const deleteTask = (id) => {
		console.log(listTodo);

		const removeTask = listTodo.filter((todo, index) => index != id);
		setListTodo(removeTask);
		console.info(removeTask);
	};

	return (
		<div className="container-fluid">
			<div className="row justify-content-center">
				<div className="col-md-8 col-lg-5">
					<div className="input-group mb-3 mt-3">
						<h1 className="input-group justify-content-center">
							Todo List
						</h1>
						<div className="input-group mb-3">
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
							className="btn btn-primary" type="button" 
							onClick={handelClick}>
							ADD
						</button>
						</div>
						{listTodo.map((todo, index) => (
							<List
								key={index}
								id={index}
								todo={todo}
								deleteTask={deleteTask}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TodoList;
