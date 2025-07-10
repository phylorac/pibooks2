import React from 'react';
import { FaBookOpen, FaGift, FaRocket } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-purple-700 text-white py-10 text-center shadow-lg">
        <h1 className="text-4xl font-bold mb-2">FrancePi - Comprendre la Crypto</h1>
        <p className="text-md">Découvre nos guides simples pour débuter avec Pi Network</p>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-6 py-10">
        {/* Ebook gratuit */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-10 border-l-8 border-purple-600">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-purple-700">
            <FaBookOpen className="mr-2" /> eBook Gratuit : Comprendre les cryptos sans jargon
          </h2>
          <p className="mb-4 text-gray-700">
            Ce guide t{`'`}explique simplement les bases des cryptomonnaies et de Pi Network, même si tu pars de zéro. Pas de jargon, que de l{`'`}essentiel !
          </p>
          <a
            href="/Ebook_PiNetwork_Debutant.pdf"
            download
            className="inline-block bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition shadow-md"
          >
            📄 Télécharger le guide maintenant
          </a>
        </section>

        {/* Formulaire email */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-10 border-l-8 border-green-600">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-green-700">
            <FaGift className="mr-2" /> Bonus et Nouveaux eBooks
          </h2>
          <p className="mb-4 text-gray-700">
            Laisse ton email pour recevoir nos prochains eBooks, des astuces crypto simples et des surprises exclusives.
          </p>
          <form action="#" method="POST" className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Ton email"
              required
              className="w-full border px-4 py-2 rounded shadow"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition shadow-md"
            >
              📨 Recevoir les bonus
            </button>
          </form>
        </section>

        {/* Prochain ebook */}
        <section className="bg-white rounded-2xl shadow-xl p-8 border-l-8 border-yellow-500">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-yellow-600">
            <FaRocket className="mr-2" /> À venir : Gagner ses premiers 100 € avec Pi Network
          </h2>
          <p className="text-gray-700">
            Notre prochain eBook t{`'`}expliquera comment utiliser tes Pi dans la vraie vie, sans investissement initial.
          </p>
          <p className="mt-2 italic text-sm text-gray-500">Disponible bientôt sur cette page.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-10">
        <p>&copy; 2025 FrancePi.com - Tous droits réservés</p>
      </footer>
    </div>
  );
}
