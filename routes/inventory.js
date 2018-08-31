const express = require('express');
const knex = require('../database-connection');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const router = module.exports = require('express').Router();

app.use(bodyParser.json());
app.use(cors());

router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

// TODO: Don't forget data validation/restrictions:
// - use regex, mongoose, Joi, bookshelf, *schema lib, etc. many options: choose one

function getAll(req, res, next) {
  knex('items')
    .select('*')
    .then(items => res.status(200).send({
      items: items
    }))
    .catch(next)
}

function getOne(req, res, next) {
  knex('items')
    .select('*')
    .limit(1)
    .where({
      id: req.params.id
    })
    .then(([item]) => {
      if (!item) return res.status(404).send({
        message: 'Item not found.'
      })
      res.status(200).send({
        item: item
      })
    })
    .catch(next)
}

function create(req, res, next) {
  knex('items')
    .insert(req.body)
    .then(() => res.status(201).json({
      item: req.body
    }))
    .catch(next)
}

function update(req, res, next) {
  knex('items')
    .where({
      id: req.params.id
    })
    .update(req.body)
    .then(count => count >= 1 ?
      res.status(200).json({
        item: req.body
      }) :
      res.status(410).json())
    .catch(next)
}

function remove(req, res, next) {
  knex('items').where({
      id: req.params.id
    })
    .delete()
    .then(count => count >= 1 ?
      res.status(204).json() :
      res.status(404).json({
        message: 'Nothing deleted!'
      }))
    .catch(next)
}