import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DotEnv from "dotenv";

// Add support for React v16
Enzyme.configure({
  adapter: new Adapter()
});

DotEnv.config({ path: ".env.test" });
