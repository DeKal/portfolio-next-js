import { getData, getError, isSuccess } from '../selector'

describe('selector test', () => {
  describe('getData', () => {
    it('should return data', function() {
      const response = {
        data: 'test data'
      }
      expect(getData(response)).toBe('test data')
    })

    it('should return empty', function() {
      const response = {}
      expect(getData(response)).toEqual({})
    })
  })

  describe('getError', () => {
    it('should return data', function() {
      const response = {
        error: 'error data'
      }
      expect(getError(response)).toBe('error data')
    })

    it('should return empty', function() {
      const response = {}
      expect(getError(response)).toEqual({})
    })
  })

  describe('isSuccess', () => {
    it('should return success = true', function() {
      const response = {
        success: true
      }
      expect(isSuccess(response)).toBe(true)
    })

    it('should return empty', function() {
      const response = {}
      expect(isSuccess(response)).toBe(false)
    })
  })
})
