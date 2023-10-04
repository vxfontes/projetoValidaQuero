import { UserController } from "./controller/UserController"

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:matricula",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "create"
}, {
    method: "delete",
    route: "/users/:matricula",
    controller: UserController,
    action: "remove"
}, {
    method: "post",
    route: "/login",
    controller: UserController,
    action: "auth"
}]