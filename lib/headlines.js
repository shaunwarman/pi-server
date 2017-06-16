module.exports = {
  filterHeadline(headline) {
    if (!Array.isArray(headline)) {
      return replaceQuote(headline);
    }
    return headline.map(line => {
      return replaceQuote(line);
    });
  }
}

function replaceQuote(quote) {
  return quote.replace(/&quot;/g, '');
}
