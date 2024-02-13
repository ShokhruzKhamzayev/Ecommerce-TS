import Banner from "@/components/banner";
import Brand from "@/components/brandSlide";
import Category from "@/components/category";
import EntryCard from "@/components/entryCat";

export default function Home() {
  return (
    <>
      <div className="custom-container">
        <Banner />
        <EntryCard simpleTitle={'Grab the best deal on'} coloredTitle={'Smartphones'} nameCategory={'mobile'} daily={false} />
        <div className="my-[10px] md:my-[30px]">
          <Category withImage={true} />
        </div>
        <Brand />
        <EntryCard simpleTitle={'Daily'} coloredTitle={'Essentials'} nameCategory={'groceries'} daily={true} />
      </div>
    </>
  );
}
