import { Router } from 'express'
import { IComponentRoutes } from '../helper'
import { ContactController } from './controller'

export class ContactRoutes implements IComponentRoutes<ContactController> {
  readonly name: string = 'contract'
  readonly controller: ContactController = new ContactController()
  readonly router: Router = Router()

  constructor() {
    this.initRoutes()
  }

  initRoutes(): void {
    this.router.get('/contacts', this.controller.findContacts)
    this.router.put('/contacts', this.controller.addContact)
    this.router.post('/contacts/:id', this.controller.updateContact)
    this.router.delete('/contacts/:id', this.controller.deleteContact)
  }
}
