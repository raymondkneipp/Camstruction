import CTA from "../components/CTA";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import ServicesColumn from "../components/ServicesColumn";

export default function Home() {
  return (
    <Layout title="Home">
      <Hero />
      <ServicesColumn />
      <CTA />
    </Layout>
  );
}
