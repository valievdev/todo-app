const makeTodo = (todoText) => {
	const newTodoElement = document.createElement('li');
	newTodoElement.textContent = todoText;
	newTodoElement.classList.add("todo");

	newTodoElement.addEventListener('click', event => event.target.remove())

	document.querySelector("#todolist").appendChild(newTodoElement);
}

const handleFormSubmit = (event) => {
	event.preventDefault();
	if (event.target.elements[0].value.length > 4) {
		makeTodo(event.target.elements[0].value);
		event.target.reset();
	}

}

document.querySelector("#todoform").addEventListener("submit", (event) => {
	handleFormSubmit(event)
})

makeTodo("Download ColorSlurp");