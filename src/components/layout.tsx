import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-muted">
      <header>
        header
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="border-t backdrop-blur py-12 supports-[backdrop filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 text-center text-gray-400">
          <p>Made with love by Komal</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;