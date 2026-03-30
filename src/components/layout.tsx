import type { PropsWithChildren } from "react";
import Header from "./Header";


const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div 
    className="
                min-h-screen
                bg-background 
                dark:bg-gradient-to-r 
                dark:from-black 
                dark:to-gray-900
              ">
      <Header/>
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="border-t backdrop-blur py-9 supports-[backdrop filter]:bg-background/60">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>Made with love❤️ by Komal</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;