import Banner from "../components/Banner/Banner";
import HeadPage from "../components/Head/HeadPage";
import HotDeal from "../components/HotDeal/HotDeal";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import ListLogo from "../components/ListLogo/ListLogo";
import ListProduct from "../components/ListProduct/ListProduct";
import styled from "styled-components";
import pro1 from "../public/themes/img/products/xf-p-1.jpg";
import pro2 from "../public/themes/img/products/xf-p-2.jpg";
import pro3 from "../public/themes/img/products/xf-p-3.jpg";
import pro4 from "../public/themes/img/products/xf-p-4.jpg";
import pro5 from "../public/themes/img/products/xf-p-5.jpg";
import Pagination from "../components/Pagination/Pagination";
import Subscribe from "../components/Subscribe/Subscribe";

const listProduct = [
  pro1,
  pro2,
  pro3,
  pro4,
  pro5,
  pro1,
  pro2,
  pro3,
  pro4,
  pro5,
  pro1,
  pro2,
  pro3,
  pro4,
  pro5,
];
const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 15px;
  margin: 20px 0;
`;

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeadPage />
      <main>
        <Banner />
        <div className="w-full h-auto my-5 px-10">
          <HotDeal />
        </div>
        <Container>
          <ListLogo />
          <ListProduct products={listProduct} />
          <Pagination />
        </Container>
        <Subscribe />
      </main>
    </div>
  );
}
