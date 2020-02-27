const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const userRouter = require('../users/users-router');
const authRouter = require('../auth/auth-router');

const server = express();

server.use(express.json());
server.use(cors());
server.use(morgan('dev'));
server.use(helmet());

server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);

server.get('/', (req, res) => {
	res.send('<h1>Test</h1>');
});

server.use((err, req, res, next) => {
	console.log(err.message);
	res.status(500).json({
		message: 'Something went wrong!',
		error: err.message
	});
});

module.exports = server;
