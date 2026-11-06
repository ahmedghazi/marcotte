import { Metadata } from "next";
import website from "./config/website";
import Image from "next/image";
import Dock from "./components/Dock";
import { clsx } from "clsx";
import Figure from "./components/Figure";
import Images from "./components/Images";
import data from "@/public/data.json";
import { ImageProps } from "./types/type";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: website?.title,
    description: website.description,
    openGraph: {
      images: website.url + "/media/flowers-optim/Marcotte_1-optim.webp",
    },
  };
}

// export const revalidate = 3600; // revalidate every hour

// type PageProps = {}
const HomePage = async function Page() {
  const images = data as ImageProps[];
  return (
    <div className='template template--home' data-template='home'>
      {images && (
        <>
          <Dock data={images} />
          <Images data={images} />
        </>
      )}
    </div>
  );
};

export default HomePage;
