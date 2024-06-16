let todos = []; // ข้อมูล Todo จะถูกเก็บในหน่วยความจำ

exports.getTodos = (req, res) => {
    res.json(todos);
};

exports.createTodo = (req, res) => {
    const { title } = req.body;
    const newTodo = { id: todos.length + 1, title, completed: false };
    todos.push(newTodo);
    res.status(201).json(newTodo);
};

exports.updateTodo = (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;

    const todo = todos.find(todo => todo.id === parseInt(id));
    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }

    if (title !== undefined) todo.title = title;
    if (completed !== undefined) todo.completed = completed;

    res.json(todo);
};

exports.deleteTodo = (req, res) => {
    const { id } = req.params;
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
    if (todoIndex === -1) {
        return res.status(404).json({ message: 'Todo not found' });
    }

    todos.splice(todoIndex, 1);
    res.send('delete item success');
};
