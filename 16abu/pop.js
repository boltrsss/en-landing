(function() {
    // Variables to store the URLs for Yes and No
    var yesUrl = "https://ww1.makelove.click/cool.php?lp=1&to_offer=1";
    var noUrl = "https://ww1.makelove.click/cool.php?lp=1&to_offer=2";
    var selectedUrl = ""; // This will hold the selected URL based on user choice

    // Function to open the popunder
    function openPopunder() {
        if (selectedUrl) {
            var popunder = window.open(selectedUrl, '_blank');
            if (popunder) {
                popunder.blur();  // Ensure the new window stays behind
                window.focus();   // Focus back on the original window
            }
        } else {
            console.error("No URL selected for popunder.");
        }
    }

    // Add event listeners for Yes and No buttons
    document.addEventListener('DOMContentLoaded', function() {
        var btnYes = document.querySelector('.btn-yes');
        var btnNo = document.querySelector('.btn-no');
        var continueBtn = document.getElementById('continueBtn');

        // Check if the elements exist
        if (btnYes && btnNo && continueBtn) {
            // Set the selected URL when "Yes" or "No" is clicked
            btnYes.addEventListener('click', function() {
                selectedUrl = yesUrl;
            });

            btnNo.addEventListener('click', function() {
                selectedUrl = noUrl;
            });

            // Open the popunder when "Continue" is clicked
            continueBtn.addEventListener('click', function() {
                openPopunder();
            });
        } else {
            console.error("Required elements (Yes, No, Continue) not found in the DOM.");
        }
    });
})();
