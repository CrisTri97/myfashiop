import Banner from "../components/Banner/Banner";
import HeadPage from "../components/Head/HeadPage";
import HotDeal from "../components/HotDeal/HotDeal";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeadPage />
      <main>
        <Banner />
        <div className="w-full h-[300px] my-5 px-10">
          <HotDeal />
        </div>
      </main>
    </div>
  );
}
