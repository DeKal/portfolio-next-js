export const getData = response => response.data || {}

export const getError = response => response.error || {}

export const isSuccess = response => response.success || false
