/* eslint-env mocha */

let chai = require('chai')
let dirtyChai = require('dirty-chai')
let expect = chai.expect

chai.use(dirtyChai)

describe('It', function () {
  it('should work', function () {
    expect(true).to.be.true()
  })
})
