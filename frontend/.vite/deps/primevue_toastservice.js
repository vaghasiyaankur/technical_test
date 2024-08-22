import {
  primebus
} from "./chunk-7ZMJICGY.js";
import "./chunk-OBIMKLVP.js";

// node_modules/primevue/toasteventbus/toasteventbus.esm.js
var ToastEventBus = primebus();

// node_modules/primevue/usetoast/usetoast.esm.js
var PrimeVueToastSymbol = Symbol();

// node_modules/primevue/toastservice/toastservice.esm.js
var ToastService = {
  install: (app) => {
    const ToastService2 = {
      add: (message) => {
        ToastEventBus.emit("add", message);
      },
      removeGroup: (group) => {
        ToastEventBus.emit("remove-group", group);
      },
      removeAllGroups: () => {
        ToastEventBus.emit("remove-all-groups");
      }
    };
    app.config.globalProperties.$toast = ToastService2;
    app.provide(PrimeVueToastSymbol, ToastService2);
  }
};
export {
  ToastService as default
};
//# sourceMappingURL=primevue_toastservice.js.map
