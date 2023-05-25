import Header from '@/components/Header';
import Provider from '@/components/Provider';
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
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <Header />
          <main className="max-w-7xl mx-auto sm:px-16 px-6">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
