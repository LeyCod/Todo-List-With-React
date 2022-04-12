import React, { useState } from "react";

//components
import List from "./List.jsx";
//Styles

const TodoList = () => {
	const [listTodo, setListTodo] = useState([]);
	const [newTodo, setNewTodo] = useState("");
	const [urgentTask, setUrgentTask] = useState([]);
	const [importantTask, setImportantTask] = useState([]);
	const [normalTask, setnormalTask] = useState([]);

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

	const deleteTask = (IndexToDelete) => {
		const newListTodo = [...listTodo, newTodo];
		setListTodo(
			newListTodo.filter((todo, index) => index !== IndexToDelete)
		);
	};

	return (
		<div className="container-fluid">
			<div className="row justify-content-center">
				<div className="col-md-8 col-lg-5">
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
						<select
							className={
								props.todo.priority == "normal"
									? "form-select w-25 m-2 bg-success"
									: props.todo.priority == "importante"
									? "form-select w-25 m-2 bg-warning"
									: "form-select w-25 m-2 bg-danger"
							}
							aria-label="Priority"
							value={props.todo.priority}
							onChange={(e) => {
								let oldPriority = props.todo.priority;
								props.todo.priority = e.target.value;

								props.modifyPriority(
									props.todo.todo,
									oldPriority,
									props.todo.priority,
									props.id
								);
							}}>
							<option>Select priority</option>
							<option value="normal" className="bg-success">
								Normal
							</option>
							<option value="urgente" className="bg-danger">
								Urgente
							</option>
							<option value="importante" className="bg-warning">
								Importante
							</option>
						</select>
						<button
							className="d-none d-md-block input-group-text btn btn-primary text-wrap"
							id="basic-addon2"
							onClick={handelClick}>
							Add New Task
						</button>
					</div>
				</div>
				{listTodo.map((todo, index) => (
					<List key={index} todo={todo} deleteTask={deleteTask} />
				))}
			</div>
		</div>
	);
};

export default TodoList;

/**
 * @todo
 * delete todo
 */
