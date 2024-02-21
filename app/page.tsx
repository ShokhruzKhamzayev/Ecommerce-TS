import Banner from "@/components/banner";
import Brand from "@/components/brandSlide";
import Category from "@/components/category";
import EntryCard from "@/components/entryCat";
import Script from "next/script";

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
      <Script>
        {`window.replainSettings = { id: 'df244354-3afb-423a-a0fd-bc5d98711b50' };
(function(u){var s=document.createElement('script');s.async=true;s.src=u;
var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
})('https://widget.replain.cc/dist/client.js')`}
      </Script>
    </>
  );
}
