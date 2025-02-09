import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Azamjonning UI kiti | Asosiy sahifa</title>
        <meta
          name="description"
          content="Azimjonning UI kiti yordamida tez va samarali dasturiy interfeyslarni yarating. Oddiy va qulay komponentlar to‘plami."
        />
        <meta name="author" content="Azimjon" />
      </Head>

      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">
          Azimjonning UI kiti
        </h2>
        <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-700 text-center">
          Azimjonning UI kiti foydalanuvchilarga interfeyslarni sodda va
          samarali yaratishga yordam beradi. Bu kit sizga tayyor komponentlar
          yordamida vaqtni tejash va rivojlanishni tezlashtirish imkonini
          beradi.
        </p>

        <ul className="list-disc mt-6 pl-6 text-gray-700 text-sm sm:text-base lg:text-lg">
          <li>
            <strong>Butonlar:</strong> Turli xil uslubdagi butonlarni o‘z ichiga
            oladi.
          </li>
          <li>
            <strong>Kartalar:</strong> Kontentni chiroyli va tartibli
            joylashtirish uchun kartalar.
          </li>
          <li>
            <strong>Kirish maydonlari:</strong> Foydalanuvchi malumotlarini
            kiritish uchun moslashtirilgan inputlar.
          </li>
        </ul>

        <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-700 text-center">
          Yana batafsil malumot olish uchun bizning hujjatlar bo‘limimizga
          tashrif buyuring.
        </p>
      </div>
    </>
  );
}
