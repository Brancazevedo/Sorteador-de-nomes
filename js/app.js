const { createApp, reactive, computed } = Vue;
const Default_state = {
  state: true,
  inputName: "",
  names: [],
  error: "",
  showError: false,
  result: "",
};
createApp({
  setup() {
    const data = reactive(Default_state);

    ///computed
    const isReady = computed(() => {
      return data.names.length > 1;
    });

    ///methods
    const addNameToList = () => {
      const userName = data.inputName;
      if (validate(userName)) {
        data.names.push(userName);
        data.inputName = "";
        data.showError = false;
      } else {
        data.showError = true;
      }
    };

    const removeNames = (index) => {
      data.names.splice(index, 1);
    };
    const getRandomName = () => {
      return data.names[Math.floor(Math.random() * data.names.length)];
    };
    const generateResult = () => {
      let rand = getRandomName();
      if (data.result !== "") {
        while (rand === rand.result) {
          rand = getRandomName();
        }
      }
      data.result = rand;
    };
    const showResults = () => {
      generateResult();
      data.state = false;
    };

    const resetApp = () => {
      (data.state = true), (data.inputName = "");
      data.names = [];
      data.error = "";
      data.showError = false;
      data.result = "";
    };

    const validate = (value) => {
      data.error = "";

      if (value === "") {
        data.error = "erro";
        return false;
      }
      if (data.names.includes(value)) {
        data.error = "erro ja possui o nome";
        return false;
      }
      return true;
    };

    const getNewResult = () => {
      generateResult();
    };
    return {
      data,
      addNameToList,
      removeNames,
      isReady,
      showResults,
      generateResult,
      getRandomName,
      resetApp,
    };
  },
}).mount("#app");
