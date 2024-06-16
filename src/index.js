const express = require('express');
const { errors } = require('celebrate');
const morgan = require('morgan');
const app = express();
const todoRoutes = require('./routes/todo');

// ใช้ morgan ในการ log HTTP requests
app.use(morgan('dev'));

app.use(express.json());
app.use('/api/todos', todoRoutes);

// Celebrate error handler
app.use(errors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
