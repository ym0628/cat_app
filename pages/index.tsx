import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const fetchCatImage = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const result = await res.json();
    // console.log(result[0]);
    return result[0];
  };

  const handleClick = async () => {
    const catImage = await fetchCatImage();
    console.log(catImage);
  };

  return (
    <div className={styles.container}>
      <h1>猫画像アプリ</h1>
      <img src="https://cdn2.thecatapi.com/images/1v1.jpg" alt="cat_image" />
      <button onClick={handleClick}>
        今日の猫さん
      </button>
    </div>
  );
};
