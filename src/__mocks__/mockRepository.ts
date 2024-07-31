export const createMockRepository = () => {
    return {
        find: jest.fn().mockResolvedValue([]),
        findOneBy: jest.fn().mockResolvedValue({}),
        create: jest.fn().mockResolvedValue({}),
        save: jest.fn().mockResolvedValue({}),
        delete: jest.fn().mockResolvedValue({})
    }
}