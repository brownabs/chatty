const largeText = () => {
  $('#large-text').change(() => {
    $('h5').toggleClass('large--text');
    document.body.classList.toggle('large--text');
  });
};

export default { largeText };
