import { Component } from "react";

class Mount {
  state = {
    count: 8,
    map: {
      survive: 0,
      "sex-female": 1,
      "sex-male": 1,
      "pclass-1": 2,
      "pclass-2": 2,
      "pclass-3": 2,
      "fare<50": 3,
      "50<fare<100": 3,
      "fare>100": 3,
      "embark-C": 4,
      "embark-S": 4,
      "embark-Q": 4,
      "age<15": 5,
      "15<age<40": 5,
      "40<age<65": 5,
      "age>65": 5,
      "parch-0": 6,
      "parch-1": 6,
      "parch>1": 6,
      "sibsp-0": 7,
      "sibsp-1": 7,
      "sibsp>1": 7,
    },
    data: [
      "survive",
      "sex",
      "pclass",
      "fare",
      "embark",
      "age",
      "parch",
      "sibsp",
    ],
    sangji: {
      nodes: [
        { name: "survive" },
        { name: "sex-female" },
        { name: "sex-male" },
        { name: "pclass-1" },
        { name: "pclass-2" },
        { name: "pclass-3" },
        { name: "fare<50" },
        { name: "50<fare<100" },
        { name: "fare>100" },
        { name: "embark-C" },
        { name: "embark-S" },
        { name: "embark-Q" },
        { name: "age<15" },
        { name: "15<age<40" },
        { name: "40<age<65" },
        { name: "age>65" },
        { name: "parch-0" },
        { name: "parch-1" },
        { name: "parch>1" },
        { name: "sibsp-0" },
        { name: "sibsp-1" },
        { name: "sibsp>1" },
      ],
      links: [
        { source: "survive", target: "sex-female", value: 197 },
        { source: "survive", target: "sex-male", value: 93 },

        { source: "sex-female", target: "pclass-1", value: 82 },
        { source: "sex-female", target: "pclass-2", value: 68 },
        { source: "sex-female", target: "pclass-3", value: 47 },
        { source: "sex-male", target: "pclass-1", value: 40 },
        { source: "sex-male", target: "pclass-2", value: 15 },
        { source: "sex-male", target: "pclass-3", value: 38 },

        { source: "pclass-1", target: "fare<50", value: 29 },
        { source: "pclass-1", target: "50<fare<100", value: 57 },
        { source: "pclass-1", target: "fare>100", value: 36 },
        { source: "pclass-2", target: "fare<50", value: 81 },
        { source: "pclass-2", target: "50<fare<100", value: 2 },
        { source: "pclass-2", target: "fare>100", value: 0 },
        { source: "pclass-3", target: "fare<50", value: 82 },
        { source: "pclass-3", target: "50<fare<100", value: 3 },
        { source: "pclass-3", target: "fare>100", value: 0 },

        { source: "fare<50", target: "embark-C", value: 36 },
        { source: "fare<50", target: "embark-S", value: 149 },
        { source: "fare<50", target: "embark-Q", value: 7 },
        { source: "50<fare<100", target: "embark-C", value: 24 },
        { source: "50<fare<100", target: "embark-S", value: 35 },
        { source: "50<fare<100", target: "embark-Q", value: 3 },
        { source: "fare>100", target: "embark-C", value: 19 },
        { source: "fare>100", target: "embark-S", value: 17 },
        { source: "fare>100", target: "embark-Q", value: 0 },

        { source: "embark-C", target: "age<15", value: 12 },
        { source: "embark-C", target: "15<age<40", value: 47 },
        { source: "embark-C", target: "40<age<65", value: 20 },
        { source: "embark-C", target: "age>65", value: 0 },
        { source: "embark-S", target: "age<15", value: 33 },
        { source: "embark-S", target: "15<age<40", value: 128 },
        { source: "embark-S", target: "40<age<65", value: 39 },
        { source: "embark-S", target: "age>65", value: 1 },
        { source: "embark-Q", target: "age<15", value: 0 },
        { source: "embark-Q", target: "15<age<40", value: 9 },
        { source: "embark-Q", target: "40<age<65", value: 1 },
        { source: "embark-Q", target: "age>65", value: 0 },

        { source: "age<15", target: "parch-0", value: 5 },
        { source: "age<15", target: "parch-1", value: 24 },
        { source: "age<15", target: "parch>1", value: 16 },
        { source: "15<age<40", target: "parch-0", value: 136 },
        { source: "15<age<40", target: "parch-1", value: 23 },
        { source: "15<age<40", target: "parch>1", value: 25 },
        { source: "40<age<65", target: "parch-0", value: 44 },
        { source: "40<age<65", target: "parch-1", value: 14 },
        { source: "40<age<65", target: "parch>1", value: 2 },
        { source: "age>65", target: "parch-0", value: 1 },
        { source: "age>65", target: "parch-1", value: 0 },
        { source: "age>65", target: "parch>1", value: 0 },

        { source: "parch-0", target: "sibsp-0", value: 130 },
        { source: "parch-0", target: "sibsp-1", value: 52 },
        { source: "parch-0", target: "sibsp>1", value: 4 },
        { source: "parch-1", target: "sibsp-0", value: 24 },
        { source: "parch-1", target: "sibsp-1", value: 31 },
        { source: "parch-1", target: "sibsp>1", value: 6 },
        { source: "parch>1", target: "sibsp-0", value: 21 },
        { source: "parch>1", target: "sibsp-1", value: 14 },
        { source: "parch>1", target: "sibsp>1", value: 8 },
      ],
    },
    all: {
      nodes: [
        { name: "survive" },
        { name: "sex-female" },
        { name: "sex-male" },
        { name: "pclass-1" },
        { name: "pclass-2" },
        { name: "pclass-3" },
        { name: "fare<50" },
        { name: "50<fare<100" },
        { name: "fare>100" },
        { name: "embark-C" },
        { name: "embark-S" },
        { name: "embark-Q" },
        { name: "age<15" },
        { name: "15<age<40" },
        { name: "40<age<65" },
        { name: "age>65" },
        { name: "parch-0" },
        { name: "parch-1" },
        { name: "parch>1" },
        { name: "sibsp-0" },
        { name: "sibsp-1" },
        { name: "sibsp>1" },
      ],
      links: [
        { source: "survive", target: "sex-female", value: 197 },
        { source: "survive", target: "sex-male", value: 93 },

        { source: "sex-female", target: "pclass-1", value: 82 },
        { source: "sex-female", target: "pclass-2", value: 68 },
        { source: "sex-female", target: "pclass-3", value: 47 },
        { source: "sex-male", target: "pclass-1", value: 40 },
        { source: "sex-male", target: "pclass-2", value: 15 },
        { source: "sex-male", target: "pclass-3", value: 38 },

        { source: "pclass-1", target: "fare<50", value: 29 },
        { source: "pclass-1", target: "50<fare<100", value: 57 },
        { source: "pclass-1", target: "fare>100", value: 36 },
        { source: "pclass-2", target: "fare<50", value: 81 },
        { source: "pclass-2", target: "50<fare<100", value: 2 },
        { source: "pclass-2", target: "fare>100", value: 0 },
        { source: "pclass-3", target: "fare<50", value: 82 },
        { source: "pclass-3", target: "50<fare<100", value: 3 },
        { source: "pclass-3", target: "fare>100", value: 0 },

        { source: "fare<50", target: "embark-C", value: 36 },
        { source: "fare<50", target: "embark-S", value: 149 },
        { source: "fare<50", target: "embark-Q", value: 7 },
        { source: "50<fare<100", target: "embark-C", value: 24 },
        { source: "50<fare<100", target: "embark-S", value: 35 },
        { source: "50<fare<100", target: "embark-Q", value: 3 },
        { source: "fare>100", target: "embark-C", value: 19 },
        { source: "fare>100", target: "embark-S", value: 17 },
        { source: "fare>100", target: "embark-Q", value: 0 },

        { source: "embark-C", target: "age<15", value: 12 },
        { source: "embark-C", target: "15<age<40", value: 47 },
        { source: "embark-C", target: "40<age<65", value: 20 },
        { source: "embark-C", target: "age>65", value: 0 },
        { source: "embark-S", target: "age<15", value: 33 },
        { source: "embark-S", target: "15<age<40", value: 128 },
        { source: "embark-S", target: "40<age<65", value: 39 },
        { source: "embark-S", target: "age>65", value: 1 },
        { source: "embark-Q", target: "age<15", value: 0 },
        { source: "embark-Q", target: "15<age<40", value: 9 },
        { source: "embark-Q", target: "40<age<65", value: 1 },
        { source: "embark-Q", target: "age>65", value: 0 },

        { source: "age<15", target: "parch-0", value: 5 },
        { source: "age<15", target: "parch-1", value: 24 },
        { source: "age<15", target: "parch>1", value: 16 },
        { source: "15<age<40", target: "parch-0", value: 136 },
        { source: "15<age<40", target: "parch-1", value: 23 },
        { source: "15<age<40", target: "parch>1", value: 25 },
        { source: "40<age<65", target: "parch-0", value: 44 },
        { source: "40<age<65", target: "parch-1", value: 14 },
        { source: "40<age<65", target: "parch>1", value: 2 },
        { source: "age>65", target: "parch-0", value: 1 },
        { source: "age>65", target: "parch-1", value: 0 },
        { source: "age>65", target: "parch>1", value: 0 },

        { source: "parch-0", target: "sibsp-0", value: 130 },
        { source: "parch-0", target: "sibsp-1", value: 52 },
        { source: "parch-0", target: "sibsp>1", value: 4 },
        { source: "parch-1", target: "sibsp-0", value: 24 },
        { source: "parch-1", target: "sibsp-1", value: 31 },
        { source: "parch-1", target: "sibsp>1", value: 6 },
        { source: "parch>1", target: "sibsp-0", value: 21 },
        { source: "parch>1", target: "sibsp-1", value: 14 },
        { source: "parch>1", target: "sibsp>1", value: 8 },
      ],
    },
    empty: {
      nodes: [],
      links: [],
    },
    add: [
      [{ name: "survive" }, { name: "sex-female" }, { name: "sex-male" }],
      [
        { name: "survive" },
        { name: "sex-female" },
        { name: "sex-male" },
        { name: "pclass-1" },
        { name: "pclass-2" },
        { name: "pclass-3" },
      ],
      [
        { name: "survive" },
        { name: "sex-female" },
        { name: "sex-male" },
        { name: "pclass-1" },
        { name: "pclass-2" },
        { name: "pclass-3" },
        { name: "fare<50" },
        { name: "50<fare<100" },
        { name: "fare>100" },
      ],
      [
        { name: "survive" },
        { name: "sex-female" },
        { name: "sex-male" },
        { name: "pclass-1" },
        { name: "pclass-2" },
        { name: "pclass-3" },
        { name: "fare<50" },
        { name: "50<fare<100" },
        { name: "fare>100" },
        { name: "embark-C" },
        { name: "embark-S" },
        { name: "embark-Q" },
      ],
      [
        { name: "survive" },
        { name: "sex-female" },
        { name: "sex-male" },
        { name: "pclass-1" },
        { name: "pclass-2" },
        { name: "pclass-3" },
        { name: "fare<50" },
        { name: "50<fare<100" },
        { name: "fare>100" },
        { name: "embark-C" },
        { name: "embark-S" },
        { name: "embark-Q" },
        { name: "age<15" },
        { name: "15<age<40" },
        { name: "40<age<65" },
        { name: "age>65" },
      ],
      [
        { name: "survive" },
        { name: "sex-female" },
        { name: "sex-male" },
        { name: "pclass-1" },
        { name: "pclass-2" },
        { name: "pclass-3" },
        { name: "fare<50" },
        { name: "50<fare<100" },
        { name: "fare>100" },
        { name: "embark-C" },
        { name: "embark-S" },
        { name: "embark-Q" },
        { name: "age<15" },
        { name: "15<age<40" },
        { name: "40<age<65" },
        { name: "age>65" },
        { name: "parch-0" },
        { name: "parch-1" },
        { name: "parch>1" },
      ],
      [
        { name: "survive" },
        { name: "sex-female" },
        { name: "sex-male" },
        { name: "pclass-1" },
        { name: "pclass-2" },
        { name: "pclass-3" },
        { name: "fare<50" },
        { name: "50<fare<100" },
        { name: "fare>100" },
        { name: "embark-C" },
        { name: "embark-S" },
        { name: "embark-Q" },
        { name: "age<15" },
        { name: "15<age<40" },
        { name: "40<age<65" },
        { name: "age>65" },
        { name: "parch-0" },
        { name: "parch-1" },
        { name: "parch>1" },
        { name: "sibsp-0" },
        { name: "sibsp-1" },
        { name: "sibsp>1" },
      ],
    ],
  };

