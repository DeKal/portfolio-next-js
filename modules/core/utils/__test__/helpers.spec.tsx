import {
  isSafari,
  isChristmasDay,
  isNewYearComing,
  isTet,
  getWindowDimensions
} from '~/modules/core/utils/helpers'

describe('helpers test', () => {
  describe('isSafari', () => {
    let userAgentGetter
    beforeEach(() => {
      userAgentGetter = jest.spyOn(window.navigator, 'userAgent', 'get')
    })

    it('should return true with chrome', function() {
      userAgentGetter.mockReturnValue(
        'mozilla/5.0 (linux; android 6.0.1; moto g (4)) applewebkit/537.36 (khtml, like gecko) chrome/87.0.4280.88 mobile safari/537.36'
      )
      expect(isSafari()).toBe(false)
    })

    it('should return false with safari', function() {
      userAgentGetter.mockReturnValue(
        'mozilla/5.0 (iphone; cpu iphone os 13_2_3 like mac os x) applewebkit/605.1.15 (khtml, like gecko) version/13.0.3 mobile/15e148 safari/604.1'
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
    it('should return true when date is pre new year', function() {
      const dec = 12 - 1
      const mockDate = new Date(2019, dec, 31)

      const spy = jest
        .spyOn(global, 'Date')
        //@ts-ignore
        .mockImplementation(() => mockDate)

      expect(isNewYearComing()).toBe(true)
      spy.mockRestore()
    })
    it('should return true when date is new year', function() {
      const jan = 1 - 1
      const mockDate = new Date(2019, jan, 1)

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
