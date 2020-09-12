const largeText = () => {
  $('#large-text').change(() => {
    document.body.classList.toggle('large--text');
    document.body.classList.toggle('dark--mode');
  });
};

export default { largeText };
