import { Router } from 'express'

import { ContactRoutes } from './contacts/router'

export function registerApiRoutes(router: Router, prefix: string = ''): void {
  router.use(`${prefix}/`, new ContactRoutes().router)
}
