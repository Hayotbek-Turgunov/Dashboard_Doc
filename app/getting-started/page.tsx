import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boshlash | Minimal Hujjatlar Sayti",
  description:
    "Hujjatlar sayti va vositalardan qanday foydalanishni o‘rganing.",
};

export default function GettingStarted() {
  return (
    <main className="max-w-4xl mx-auto pl-0 pr-9 sm:p-6 lg:p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Boshlash</h1>
      <p className="text-lg mb-8 text-gray-700">
        Hujjatlar saytimiz uchun boshlang‘ich qo‘llanmaga xush kelibsiz!
        Atrof-muhitni sozlash va vositalarimizdan foydalanishni boshlash uchun
        ushbu qadamlarni bajaring.
      </p>

      <section aria-labelledby="installation">
        <h2 id="installation" className="text-2xl font-semibold mt-8 mb-4">
          O‘rnatish
        </h2>
        <p className="mb-4 text-gray-700">
          Paketimizni o‘rnatish uchun terminalingizda quyidagi buyruqni
          bajaring:
        </p>
        <pre
          className="bg-gray-100 p-4 rounded-md mb-4 overflow-x-auto text-sm"
          aria-label="O‘rnatish buyrug‘i"
        >
          <code>npm install @our-company/package</code>
        </pre>
      </section>

      <section aria-labelledby="configuration">
        <h2 id="configuration" className="text-2xl font-semibold mt-8 mb-4">
          Sozlash
        </h2>
        <p className="mb-4 text-gray-700">
          O‘rnatishdan so‘ng konfiguratsiya faylini sozlashingiz kerak.
          Loyihangizning ildiz papkasida{" "}
          <code className="text-blue-600 bg-gray-200 px-1 py-0.5 rounded">
            config.js
          </code>{" "}
          nomli fayl yarating va unga quyidagi mazmunni qo‘shing:
        </p>
        <pre
          className="bg-gray-100 p-4 rounded-md mb-4 overflow-x-auto text-sm"
          aria-label="Konfiguratsiya fayli mazmuni"
        >
          <code>{`module.exports = {
  apiKey: 'SIZNING_API_KALITINGIZ',
  environment: 'production',
}`}</code>
        </pre>
      </section>

      <section aria-labelledby="usage">
        <h2 id="usage" className="text-2xl font-semibold mt-8 mb-4">
          Foydalanish
        </h2>
        <p className="mb-4 text-gray-700">
          Loyihangizda paketimizdan qanday foydalanish haqida oddiy misol:
        </p>
        <pre
          className="bg-gray-100 p-4 rounded-md mb-4 overflow-x-auto text-sm"
          aria-label="Foydalanish misoli"
        >
          <code>{`import { Client } from '@our-company/package';

const client = new Client();
const result = await client.doSomething();
console.log(result);`}</code>
        </pre>
      </section>

      <p className="mt-8 text-gray-700">
        Batafsil ma’lumot olish uchun bizning{" "}
        <a href="/components" className="text-blue-600 underline">
          Komponentlar
        </a>{" "}
        va{" "}
        <a href="/api-reference" className="text-blue-600 underline">
          API Ma’lumotnoma
        </a>{" "}
        bo‘limlarimizni ko‘rib chiqing.
      </p>
    </main>
  );
}
