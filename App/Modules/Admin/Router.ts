import { Injectable } from 'System/Injectable';
import { IRoute, IRouter } from 'System/Interface';
import { HTTP } from 'System/Enum';

import { AuthController } from './Controllers/AuthController';
import { RoleController } from './Controllers/RoleController';
import { UserController } from './Controllers/UserController';
import { FaqController } from './Controllers/FaqController';

import { AuthenticationMiddleware } from './Middleware/AuthenticationMiddleware';
import { KolAuthController } from './Controllers/KolAuthController';

@Injectable
export class Router implements IRouter {
    readonly routes: IRoute[];
    constructor(
        // Controller
        readonly roleController: RoleController,
        readonly authController: AuthController,
        readonly userController: UserController,
        readonly faqController: FaqController,
        readonly kolAuthController: KolAuthController,

        // Middleware
        readonly authenticationMiddleware: AuthenticationMiddleware
    ) {
        this.routes = [
            { path: '/auth', method: HTTP.Post, handler: this.authController.postLogin },
            { path: '/users', method: HTTP.Post, handler: this.userController.createUser },
            { path: '/users/{id}', method: HTTP.Get, handler: this.userController.getUserById },
            {
                middleware: [{ class: this.authenticationMiddleware }],
                group: [
                    { path: '/auth/check', method: HTTP.Get, handler: this.authController.getCheckToken },
                    { path: '/roles/paths', method: HTTP.Get, handler: this.roleController.getPaths },
                    { path: '/roles/{id}', method: HTTP.Get, handler: this.roleController.getRoleById },
                    { path: '/roles/{id}', method: HTTP.Put, handler: this.roleController.updateRole },
                    { path: '/roles/{id}', method: HTTP.Delete, handler: this.roleController.deleteRoleById },
                    { path: '/roles/{id}/permission', method: HTTP.Put, handler: this.roleController.setPermission },
                    { path: '/roles', method: HTTP.Post, handler: this.roleController.createRole },
                    { path: '/roles', method: HTTP.Get, handler: this.roleController.getRoles }
                ]
            },
            {
                middleware: [{ class: this.authenticationMiddleware }],
                group: [
                    { path: '/faqs', method: HTTP.Get, handler: this.faqController.getFaqs },
                    { path: '/faqs', method: HTTP.Post, handler: this.faqController.createFaq },
                    { path: '/faqs/{id}', method: HTTP.Put, handler: this.faqController.updateFaq }
                ]
            },
            {
                middleware: [{ class: this.authenticationMiddleware }],
                group: [
                    { path: '/kol-users', method: HTTP.Get, handler: this.kolAuthController.getKolUsers },
                    { path: '/kol-users', method: HTTP.Post, handler: this.kolAuthController.createKolUser },
                    { path: '/kol-users/{id}', method: HTTP.Get, handler: this.kolAuthController.getKolUser },
                    { path: '/kol-users/{id}/basic', method: HTTP.Put, handler: this.kolAuthController.updateKolInfoBase }
                ]
            }
        ];
    }
}