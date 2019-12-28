import {
  isSafari,
  isChristmasDay,
  isNewYearComing,
  isTet,
  getWindowDimensions
} from '~/utils/helpers'

describe('helpers test', () => {
  describe('isSafari', () => {
    let userAgentGetter
    beforeEach(() => {
      userAgentGetter = jest.spyOn(window.navigator, 'userAgent', 'get')
    })

    it('should return true with chrome', function() {
      userAgentGetter.mockReturnValue(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36'
      )
      expect(isSafari()).toBe(false)
    })

    it('should return false with safari', function() {
      userAgentGetter.mockReturnValue(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Safari/605.1.15'
      )
      expect(isSafari()).toBe(true)
    })
  })

  describe('isChristmasDay', () => {
    it('should return true when date is Christmas', function() {
      const dec = 12 - 1
      const mockDate = new Date(2019, dec, 24)

      const spy = jest
        .spyOn(global, 'Date')
        //@ts-ignore
        .mockImplementation(() => mockDate)

      expect(isChristmasDay()).toBe(true)
      spy.mockRestore()
    })

    it('should return true when date is normal', function() {
      const august = 8 - 1
      const mockDate = new Date(2019, august, 24)

      const spy = jest
        .spyOn(global, 'Date')
        //@ts-ignore
        .mockImplementation(() => mockDate)

      expect(isChristmasDay()).toBe(false)
      spy.mockRestore()
    })
  })

  describe('isNewYearComing', () => {
    it('should return true when date is new year', function() {
      const jan = 1 - 1
      const mockDate = new Date(2019, jan, 6)

      const spy = jest
        .spyOn(global, 'Date')
        //@ts-ignore
        .mockImplementation(() => mockDate)

      expect(isNewYearComing()).toBe(true)
      spy.mockRestore()
    })

    it('should return true when date is normal', function() {
      const oct = 10 - 1
      const mockDate = new Date(2020, oct, 6)

      const spy = jest
        .spyOn(global, 'Date')
        //@ts-ignore
        .mockImplementation(() => mockDate)

      expect(isNewYearComing()).toBe(false)
      spy.mockRestore()
    })
  })

  describe('isTet', () => {
    it('should return true when date is first day of tet', function() {
      const jan = 1 - 1
      const mockDate = new Date(2019, jan, 24)

      const spy = jest
        .spyOn(global, 'Date')
        //@ts-ignore
        .mockImplementation(() => mockDate)

      expect(isTet()).toBe(true)
      spy.mockRestore()
    })

    it('should return true when date is last day of tet', function() {
      const jan = 1 - 1
      const mockDate = new Date(2019, jan, 31)

      const spy = jest
        .spyOn(global, 'Date')
        //@ts-ignore
        .mockImplementation(() => mockDate)

      expect(isTet()).toBe(true)
      spy.mockRestore()
    })

    it('should return true when date is normal', function() {
      const oct = 10 - 1
      const mockDate = new Date(2020, oct, 6)

      const spy = jest
        .spyOn(global, 'Date')
        //@ts-ignore
        .mockImplementation(() => mockDate)

      expect(isTet()).toBe(false)
      spy.mockRestore()
    })
  })

  describe('getWindowDimensions', () => {
    it('should return true when date is new year', function() {
      window = Object.assign(window, { innerWidth: 800, innerHeight: 800 })
      window.dispatchEvent(new Event('resize'))
      expect(getWindowDimensions()).toMatchSnapshot()
    })
  })
})
