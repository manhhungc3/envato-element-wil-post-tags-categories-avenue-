(function () {
  // @ComponentName
  const componentName = "wiloke-post-tags-categories-avenue";

  async function init() {
    wiloke.loadStyle({
      file: "https://cdnjs.cloudflare.com/ajax/libs/Swiper/7.2.0/swiper-bundle.min.css",
    });
    wiloke.loadStyle({
      file: `https://dev-magicbadges.myshopkit.app/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css`,
    });
    wiloke.loadStyle({
      file: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap`,
    });
    wiloke.loadStyle({
      file: `https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap`,
    });
    await wiloke.loadScript({
      file: "https://cdnjs.cloudflare.com/ajax/libs/Swiper/7.2.0/swiper-bundle.min.js",
    });
    wiloke.loadStyle({
      file: `https://envato-element-js-core.netlify.app/main.css`,
    });




    wiloke.elementor(`.${componentName}-wrapper`, componentName, async (el) => {
      if (!!el) {
        wiloke.skeleton(el, componentName);
        const swiperEl = el.querySelector(".wil-swiper");
        wiloke.swiper(swiperEl);
      }
    });
  }


  if (window.wiloke) {
    init();
  } else {
    const coreJs = "https://envato-element-js-core.netlify.app/main.js";
    const coreJsEl = document.createElement("script");
    coreJsEl.src = coreJs;
    document.body.appendChild(coreJsEl);
    coreJsEl.addEventListener("load", init);
  }
})();
