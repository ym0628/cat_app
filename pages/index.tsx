import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>猫画像アプリ</h1>
      <img src="" alt="" />
      <button>今日の猫さん</button>
    </div>
  );
};
