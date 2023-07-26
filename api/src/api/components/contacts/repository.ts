import { PrismaClient } from '@prisma/client'
import prismaClient from '../../../infra/client'
import { ContactSearchInput } from './types'

export class ContactRepository {
  private readonly prisma = prismaClient

  find(params?: ContactSearchInput) {
    const where: any = {}

    if (params) {
      Object.keys(params).forEach((key) => {
        where[key] = {
          contains: params[key as keyof ContactSearchInput],
        }
      })
    }

    return this.prisma.contact.findMany({
      where,
    })
  }

  add(data: { firstname: string; lastname: string; phonenumber: string }) {
    return this.prisma.contact.create({
      data,
    })
  }

  update(
    id: number,
    data: { firstname: string; lastname: string; phonenumber: string }
  ) {
    return this.prisma.contact.update({
      data,
      where: { id },
    })
  }

  delete(id: number) {
    return this.prisma.contact.delete({
      where: { id },
    })
  }
}
