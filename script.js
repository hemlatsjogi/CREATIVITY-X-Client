const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const confirmPopup = document.getElementById("confirmPopup");
  const confirmYes = document.getElementById("confirmYes");
  const confirmNo = document.getElementById("confirmNo");
  const motionQuestion = document.getElementById("motion-question");

  
 const musicYes = document.getElementById("musicYes");
  const musicNo = document.getElementById("musicNo");
  const musicSection = document.getElementById("music-section");
  const musicPopup = document.getElementById("musicPopup");
  const musicConfirmYes = document.getElementById("musicConfirmYes");
  const musicConfirmNo = document.getElementById("musicConfirmNo");
  const musicSuccess = document.getElementById("music-success");


  // ✅ Proceed when Yes is clicked
  yesBtn.addEventListener("click", () => {
    // alert("Proceeding to motion generation...");
    // Here you can call your motion generation function
  });

  // ⚠️ Show confirmation when No is clicked
  noBtn.addEventListener("click", () => {
    confirmPopup.classList.remove("hidden");
  });

  // ✅ If user confirms "Yes" in popup → remove question
  confirmYes.addEventListener("click", () => {
    confirmPopup.classList.add("hidden");
    motionQuestion.remove();
  });

  // ❌ If user says "No" in popup → close popup only
  confirmNo.addEventListener("click", () => {
    confirmPopup.classList.add("hidden");
  });

  // // ✅ If user clicks "Yes" → Add music
  // musicYes.addEventListener("click", () => {
  //   // Here you can trigger your Suno AI music generation API
  //   musicSection.classList.add("hidden");
  //   musicSuccess.classList.remove("hidden");
  // });

  // ⚠️ If user clicks "No" → show confirmation popup
  // musicNo.addEventListener("click", () => {
  //   musicPopup.classList.remove("hidden");
  // });

  // ✅ Confirm skip (Yes) → remove section and popup
  // musicConfirmYes.addEventListener("click", () => {
  //   musicPopup.classList.add("hidden");
  //   musicSection.remove();
  // });

  // ❌ Cancel skip (No) → just close popup
  // musicConfirmNo.addEventListener("click", () => {
  //   musicPopup.classList.add("hidden");
  // });  