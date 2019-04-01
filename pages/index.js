import Layout from '../app/components/layouts/layout';
import Banner from '../app/components/banner/banner';

const Index = () => {
  return (
    <Layout pageName="homepage">
      <main>
        <Banner />
        <img src="http://placehold.it/600x600" alt="Alt text" />
      </main>
    </Layout>
  );
};

export default Index;
