import Banner from "../components/Banner/Banner";
import HeadPage from "../components/Head/HeadPage";
import HotDeal from "../components/HotDeal/HotDeal";
import SlickSlider from "../components/SlickSlider/SlickSlider";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeadPage />
      <main>
        <Banner />
        <div className="w-full h-[300px] bg-slate-500 my-5 px-10">
          <SlickSlider />
        </div>
        <HotDeal />
      </main>
    </div>
  );
}
