import Vue from "vue";
import router from "../router";
import _ from "lodash";

const watch = new Vue({
  data: function() {
    return {
      urlData: {}
    };
  }
});

const setUrlData = (key, val, replace) => {
  Vue.set(watch.urlData, key, val);

  const newRoute = {
    name: router.currentRoute.name,
    hash: router.currentRoute.hash,
    query: _.assign(_.cloneDeep(router.currentRoute.query), watch.urlData),
    params: router.currentRoute.params
  };
  if (replace) {
    router.replace(newRoute);
  } else {
    router.push(newRoute);
  }
};

const getUrlData = (key, type) => {
  if (watch.urlData[key] === undefined) {
    return undefined;
  }

  if (type === Boolean) {
    return type(watch.urlData[key] === "false" ? false : watch.urlData[key]);
  } else if (typeof type === "function") {
    return type(watch.urlData[key]);
  } else {
    return watch.urlData[key];
  }
};

router.afterEach((to, from) => {
  if (from.name !== to.name) {
    Vue.set(watch, "urlData", {});
  }

  Object.keys(to.query).forEach(key => {
    if (
      watch.urlData[key] !== undefined &&
      watch.urlData[key] !== to.query[key]
    ) {
      Vue.set(watch.urlData, key, to.query[key]);
    }
  });
});

export default function install(Vue) {
  Vue.prototype.$setUrlData = Vue.setUrlData = setUrlData;
  Vue.prototype.$getUrlData = Vue.getUrlData = getUrlData;

  // Reactive Getter
  Object.defineProperty(Vue.prototype, "$urlData", {
    get: () => {
      return watch.$data.urlData;
    }
  });

  Object.defineProperty(Vue, "urlData", {
    get: () => {
      return watch.$data.urlData;
    }
  });

  Vue.mixin({
    beforeCreate() {
      if (this.$options.urlData) {
        Object.keys(this.$options.urlData).forEach(key => {
          const urlDataDefinition = this.$options.urlData[key];
          if (router.currentRoute.query[key] !== undefined) {
            Vue.set(watch.urlData, key, router.currentRoute.query[key]);
          } else {
            Vue.set(watch.urlData, key, urlDataDefinition.default);
          }

          this.$options.computed = this.$options.computed || {};

          if (!this.$options.computed[key]) {
            this.$options.computed[key] = {
              get: () => {
                return getUrlData(key, urlDataDefinition.type);
              },
              set: val => {
                setUrlData(key, val, urlDataDefinition.replace);
              }
            };
          }
        });
      }
    }
  });
}
