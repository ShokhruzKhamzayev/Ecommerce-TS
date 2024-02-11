import Banner from "@/components/banner";
import Category from "@/components/category";
import EntryCard from "@/components/entryCat";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="custom-container">
        <Banner />
        <EntryCard simpleTitle={'Grab the best deal on'} coloredTitle={'Smartphones'} nameCategory={'mobile'} daily={false} />
        <div className="my-[10px] md:my-[30px]">
          <Category withImage={true} />
        </div>
        <EntryCard simpleTitle={'Daily'} coloredTitle={'Essentials'} nameCategory={'groceries'} daily={true} />
      </div>
    </>
  );
}
