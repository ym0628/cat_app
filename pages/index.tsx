import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

interface SearchCatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

export default function Home() {
  const [catImageUrl, setCatImageUrl] = useState("");
  const fetchCatImage = async (): Promise<SearchCatImage> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const result = await res.json();
    // console.log(result[0]);
    return result[0];
  };

  const handleClick = async () => {
    const catImage = await fetchCatImage();
    // console.log(catImage.url);
    setCatImageUrl(catImage.url);
  };

  return (
    <div className={styles.container}>
      <h1>猫画像アプリ</h1>
      <img src={catImageUrl} alt="cat_image" />
      <button onClick={handleClick}>
        今日の猫さん
      </button>
    </div>
  );
};
