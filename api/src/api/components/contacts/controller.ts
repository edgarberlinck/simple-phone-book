import { NextFunction, Request, Response } from 'express'

import { ContactRepository } from './repository'

export class ContactController {
  /**
   * Read users
   *
   * @param req Express request
   * @param res Express response
   * @param next Express next
   * @returns HTTP response
   */

  async findContacts(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { firstname, lastname, phonenumber } = req.query
      const repo: ContactRepository = new ContactRepository()
      const contacts = await repo.find({ firstname, lastname, phonenumber })

      return res.json(contacts)
    } catch (err) {
      return next(err)
    }
  }

  async findContact(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { id } = req.params
      const repo: ContactRepository = new ContactRepository()
      const contact = await repo.getById(parseInt(id))

      return res.json(contact)
    } catch (err) {
      next(err)
    }
  }

  async addContact(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const contact = req.body

      const repo: ContactRepository = new ContactRepository()
      await repo.add(contact)

      return res.status(201).send()
    } catch (err) {
      return next(err)
    }
  }

  async updateContact(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { id } = req.params
      const contact = req.body

      const repo: ContactRepository = new ContactRepository()
      await repo.update(parseInt(id), contact)

      return res.status(200).send()
    } catch (err) {
      return next(err)
    }
  }

  async deleteContact(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { id } = req.params

      const repo: ContactRepository = new ContactRepository()
      await repo.delete(parseInt(id))

      return res.status(200).send()
    } catch (err) {
      return next(err)
    }
  }
}
