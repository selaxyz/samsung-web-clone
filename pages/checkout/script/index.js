  // select the button and the div
  const button = document.getElementById('samsungButton');
  const div = document.getElementById('paymentOption');

  // define the function to change the HTML content
  function changeContent() {
    div.innerHTML = `
`;
  }

  // add event listener to the button
  button.addEventListener('click', changeContent);