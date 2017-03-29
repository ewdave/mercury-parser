# Mercury Parser

## A Simple NodeJS Wrapper for the [Mercury Web Parser API](https://mercury.postlight.com/web-parser/)

## Installation

```bash
npm install mercury-parser
```

If using `yarn`

```bash
yarn add mercury-parser
```

## Usage

```js
// Require the library, passing your API key generated on [Mercury Web Parser API](https://mercury.postlight.com/web-parser/)  dashboard
const mercury = require('mercury-parser')(API_KEY);
```
## Examples

```javascript
mercury.parse('https://some-url').then(response =>
  console.log(response)
  }).catch(err => {
    console.log('Error: ', err);
})
```

```json
// Available attributes 

response.title
response.author
response.date_published
response.dek
response.lead_image_url
response.content
response.next_page_url
response.url
response.domain
response.excerpt
response.word_count
response.direction
response.total_pages
response.rendered_pages
```
