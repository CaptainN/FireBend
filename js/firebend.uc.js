UC.firebend = {
  /**
   * All this does at the moment is make a couple of bg's transparent
   */
  init: function () {
    console.log(
      "firebend userChrome.js script is starting with MutationObserver...",
    );

    let observer = new MutationObserver(function (mutations, obs) {
      let shadowRoot = document.querySelector(
        "#sidebar-main > sidebar-main:nth-child(1)",
      )?.shadowRoot;

      if (shadowRoot) {
        console.log("Shadow root detected");
        let wrapper = shadowRoot.querySelector(".wrapper");
        if (wrapper) {
          console.log("Wrapper found and styled");
          wrapper.style.background = "transparent";
          wrapper.style.border = "none";
          obs.disconnect(); // Stop observing once element is found and styled
        }
      }
    });

    // Start observing the document for changes
    observer.observe(document, {
      childList: true,
      subtree: true,
    });
  },
};
UC.firebend.init();
