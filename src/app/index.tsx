import { Routing } from "pages";
import MainLayout from "shared/layouts/MainLayout";

import { withProviders } from "./providers";


const App = () => {
  return (
    <div className="app">
      <MainLayout>
        <Routing />
      </MainLayout>
    </div>
  );
};

export default withProviders(App);