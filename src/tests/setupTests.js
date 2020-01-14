import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// Add support for React v16
Enzyme.configure({
  adapter: new Adapter()
});
