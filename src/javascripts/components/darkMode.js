const darkMode = () => {
  $('#dark-mode').change(() => {
    document.body.classList.toggle('dark--mode');
    $('#messages').toggleClass('dark-card-mode');
  });
};

export default { darkMode };
