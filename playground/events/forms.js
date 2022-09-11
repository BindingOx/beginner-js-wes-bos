const wes = document.querySelector('.wes');

wes.addEventListener('click', (event) => {
  event.preventDefault(); // clicking on the link does nothing
  // console.log(
  //   '🪓 => wes.addEventListener => event.currentTarget:',
  //   event.currentTarget
  // );
  console.dir(event.currentTarget);
  // console.log('🪓 => wes.addEventListener => (event', event); // click cogwheel, preserve log to stop browser from clearing it

  // example of when you might want to use preventDefault. PS don't use confirm outside of testing
  const shouldChangePage = confirm(
    'This website might be malicious!, do you wish to proceed?'
  );

  // console.log(
  //   '🪓 => wes.addEventListener => shouldChangePage',
  //   shouldChangePage
  // ); // true if click ok

  // if (shouldChangePage) {
  //   window.location = event.currentTarget.href; // will give us the url and proceeds to change the page
  // }

  // OR
  if (!shouldChangePage) {
    event.preventDefault(); // now you don't have to mess with window.location or anything like that
  }
});

const signupForm = document.querySelector('[name="signup"]'); // prob best to select forms by name rather than class

// listen for the submit event
signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.dir(
    '🪓 => wes.addEventListener => event.currentTarget:',
    event.currentTarget
  );
  console.log('🪓 => signupForm.addEventListener => event:', event);
  const name = event.currentTarget.name.value;
  const email = event.currentTarget.email.value;
  const isChecked = event.currentTarget.agree.checked;
  // console.log("🪓 => signupForm.addEventListener => isChecked", isChecked);

  if (name.includes('chad')) {
    // not case sensitive
    alert('Sorry bro');
    event.preventDefault();
  }
});

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}

// these are the ones he finds himself using most often
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
