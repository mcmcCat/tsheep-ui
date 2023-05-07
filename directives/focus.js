export default {
  mounted(el) {
    const oSelectorInput = el.querySelector(".selector-input"),
      oSelectorMenu = el.querySelector(".selector-menu");

    const oInput = oSelectorInput.querySelector("input"),
      oPlaceHolder = oSelectorInput.querySelector("label"),
      oIcon = oSelectorInput.querySelector("span");

    oInput.addEventListener(
      "focus",
      function () {
        oPlaceHolder.style.display = "none";
        oIcon.className = "iconfont icon-sousuo";

        setTimeout(() => {
          oSelectorMenu.style.display = "block";
        }, 200);
      },
      false
    );
    oInput.addEventListener(
      "blur",
      function () {
        oIcon.className = "iconfont icon-s-xiajiantou";
        // 由于点击完menu中的menu-item时，要触发menu-item的click事件，所以menu要延迟一点none，不然消失了其子事件也跟着消失了，没有来得及被触发
        setTimeout(() => {
          oSelectorMenu.style.display = "none";
          if (this.value.length === 0) {
            oPlaceHolder.style.display = "block";
          }
        }, 200);
      },
      false
    );
  },
};
