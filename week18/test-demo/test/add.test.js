import assert from 'assert';
import { add, mul } from '../add.js';
describe("add function testing", function() {
  it('1 + 2 should return 3', function () {
    assert.equal(add(1,2),3)
  })
  
  it('-5 + 2 should return -3', function () {
    assert.equal(add(-5,2),-3)
  })

  it('3 * 4 should return 12', function () {
    assert.equal(mul(3,4),12)
  })
})

