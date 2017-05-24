module.exports = {
  filterHeadline(headline) {
    if (!Array.isArray(headline)) {
      return replaceQuote(headline);
    }
    return headline.map(line => {
      console.log(`Line ${line}`);
      console.log(`Replace ${replaceQuote(line)}`);
      return replaceQuote(line);
    });
  }
}

function replaceQuote(quote) {
  return quote.replace(/&quot;/g, '');
}
