// const Todo = require('../models/todo.model');

//Simple version, without validation or sanitation
export function test (req, res) {
	res.send('Greetings from the URL controller!');
}

export function create (req, res) {
	// let todo = new Todo(
	// 	{
	// 		description: req.body.description,
	// 		done: false
	// 	}
	// );

	// todo.save(function (err, todo) {
	// 	if (err) {
	// 		return next(err);
	// 	}
	// 	res.status(200).send(todo);
	// });
}

export function reroute (req, res) {
	// Todo.findById(req.params.id, function (err, todo) {
	// 	if (err) return next(err);
	// 	res.status(200).send(todo);
    // })
    
    
}
