'use client';
import CardsContainer from '@/components/CardsContainer/CardsContainer';
import style from './page.module.css';
import ContainerPrincipal from '@/components/ContainerPrincipal/ContainerPrincipal';
import { DataContextProvider } from '@/context/DataContext';
import NavContainer from '@/components/NavContainer/NavContainer';

export default function Home() {
  return (
    <main className={style.container}>
      <DataContextProvider>
        <NavContainer />
        <ContainerPrincipal />
        <CardsContainer />
      </DataContextProvider>
      <script
        type="module"
        src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/tailChase.js"
        defer
      ></script>
    </main>
  );
}
