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


Route.resource('/academia', 'AcademiasController')
Route.resource('/suplementos', 'SuplementosController')
Route.resource('/funcionarios', 'FuncionariosController')
Route.resource('/clientes', 'ClientesController')
Route.resource('/pesos', 'PesosController')
Route.resource('/equipamentos', 'EquipamentosController')
Route.resource('/vicios', 'ViciosController')
Route.resource('/avpsicologicas', 'AvpsicologicosController')
Route.resource('/tratamentos', 'TratamentosController')
Route.resource('/avfisicas', 'AvfisicasController')
Route.resource('/avaliacao', 'AvaliacaosController')
Route.resource('/treinamentos', 'TreinamentosController')
