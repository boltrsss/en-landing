const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const city = urlParams.get("city");

if (city) {
  const elms = document.getElementsByClassName("include-city");

  for (let i = 0; i < elms.length; i++) {
    const elm = elms[i];
    let cityPrefix = elm.getAttribute("data-city-prefix");

    if (!cityPrefix) {
      cityPrefix = "";
    } else {
      cityPrefix = ` ${cityPrefix}`;
    }

    // get the inner text of the element
    const innerText = elm.innerText;

    elm.innerText = `${innerText}${cityPrefix} ${city}`;
  }
}
