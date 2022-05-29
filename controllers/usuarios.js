const { response } = require('express');

const usuariosGet =  (req, res = response) => {
	
	const { q, nombre = "No name", apikey, page = 1, limit } = req.query;

	const id = req.params.id;

	    res.status(200).json({
		msg : 'GET Api',
		q,
		nombre,
		apikey,
		page,
		limit
	    });
	};

const usuariosPost = (req, res = response) => {

	const { nombre, apellido } = req.body;

	    res.status(201).json({
		msg : 'POST Api',
		nombre,
		apellido
	    });
	};

const usuariosPut = (req, res = response) => {

	const id = req.params.id;

	    res.status(201).json({
		msg : 'PUT Api',
		id
	    });
	};

const usuariosDelete = (req, res = response) => {
	    res.status(201).json({
		msg : 'DELETE Api'
	    });
	};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}
