function validatePhoneNumber() {
    const userInput = document.getElementById('user-input').value;
    const resultsDiv = document.getElementById('results-div');
    resultsDiv.innerHTML = '';
    if (!userInput.trim()) {
      alert('Please provide a phone number');
      return;
    }

    const isValid = validatePhoneNumberFormat(userInput);

    if (isValid) {
      resultsDiv.textContent = `Valid US number: ${userInput}`;
    } else {
      resultsDiv.textContent = `Invalid US number: ${userInput}`;
    }
  }

  function clearResults() {
    document.getElementById('results-div').innerHTML = '';
  }

  function validatePhoneNumberFormat(phoneNumber) {

    const phoneNumberRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
    return phoneNumberRegex.test(phoneNumber);
  }