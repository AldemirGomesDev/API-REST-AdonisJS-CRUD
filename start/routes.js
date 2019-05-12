'use strict'


const Route = use('Route')

Route.resource('properties', 'PropertyController')
  .apiOnly()
  .middleware('auth')

Route.post('properties/:id/images', 'ImageController.store')
  .middleware('auth')

Route.get('images/:path', 'ImageController.show')

Route.post('/users', 'UserController.create')

Route.post('/sessions', 'SessionController.create')