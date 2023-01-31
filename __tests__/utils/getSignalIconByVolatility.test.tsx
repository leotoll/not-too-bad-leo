import getSignalIconByVolatility from '../../utils/getSignalIconByVolatility'

describe('getSignalIconByVolatility', () => {
  it('return right icon', () => {
    expect(getSignalIconByVolatility(3.9)).toEqual('/icons/low-signal.svg')
    expect(getSignalIconByVolatility(4)).toEqual('/icons/mid-signal.svg')
    expect(getSignalIconByVolatility(4.5)).toEqual('/icons/high-signal.svg')
  })
})
