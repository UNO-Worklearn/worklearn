import { useEffect } from "react";

function Loader() {
  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      const loader = document.querySelector(".loader");
      if (loader) {
        loader.style.transition = "opacity 0.5s ease";
        loader.style.opacity = "0";
        setTimeout(() => {
          loader.style.display = "none";
        }, 500);
      }
    }, 3000);
    return () => {
      clearTimeout(loaderTimeout);
    };
  }, []);

  return (
    <div className="loader">
      <div class="loader-inner">
        <div class="loader-blocks">
          <img
            src="https://www.unomaha.edu/university-communications/downloadables/campus-icon-the-o/uno-icon-color.png"
            alt="uno logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Loader;