  getData = {
    getSangji: () => {
      console.log("getsangji");
      console.log(this.state.sangji);
      return this.state.sangji;
    },
  };

  handleChange = {
    SetSangji: (sangji) => {
      console.log("setsangji");
      console.log(sangji);
      this.state.sangji = sangji;
      this.refreshComponent("Left");
    },
    SetAll: (sangji) => {
      console.log("setsangji");
      console.log(sangji);
      this.state.all = sangji;
    },
    SetCount: (num) => {
      this.state.count = num;
    },
    IncCount: (num) => {
      this.state.count = this.state.count + 1;
    },
    add: () => {
      let count = this.state.count > 6 ? 6 : this.state.count;
      let isnew = this.state.count <= 6;
      this.state.count = this.state.count + 1;
      if (isnew) {
        this.state.sangji = {
          nodes: this.state.add[count],
          links: this.state.sangji["links"],
        };

        this.getComponent("Left").update();
        this.refreshComponent("Left");
        this.refreshComponent("RightWindow");
      } else {
        this.state.count = 8;
        this.getComponent("Left").update();
        this.refreshComponent("Left");
        this.refreshComponent("RightWindow");
      }
    },
    clear: () => {
      if (this.state.count !== 0) {
        this.state.sangji = {
          nodes: this.state.empty["nodes"],
          links: this.state.sangji["links"],
        };
        this.state.count = 0;

        this.getComponent("Left").update();
        this.refreshComponent("Left");
        this.refreshComponent("RightWindow");
      }
    },
    show: () => {
      let isnew = this.state.count <= 6;
      if (isnew) {
        this.state.sangji = this.state.all;
        this.getComponent("Left").update();
        this.refreshComponent("Left");
        this.refreshComponent("RightWindow");
      }
      this.state.count = 8;
      this.getComponent("Left").update();
      this.refreshComponent("Left");
      this.refreshComponent("RightWindow");
    },
    sangji: () => {
      this.state.sangji = this.state.all;

      this.getComponent("Left").update();
      this.refreshComponent("Left");
      this.refreshComponent("RightWindow");
    },
  };
  components = {};

  getComponent(str) {
    return this.components[str];
  }

  registerComponent(str, component) {
    if (!(component instanceof Component) || !(typeof str === "string")) return;
    this.components[str] = component;
    if (!component.state || !component.state.storeAutoRefresh)
      component.setState({ storeAutoRefresh: true });
  }

  unregisterComponent(str, component) {
    if (!(component instanceof Component) || !(typeof str === "string")) return;
    if (this.components[str] === component) this.components[str] = undefined;
  }

  refreshComponent(str) {
    if (!(typeof str === "string")) return;
    if (this.components.hasOwnProperty(str)) {
      console.log("refresh: " + str);
      this.components[str].setState((state) => ({
        storeAutoRefresh: !state.storeAutoRefresh,
      }));
    }
  }
}

const mount = new Mount();

export default mount;
