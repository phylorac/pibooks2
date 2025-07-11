export const metadata = {
  title: 'Pibooks',
  description: 'Comprendre la crypto simplement',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}