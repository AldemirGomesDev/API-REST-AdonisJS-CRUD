"use strict";

const Route = use("Route");

Route.resource("properties", "PropertyController")
  .apiOnly()
  .middleware("auth");

Route.post("properties/:id/images", "ImageController.store").middleware("auth");

Route.get("images/:path", "ImageController.show");

Route.post("/users", "UserController.create");

Route.get("users", "UserController.index");

Route.get("properties", "PropertyController.index");

Route.post("properties", "PropertyController.store");

Route.post("/sessions", "SessionController.create");
