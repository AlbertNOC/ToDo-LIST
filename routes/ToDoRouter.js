const { getToDos, addnewToDo, deleteToDo } = require('../controllers/ToDoController');

const express = require('express');
const router = express.Router();



/* GET todeos. */
router.get('/',getToDos);

/* Add todeo. */

router.post('/',addnewToDo);


/* Add todeo. */

router.delete('/:id',deleteToDo);

module.exports = router;
