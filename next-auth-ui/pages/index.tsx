import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/login',
      permanent: true
    },
  };
}

export default async function Home(){
  await getServerSideProps();
}
