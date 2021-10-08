// 不同请求的处理
import mount from "./mount";
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "add": {
      let count = state.count > 6 ? 6 : state.count;
      mount.handleChange.SetSangji({
        nodes: state.add[count],
        links: state.sangji["links"],
      });
      return {
        ...state,
        sangji: { nodes: state.add[count], links: state.sangji["links"] },
        count: state.count + 1,
      };
    }
    case "clear": {
      mount.handleChange.SetSangji({
        nodes: state.empty["nodes"],
        links: state.sangji["links"],
      });
      return {
        ...state,
        count: 0,
        sangji: { nodes: state.empty["nodes"], links: state.sangji["links"] },
      };
    }
    case "show": {
      let newData = state.all;
      mount.handleChange.SetSangji(newData);
      return {
        ...state,
        sangji: newData,
        count: 7,
      };
    }
    case "init": {
      let newData = [];
      newData = action.payload;
      return {
        ...state,
        data: newData,
      };
    }
    case "sangji": {
      let newData = [];
      console.log("sangji");
      // TODO: use action.payload to update newData
      console.log(action.payload);
      if (action.payload) newData = action.payload;
      mount.handleChange.SetAll(newData);
      mount.handleChange.SetSangji(newData);

      return {
        ...state,
        sangji: newData,
        all: newData,
      };
    }
    default:
      throw new Error();
  }
};

export default reducer;
