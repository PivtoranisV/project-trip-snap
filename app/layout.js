import Header from '@/components/Header';
import '../styles/global.css';

export const metadata = {
  title: 'TripSnap',
  description:
    'Sharing and exploring incredible travel experiences from around the world',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <Header />
        <main className="relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
