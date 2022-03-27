import type { NextPage } from 'next';
import Head from 'next/head';
import Board from '../components/Board';
import Button from '../components/Button';
import RetrySvg from '../components/RetrySvg';
import StatusBar from '../components/StatusBar';
import { useGame } from '../context/game';

const Home: NextPage = () => {
  const { end, handleReset, handleClear } = useGame();

  return (
    <div className="h-screen flex justify-center items-center">
      <Head>
        <title>Tic Tac Toe</title>
        <meta name="description" content="Tic Tac Toe Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pt-8 pb-10 lg:px-10 px-4 bg-gray-900 rounded-sm custom-shadow flex items-center justify-center flex-col z-[1]">
        <h1 className="text-green-600 text-4xl mb-5 font-poppins font-black">
          Tic <span className="text-white">Tac</span> Toe
        </h1>
        <StatusBar />
        <Board />
        <div className="mt-2 h-10 w-full text-white flex items-center justify-between md:justify-around">
          <Button onClick={handleClear} variant="secondary">
            Novo Jogo
          </Button>

          <Button variant="primary" disabled={!end} onClick={handleReset}>
            <RetrySvg />
            <span className="ml-1">Denovo</span>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Home;
