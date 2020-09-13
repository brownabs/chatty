const largeText = () => {
  $('#large-text').change(() => {
  //  $('h5').classList.toggle('style', 'font-size: 40px !important');
    $('h5').toggleClass('large--text');
    document.body.classList.toggle('large--text');
    document.body.classList.toggle('dark--mode');
  });
};

export default { largeText };
