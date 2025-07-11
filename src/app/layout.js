// src/app/layout.js
export const metadata = {
  title: 'FrancePi - Comprendre la Crypto',
  description: 'Guides simples pour débuter avec Pi Network',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}