import { createRoot } from "react-dom/client";
import store from "./Reducers/QuestionsStore.js";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { MyRoutes } from "./Routes/Routes.js";
const root = createRoot(document.getElementById("root"));
// console.log("STORE:", store);
// console.log("getState:", store.getState);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <MyRoutes />
      {/* <QuizSetting/> */}
    </Provider>
    </BrowserRouter>

)