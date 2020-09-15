const darkMode = () => {
  $('#dark-mode').change(() => {
    document.body.classList.toggle('dark--mode');
    $('#messages').toggleClass('dark-card-mode');
    $('.card').toggleClass('dark-card-mode');
    $('.card-body').toggleClass('dark--mode');
  });
};

export default { darkMode };
