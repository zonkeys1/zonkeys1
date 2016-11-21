console.log('linked!');

// selecting the only button on the page
const nodeButton = document.querySelector('button');

// FUNCTION: creates an alert on when clicked
// ARGS: the event that triggers the function
function buttonListener(e) {
  alert('another random console log');
  // why not console log this event too
  console.log('some random shit', event);

}

// adding the event listener to the button
nodeButton.addEventListener('click', buttonListener);
