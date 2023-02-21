import Head from "next/head";
import { createContext, FC } from "react";
import Footer from "~/components/layout/Footer";
import Navbar from "~/components/layout/Navbar";

interface IUserContext {
  user: User | null;
}

export const UserContext = createContext<IUserContext>({ user: null });

const userAppContext: IUserContext = {
  user: null,
};

const DefaultLayout: FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UserContext.Provider value={userAppContext}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
      </UserContext.Provider>
    </>
  );
};

export default DefaultLayout;