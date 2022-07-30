const submitbutton = document.querySelector('.form-inputs');
const EmailInput = document.querySelector('.form-email');
const ShowMessage = document.querySelector('.email-checks');

// eslint-disable-next-line no-useless-escape
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// eslint-disable-next-line consistent-return
const emailformat = () => {
  if (!emailRegex.test(EmailInput.value)) {
    ShowMessage.style.color = 'red';
    ShowMessage.textContent = 'Email has an invalid format please check';
  } else {
    return true;
  }
};

const ChecklowerCase = () => {
  if (EmailInput.value === EmailInput.value.toLowerCase()) {
    ShowMessage.innerText = '';
    return true;
  }
  ShowMessage.style.color = 'red';
  ShowMessage.textContent = 'Email must be in lowercase';
  return false;
};

submitbutton.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailFormat = emailformat();
  const lowercase = ChecklowerCase();
  const parseAllTest = lowercase && emailFormat;

  if (parseAllTest) {
    return submitbutton.submit();
  }
  return false;
});
