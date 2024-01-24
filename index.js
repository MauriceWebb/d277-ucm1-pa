window.addEventListener("load", () => {
  const $emailInput = document.getElementById(":r7:-form-item");
  const $emailConfirmationInput = document.getElementById(":r9:-form-item");
  const $emailConfirmationErrorMessageParagraph = document.getElementById(
    ":r4:-form-item-message"
  );

  $emailConfirmationInput.addEventListener("input", (e) => {
    if (e.target.value !== $emailInput.value) {
      if ($emailConfirmationErrorMessageParagraph.style.display !== "block") {
        $emailConfirmationErrorMessageParagraph.style.display = "block";
      }
    } else {
      if ($emailConfirmationErrorMessageParagraph.style.display !== "none") {
        $emailConfirmationErrorMessageParagraph.style.display = "none";
      }
    }
  });
});
