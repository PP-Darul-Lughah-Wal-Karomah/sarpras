import ProtectedRoute from "@/components/ProtectedRoute";
import AppLayout from "@/templates/Admin/AppLayout";
import { NextPage } from "next";
import Image from "next/image";

// JENIS SARANA (DIBUATKAN KODE KHUSUS)
// NAMA DI SERTIFIKAT
// NO AKTA TANAH
// NO SK KEMENKUMHAM
// TANGGAL TERBIT PANJANG (M2)
// LEBAR (M2)
// LUAS (M2)
// LUAS LAHAN TERSEDIA  (M2)
// STATUS KEPEMILIKAN
// KETERANGAN
type TanahDanBangunan = {
  jenisSarana: string;
  namaSertifikat: string;
  noAktaTanah: string;
  noSkKemenkumham: string;
  tanggalTerbit: string;
  panjang: string;
  lebar: string;
  luas: string;
  luasLahanTersedia: string;
  statusKepemilikan: string;
  keterangan: string;
};

const Index: NextPage = () => {
  const Theads = [
    "Jenis Sarana",
    "Nama di Sertifikat",
    "No Akta Tanah",
    "No SK Kemenkumham",
    "Tanggal Terbit",
    "Panjang (M2)",
    "Lebar (M2)",
    "Luas (M2)",
    "Luas Lahan Tersedia (M2)",
    "Status Kepemilikan",
    "Keterangan",
  ];
  const Tdatas: TanahDanBangunan[] = [
    {
      jenisSarana: "Kantor",
      namaSertifikat: "PT. ABC",
      noAktaTanah: "123456789",
      noSkKemenkumham: "123456789",
      tanggalTerbit: "12/12/2021",
      panjang: "12",
      lebar: "12",
      luas: "144",
      luasLahanTersedia: "144",
      statusKepemilikan: "Milik Sendiri",
      keterangan: "Keterangan",
    },
    {
      jenisSarana: "Rumah",
      namaSertifikat: "PT. XYZ",
      noAktaTanah: "987654321",
      noSkKemenkumham: "987654321",
      tanggalTerbit: "01/01/2022",
      panjang: "10",
      lebar: "8",
      luas: "80",
      luasLahanTersedia: "80",
      statusKepemilikan: "Milik Sendiri",
      keterangan: "Keterangan",
    },
    {
      jenisSarana: "Gedung",
      namaSertifikat: "PT. EFG",
      noAktaTanah: "456789123",
      noSkKemenkumham: "456789123",
      tanggalTerbit: "03/05/2023",
      panjang: "15",
      lebar: "20",
      luas: "300",
      luasLahanTersedia: "300",
      statusKepemilikan: "Milik Sendiri",
      keterangan: "Keterangan",
    },
    {
      jenisSarana: "Apartemen",
      namaSertifikat: "PT. HIJ",
      noAktaTanah: "321654987",
      noSkKemenkumham: "321654987",
      tanggalTerbit: "09/20/2022",
      panjang: "8",
      lebar: "8",
      luas: "64",
      luasLahanTersedia: "64",
      statusKepemilikan: "Milik Sendiri",
      keterangan: "Keterangan",
    },
    {
      jenisSarana: "Toko",
      namaSertifikat: "PT. KLM",
      noAktaTanah: "789456123",
      noSkKemenkumham: "789456123",
      tanggalTerbit: "06/18/2022",
      panjang: "6",
      lebar: "10",
      luas: "60",
      luasLahanTersedia: "60",
      statusKepemilikan: "Milik Sendiri",
      keterangan: "Keterangan",
    },
    {
      jenisSarana: "Pabrik",
      namaSertifikat: "PT. NOP",
      noAktaTanah: "654321987",
      noSkKemenkumham: "654321987",
      tanggalTerbit: "11/30/2022",
      panjang: "20",
      lebar: "30",
      luas: "600",
      luasLahanTersedia: "600",
      statusKepemilikan: "Milik Sendiri",
      keterangan: "Keterangan",
    },
    {
      jenisSarana: "Ruko",
      namaSertifikat: "PT. QRS",
      noAktaTanah: "951357824",
      noSkKemenkumham: "951357824",
      tanggalTerbit: "07/15/2023",
      panjang: "12",
      lebar: "6",
      luas: "72",
      luasLahanTersedia: "72",
      statusKepemilikan: "Milik Sendiri",
      keterangan: "Keterangan",
    },
    {
      jenisSarana: "Gudang",
      namaSertifikat: "PT. TUV",
      noAktaTanah: "753951852",
      noSkKemenkumham: "753951852",
      tanggalTerbit: "04/02/2023",
      panjang: "15",
      lebar: "15",
      luas: "225",
      luasLahanTersedia: "225",
      statusKepemilikan: "Milik Sendiri",
      keterangan: "Keterangan",
    },
    {
      jenisSarana: "Rumah Sakit",
      namaSertifikat: "PT. WXY",
      noAktaTanah: "852963741",
      noSkKemenkumham: "852963741",
      tanggalTerbit: "08/25/2022",
      panjang: "25",
      lebar: "30",
      luas: "750",
      luasLahanTersedia: "750",
      statusKepemilikan: "Milik Sendiri",
      keterangan: "Keterangan",
    },
    {
      jenisSarana: "Hotel",
      namaSertifikat: "PT. ZZZ",
      noAktaTanah: "369258147",
      noSkKemenkumham: "369258147",
      tanggalTerbit: "02/14/2023",
      panjang: "40",
      lebar: "50",
      luas: "2000",
      luasLahanTersedia: "2000",
      statusKepemilikan: "Milik Sendiri",
      keterangan: "Keterangan",
    },
    // Add more entries with dummy data...
    {
      jenisSarana: "Gedung Parkir",
      namaSertifikat: "PT. AAA",
      noAktaTanah: "111222333",
      noSkKemenkumham: "111222333",
      tanggalTerbit: "09/01/2022",
      panjang: "10",
      lebar: "15",
      luas: "150",
      luasLahanTersedia: "150",
      statusKepemilikan: "Milik Sendiri",
      keterangan: "Keterangan",
    },
    {
      jenisSarana: "Pertokoan",
      namaSertifikat: "PT. BBB",
      noAktaTanah: "222333444",
      noSkKemenkumham: "222333444",
      tanggalTerbit: "07/01/2022",
      panjang: "15",
      lebar: "20",
      luas: "300",
      luasLahanTersedia: "300",
      statusKepemilikan: "Milik Sendiri",
      keterangan: "Keterangan",
    },
    {
      jenisSarana: "Pergudangan",
      namaSertifikat: "PT. CCC",
      noAktaTanah: "333444555",
      noSkKemenkumham: "333444555",
      tanggalTerbit: "11/01/2022",
      panjang: "20",
      lebar: "25",
      luas: "500",
      luasLahanTersedia: "500",
      statusKepemilikan: "Milik Sendiri",
      keterangan: "Keterangan",
    },
    {
      jenisSarana: "Apartemen",
      namaSertifikat: "PT. DDD",
      noAktaTanah: "444555666",
      noSkKemenkumham: "444555666",
      tanggalTerbit: "01/01/2023",
      panjang: "8",
      lebar: "12",
      luas: "96",
      luasLahanTersedia: "96",
      statusKepemilikan: "Milik Sendiri",
      keterangan: "Keterangan",
    },
    {
      jenisSarana: "Rumah",
      namaSertifikat: "PT. EEE",
      noAktaTanah: "555666777",
      noSkKemenkumham: "555666777",
      tanggalTerbit: "04/01/2023",
      panjang: "12",
      lebar: "10",
      luas: "120",
      luasLahanTersedia: "120",
      statusKepemilikan: "Milik Sendiri",
      keterangan: "Keterangan",
    },
    {
      jenisSarana: "Kantor",
      namaSertifikat: "PT. FFF",
      noAktaTanah: "666777888",
      noSkKemenkumham: "666777888",
      tanggalTerbit: "03/01/2023",
      panjang: "15",
      lebar: "20",
      luas: "300",
      luasLahanTersedia: "300",
      statusKepemilikan: "Milik Sendiri",
      keterangan: "Keterangan",
    },
    {
      jenisSarana: "Gedung",
      namaSertifikat: "PT. GGG",
      noAktaTanah: "777888999",
      noSkKemenkumham: "777888999",
      tanggalTerbit: "02/01/2023",
      panjang: "25",
      lebar: "30",
      luas: "750",
      luasLahanTersedia: "750",
      statusKepemilikan: "Milik Sendiri",
      keterangan: "Keterangan",
    },
    {
      jenisSarana: "Toko",
      namaSertifikat: "PT. HHH",
      noAktaTanah: "888999000",
      noSkKemenkumham: "888999000",
      tanggalTerbit: "06/01/2023",
      panjang: "8",
      lebar: "10",
      luas: "80",
      luasLahanTersedia: "80",
      statusKepemilikan: "Milik Sendiri",
      keterangan: "Keterangan",
    },
    {
      jenisSarana: "Pabrik",
      namaSertifikat: "PT. III",
      noAktaTanah: "999000111",
      noSkKemenkumham: "999000111",
      tanggalTerbit: "05/01/2023",
      panjang: "20",
      lebar: "25",
      luas: "500",
      luasLahanTersedia: "500",
      statusKepemilikan: "Milik Sendiri",
      keterangan: "Keterangan",
    },
  ];

  // The Tdatas array now contains 20 dummy entries

  return (
    <AppLayout>
      <h2 className="text-lg font-medium text-gray-800 dark:text-white">
        Tanah & Bangunan
      </h2>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
        Daftar tanah dan bangunan yang dimiliki oleh perusahaan
      </p>
      <div className="mt-6 flex flex-col">
        <div className="-my-2 overflow-x-auto">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    {Theads.map((thead) => (
                      <th
                        key={thead}
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500 rtl:text-right dark:text-gray-400"
                      >
                        {thead}
                      </th>
                    ))}
                    <th scope="col" className="relative px-4 py-3.5">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
                  {/* <tr>
                    <td className="whitespace-nowrap px-4 py-4 text-sm font-medium">
                      <div>
                        <h2 className="font-medium text-gray-800 dark:text-white ">
                          Catalog
                        </h2>
                        <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                          catalogapp.io
                        </p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-12 py-4 text-sm font-medium">
                      <div className="inline gap-x-2 rounded-full bg-emerald-100/60 px-3 py-1 text-sm font-normal text-emerald-500 dark:bg-gray-800">
                        Customer
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm">
                      <div>
                        <h4 className="text-gray-700 dark:text-gray-200">
                          Content curating app
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400">
                          Brings all your news into one place
                        </p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm">
                      <div className="flex items-center">
                        <Image
                          className="-mx-1 h-6 w-6 shrink-0 rounded-full border-2 border-white object-cover dark:border-gray-700"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                          alt=""
                          width={24}
                          height={24}
                        />
                        <Image
                          className="-mx-1 h-6 w-6 shrink-0 rounded-full border-2 border-white object-cover dark:border-gray-700"
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                          alt=""
                          width={24}
                          height={24}
                        />
                        <Image
                          className="-mx-1 h-6 w-6 shrink-0 rounded-full border-2 border-white object-cover dark:border-gray-700"
                          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80"
                          alt=""
                          width={24}
                          height={24}
                        />
                        <Image
                          className="-mx-1 h-6 w-6 shrink-0 rounded-full border-2 border-white object-cover dark:border-gray-700"
                          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                          alt=""
                          width={24}
                          height={24}
                        />
                        <p className="-mx-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-xs text-blue-600">
                          +4
                        </p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm">
                      <div className="h-1.5 w-48 overflow-hidden rounded-full bg-blue-200">
                        <div className="h-1.5 w-2/3 bg-blue-500" />
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm">
                      <button className="rounded-lg px-1 py-1 text-gray-500 transition-colors duration-200 hover:bg-gray-100 dark:text-gray-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr> */}
                  {/* type TanahDanBangunan = {
  jenisSarana: string;
  namaSertifikat: string;
  noAktaTanah: string;
  noSkKemenkumham: string;
  tanggalTerbit: string;
  panjang: string;
  lebar: string;
  luas: string;
  luasLahanTersedia: string;
  statusKepemilikan: string;
  keterangan: string;
}; */}
                  {Tdatas.map((data, i: number) => (
                    <tr
                      key={i}
                      className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-900"
                    >
                      <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                        {data.jenisSarana}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {data.namaSertifikat}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {data.noAktaTanah}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {data.noSkKemenkumham}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {data.tanggalTerbit}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {data.panjang}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {data.lebar}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {data.luas}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {data.luasLahanTersedia}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {data.statusKepemilikan}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {data.keterangan}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm">
                        <button className="rounded-lg px-1 py-1 text-gray-500 transition-colors duration-200 hover:bg-gray-100 dark:text-gray-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 rtl:-scale-x-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          <span>previous</span>
        </a>
        <div className="hidden items-center gap-x-3 md:flex">
          <a
            href="#"
            className="rounded-md bg-blue-100/60 px-2 py-1 text-sm text-blue-500 dark:bg-gray-800"
          >
            1
          </a>
          <a
            href="#"
            className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            2
          </a>
          <a
            href="#"
            className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            3
          </a>
          <a
            href="#"
            className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            ...
          </a>
          <a
            href="#"
            className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            12
          </a>
          <a
            href="#"
            className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            13
          </a>
          <a
            href="#"
            className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            14
          </a>
        </div>
        <a
          href="#"
          className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
        >
          <span>Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 rtl:-scale-x-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
      </div>
    </AppLayout>
  );
};
export default ProtectedRoute(Index);
