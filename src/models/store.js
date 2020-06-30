// state - 创建 state 和 reducer
import { createContainer } from "xlstate";
const STATES = {
  isPreview: false
};

const REDUCERS = {
  setIsPreview(state) {
    return {
      ...state,
      isPreview: !state.isPreview
    }
  }
};
const { Provider, useGloContext } = createContainer(STATES, REDUCERS);

export {
  Provider,
  useGloContext
}
