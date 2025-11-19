import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import BookNow from '@/components/sections/BookNow';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex-1'>
        {children}
        <BookNow />
      </main>
      <Footer />
    </div>
  );
}
