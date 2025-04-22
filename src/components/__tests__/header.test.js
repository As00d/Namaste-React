import { screen, render } from "@testing-library/dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/store/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// need to fix this
describe("these are tests for header component", () => {
  it("checks if header component is loaded correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  });
});
