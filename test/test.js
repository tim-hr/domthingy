'use strict';

var assert = require('chai').assert;
var domthingy = require('../index');

describe('#getDOMTreeFromHTML', function() {
    it('should get the HTMLElement at the root of the DOM tree', function(done) {
        const html = '<p><a class="the-link" href="https://google.com">goog</a></p>';
        domthingy.getDOMTreeFromHTML(html, (err, root) => {
            assert.equal(root.tagName, 'HTML');
            done();
        });
    });
});
