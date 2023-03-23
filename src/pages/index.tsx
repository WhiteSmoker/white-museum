import { type ReactElement } from "react";

import { type NextPageWithLayout } from "./_app";

import Home from "~/containers/Home";
import MainLayout from "~/styles/Layout";

const HomePage: NextPageWithLayout = () => {
  return <Home />;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
