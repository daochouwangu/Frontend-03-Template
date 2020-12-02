import assert from 'assert';
import { parseHTML } from '../src/parser.js'
describe("add function testing", function() {
  it('empty a', function () {
    let tree = parseHTML('<a></a>');
    assert.equal(tree.children[0].tagName, "a");
    assert.equal(tree.children[0].children.length, 0)
  })
  it("empty a with href", function () {
    let tree = parseHTML('<a href="//time.geekbang.org"></a>');
    assert.equal(tree.children[0].tagName, "a");
    assert.equal(tree.children[0].children.length, 0)
    assert.equal(tree.children[0].attributes, "a");
  })
})

