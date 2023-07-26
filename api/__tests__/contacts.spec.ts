import { prismaMock } from '../src/test/singleton'
import { ContactRepository } from '../src/api/components/contacts/repository'

describe('Contacts API', () => {
  describe('Listing', () => {
    const CONTACT_LIST = [
      {
        id: 1,
        firstname: 'Gandalf',
        lastname: 'the Gray',
        phonenumber: '0000000',
      },
    ]

    beforeEach(() => {
      prismaMock.contact.findMany.mockResolvedValue(CONTACT_LIST)
    })

    test('given no parameters, the elements should be returned', async () => {
      const repo = new ContactRepository()
      expect(repo.find()).resolves.toEqual(CONTACT_LIST)
    })

    test('given an empty object, the elements should be returned', async () => {
      const prismaSpy: jest.SpyInstance = jest.spyOn(
        prismaMock.contact,
        'findMany'
      )

      const expectedQuery = {
        where: {},
      }

      const repo = new ContactRepository()
      expect(repo.find()).resolves.toEqual(CONTACT_LIST)
      expect(prismaSpy.mock.calls[0].toString()).toBe(expectedQuery.toString())
    })

    test('given a object with just the firstname, the elements should be returned', async () => {
      const prismaSpy: jest.SpyInstance = jest.spyOn(
        prismaMock.contact,
        'findMany'
      )

      const expectedQuery = {
        where: {
          firstname: {
            contains: 'Edgar',
          },
        },
      }

      const repo = new ContactRepository()
      expect(repo.find({ firstname: 'Edgar' })).resolves.toEqual(CONTACT_LIST)
      expect(prismaSpy.mock.calls[0].toString()).toBe(expectedQuery.toString())
    })

    test('given a object with just the lastname, the elements should be returned', async () => {
      const prismaSpy: jest.SpyInstance = jest.spyOn(
        prismaMock.contact,
        'findMany'
      )

      const expectedQuery = {
        where: {
          lastname: {
            contains: 'Edgar',
          },
        },
      }

      const repo = new ContactRepository()
      expect(repo.find({ lastname: 'Edgar' })).resolves.toEqual(CONTACT_LIST)
      expect(prismaSpy.mock.calls[0].toString()).toBe(expectedQuery.toString())
    })

    test('given a object with just the phonenumber, the elements should be returned', async () => {
      const prismaSpy: jest.SpyInstance = jest.spyOn(
        prismaMock.contact,
        'findMany'
      )

      const expectedQuery = {
        where: {
          phonenumber: {
            contains: 'Edgar',
          },
        },
      }

      const repo = new ContactRepository()
      expect(repo.find({ phonenumber: 'Edgar' })).resolves.toEqual(CONTACT_LIST)
      expect(prismaSpy.mock.calls[0].toString()).toBe(expectedQuery.toString())
    })

    test('given a object with all properties, the elements should be returned', async () => {
      const prismaSpy: jest.SpyInstance = jest.spyOn(
        prismaMock.contact,
        'findMany'
      )

      const expectedQuery = {
        where: {
          fistname: {
            contains: 'Edgar',
          },
          lastname: {
            contains: 'Berlinck',
          },
          phonenumber: {
            contains: '073',
          },
        },
      }

      const repo = new ContactRepository()
      expect(
        repo.find({
          firstname: 'Edgar',
          lastname: 'Berlinck',
          phonenumber: '073',
        })
      ).resolves.toEqual(CONTACT_LIST)
      expect(prismaSpy.mock.calls[0].toString()).toBe(expectedQuery.toString())
    })
  })
})
