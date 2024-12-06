const getTrackingDomain = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const trackingDomain = urlParams.get("trd");

  return trackingDomain;
};

document.getElementsByName("redirect-link").forEach((e) => {
  const trackingDomain = getTrackingDomain();

  if (!trackingDomain) {
    return;
  }

  e.addEventListener("click", () => {
    window.location = `https://ww1.makelove.click/cool.php?lp=1`;
  });
});
