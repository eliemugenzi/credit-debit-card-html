const primaryColor = "#219bb2";

//JS to move label on focus
const focusIn = (id, animate = 80) => {
  $(`${id} ~ label`).animate(
    {
      fontSize: "0.6rem",
      top: "-0.7rem",
      padding: "0.25rem",
    },
    animate
  );
};

const focusOut = (id) => {
  $(`${id} ~ label`).animate(
    {
      fontSize: "12.5px",
      top: "0.8rem",
      padding: 0,
    },
    80
  );
};

// name field
$("#name").on("focusin", function () {
  if ($(this).val() === "") focusIn("#name");
  else focusIn("#name", 0);
});
$("#name").on("focusout", function () {
  if ($(this).val() === "") focusOut("#name");
  else $(this).next().css("color", primaryColor);
});

// card number field
$("#cardnumber").on("focusin", function () {
  if ($(this).val() === "") focusIn("#cardnumber");
  focusIn("#cardnumber", 0);
});
$("#cardnumber").on("focusout", function () {
  if ($(this).val() === "") focusOut("#cardnumber");
  else $(this).next().css("color", primaryColor);
});

// expiry date field
$("#expirationdate").on("focusin", function () {
  if ($(this).val() === "") focusIn("#expirationdate");
  focusIn("#expirationdate", 0);
});
$("#expirationdate").on("focusout", function () {
  if ($(this).val() === "") focusOut("#expirationdate");
  else $(this).next().css("color", primaryColor);
});

// security code field
$("#securitycode").on("focusin", function () {
  if ($(this).val() === "") focusIn("#securitycode");
  focusIn("#securitycode", 0);
});
$("#securitycode").on("focusout", function () {
  if ($(this).val() === "") focusOut("#securitycode");
  else $(this).next().css("color", primaryColor);
});

$("#billingAddress").on("focusin", function () {
  if ($(this).val() === "") focusIn("#billingAddress");
  else focusIn("#billingAddress", 0);
});
$("#billingAddress").on("focusout", function () {
  if ($(this).val() === "") focusOut("#billingAddress");
  else $(this).next().css("color", primaryColor);
});

$("#billingCountry").on("focusin", function () {
  if ($(this).val() === "") focusIn("#billingCountry");
  else focusIn("#billingCountry", 0);
});
$("#billingCountry").on("focusout", function () {
  if ($(this).val() === "") focusOut("#billingCountry");
  else $(this).next().css("color", primaryColor);
});

$("#billingState").on("focusin", function () {
  if ($(this).val() === "") focusIn("#billingState");
  else focusIn("#billingState", 0);
});
$("#billingState").on("focusout", function () {
  if ($(this).val() === "") focusOut("#billingState");
  else $(this).next().css("color", primaryColor);
});

$("#billingZip").on("focusin", function () {
  if ($(this).val() === "") focusIn("#billingZip");
  else focusIn("#billingZip", 0);
});
$("#billingZip").on("focusout", function () {
  if ($(this).val() === "") focusOut("#billingZip");
  else $(this).next().css("color", primaryColor);
});
