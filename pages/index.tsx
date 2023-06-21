import { NextPage } from 'next';

import { MainConcept, MainContact, MainFlorist, MainShop, MainVisual, MainWork } from 'components/Block';
import { Layout } from 'components/Layout';

interface Props {}

const Home: NextPage<Props> = () => {
  return (
    <Layout>
      <MainVisual />
      <MainConcept />
      <MainWork />
      <MainFlorist />
      <MainShop />
      <MainContact />
    </Layout>
  );
};

export default Home;
