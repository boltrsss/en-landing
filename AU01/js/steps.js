let currentStep = 1;

// ** FADE IN FUNCTION **
const fadeIn = (elem, display) => {
  elem.style.opacity = 0;
  elem.style.display = display || "flex";
  (fade = () => {
    let val = parseFloat(elem.style.opacity);
    if (!((val += 0.05) > 1)) {
      elem.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
};

const changeStep = (increment) => {
  const currentStepElm = document.getElementById(`step${currentStep}`);

  currentStep += increment;

  const otherStepElm = document.getElementById(`step${currentStep}`);

  fadeIn(otherStepElm);
  currentStepElm.style.display = "none";
};

const steps = () => {
  // Hide all steps except the first one by id starting with step
  document.querySelectorAll('[id^="step"]').forEach((elm, index) => {
    if (index !== 0) {
      elm.style.display = "none";
    } else {
      elm.style.display = "flex";
    }
  });

  const nextElms = document.getElementsByName("next-step");
  const prevElms = document.getElementsByName("prev-step");

  nextElms.forEach((elm) => {
    elm.addEventListener("click", (e) => {
      e.preventDefault();

      changeStep(1);
    });
  });

  prevElms.forEach((elm) => {
    elm.addEventListener("click", (e) => {
      e.preventDefault();

      changeStep(-1);
    });
  });
};
