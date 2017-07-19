var searchInput = document.getElementById('searchInput');
var nameInput = document.getElementById('nameInput');
var emailInput = document.getElementById('emailInput');
var phoneInput = document.getElementById('phoneInput');

searchInput.onfocus = function () {
  if(searchInput.value == "search"){
    searchInput.value = "";
  }
};
searchInput.onblur = function () {
  if(searchInput.value == ""){
    searchInput.value = "search";
  }
};

nameInput.onfocus = function () {
  if(nameInput.value == "name"){
    nameInput.value = "";
  }
};
nameInput.onblur = function () {
  if(nameInput.value == ""){
    nameInput.value = "name";
  }
};

phoneInput.onfocus = function () {
  if(phoneInput.value == "phone number"){
    phoneInput.value = "";
  }
};
phoneInput.onblur = function () {
  if(phoneInput.value == ""){
    phoneInput.value = "phone number";
  }
};

emailInput.onfocus = function () {
  if(emailInput.value == "email"){
    emailInput.value = "";
  }
};
emailInput.onblur = function () {
  if(emailInput.value == ""){
    emailInput.value = "email";
  }
};


















// hdfhhdfldhf
