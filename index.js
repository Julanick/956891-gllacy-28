var buttonFeedback = document.querySelector(".btn-contact");
var buttonClose = document.querySelector(".btn-feedback-close");
var formFeedbackPopup = document.querySelector(".feedback-form-wrapper");
var feedbackName = document.querySelector("#user-name");
var feedbackEmail = document.querySelector("#user-email");
var feedbackText = document.querySelector("#user-text");

formFeedbackPopup &&
  formFeedbackPopup.addEventListener("submit", function (evt) {
    if (!feedbackName.value) {
      evt.preventDefault();
      feedbackName.classList.add("modal-error");
    }
    if (!feedbackEmail.value) {
      evt.preventDefault();
      feedbackEmail.classList.add("modal-error");
    }
    if (!feedbackText.value) {
      evt.preventDefault();
      feedbackText.classList.add("modal-error");
    }
    setTimeout(() => {
      feedbackName.classList.remove("modal-error");
      feedbackEmail.classList.remove("modal-error");
      feedbackText.classList.remove("modal-error");
    }, 600);
  });

buttonFeedback &&
  buttonFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    formFeedbackPopup.classList.add("active");
    feedbackName.focus();
  });

buttonClose &&
  buttonClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    formFeedbackPopup.classList.remove("active");
  });

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (formFeedbackPopup.classList.contains("active")) {
      evt.preventDefault();
      formFeedbackPopup.classList.remove("active");
    }
  }
});

var buttonSlideFirst = document.querySelector("#main-slide-first");
var buttonSlideSecond = document.querySelector("#main-slide-second");
var buttonSlideThird = document.querySelector("#main-slide-third");
var mainBackground = document.querySelector("#slide-background");
var titleSlideFirst = document.querySelector("#title-slide-first");
var titleSlideSecond = document.querySelector("#title-slide-second");
var titleSlideThird = document.querySelector("#title-slide-third");

buttonSlideFirst &&
  buttonSlideFirst.addEventListener("click", function (evt) {
    evt.preventDefault();
    var currentButton = document.querySelector(".current");
    currentButton.classList.remove("current");

    mainBackground.classList.remove("main-slide-second");
    mainBackground.classList.remove("main-slide-third");

    titleSlideSecond.classList.remove("active");
    titleSlideThird.classList.remove("active");

    titleSlideFirst.classList.add("active");
    buttonSlideFirst.classList.add("current");
    mainBackground.classList.add("main-slide-first");
  });

buttonSlideSecond &&
  buttonSlideSecond.addEventListener("click", function (evt) {
    evt.preventDefault();
    var currentButton = document.querySelector(".current");
    currentButton.classList.remove("current");

    mainBackground.classList.remove("main-slide-first");
    mainBackground.classList.remove("main-slide-third");

    titleSlideFirst.classList.remove("active");
    titleSlideThird.classList.remove("active");

    titleSlideSecond.classList.add("active");
    buttonSlideSecond.classList.add("current");
    mainBackground.classList.add("main-slide-second");
  });

buttonSlideThird &&
  buttonSlideThird.addEventListener("click", function (evt) {
    evt.preventDefault();
    var currentButton = document.querySelector(".current");
    currentButton.classList.remove("current");

    mainBackground.classList.remove("main-slide-first");
    mainBackground.classList.remove("main-slide-second");

    titleSlideSecond.classList.remove("active");
    titleSlideFirst.classList.remove("active");

    titleSlideThird.classList.add("active");
    buttonSlideThird.classList.add("current");
    mainBackground.classList.add("main-slide-third");
  });

var loginButton = document.querySelector(".btn-login");
var loginForm = document.querySelector(".login-form");
var loginEmail = document.querySelector("#email-login");
var loginPassword = document.querySelector("#password-login");

loginForm &&
  loginForm.addEventListener("submit", function (evt) {
    if (!loginEmail.value || !loginPassword.value) {
      evt.preventDefault();
      loginForm.classList.add("modal-error");
    }
    setTimeout(() => {
      loginForm.classList.remove("modal-error");
    }, 600);
  });

var subscriptionForm = document.querySelector(".subscription-form");
var subscriptionEmail = document.querySelector("#subscription-email");

subscriptionForm &&
  subscriptionForm.addEventListener("submit", function (evt) {
    if (!subscriptionEmail.value) {
      evt.preventDefault();
      subscriptionEmail.classList.add("modal-error");
    }
    setTimeout(() => {
      subscriptionEmail.classList.remove("modal-error");
    }, 600);
  });
