/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => { Route.resource('/users', 'UsersController') }).middleware('auth')
Route.post('/login', 'UsersController.login')

Route.group(() => {
Route.resource('/academia', 'AcademiasController').apiOnly()
Route.resource('/suplementos', 'SuplementosController').apiOnly()
Route.resource('/funcionarios', 'FuncionariosController').apiOnly()
Route.resource('/clientes', 'ClientesController').apiOnly()
Route.resource('/pesos', 'PesosController').apiOnly()
Route.resource('/equipamentos', 'EquipamentosController').apiOnly()
Route.resource('/avaliacao', 'AvaliacaosController').apiOnly()
Route.resource('/treinamentos', 'TreinamentosController').apiOnly()
Route.resource('/dietas', 'DietasController').apiOnly()
Route.resource('/pesoequipamento', 'PesoequipamentosController').apiOnly()
Route.resource('/vicios', 'ViciosController').apiOnly()
Route.resource('/problemas', 'ProblemasController').apiOnly()
Route.resource('/vicioavaliacao', 'ViciosAvaliacaosController').apiOnly()
Route.resource('/problemaavaliacao', 'ProblemasAvaliacaosController').apiOnly()
}).middleware('auth')