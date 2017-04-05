This is a super-simple DOM API for learning purposes.

There is just one function: `getDOMTreeFromHTML()`.

Pass in your HTML to parse, and a callback to handle the results, as so:

```javascript
const html = '<p><a class="the-link" href="https://google.com">goog</a></p>';
domthingy.getDOMTreeFromHTML(html, (err, root) => {
    // "root" will now be an HTMLHTMLElement, 
    // which you can use to traverse the rest of the tree.
});
```
