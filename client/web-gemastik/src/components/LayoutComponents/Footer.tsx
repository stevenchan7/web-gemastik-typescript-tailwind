import Image from "next/image"

export default function Footer() {
  return(
    <div className=" container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 items-center">
      {/* Text div  */}
      <div className="col-span-4 lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 text-center lg:text-start">
        <div className="pe-4 lg:pe-16">
          <h3 className="font-bold">Kebijakan Privasi</h3>
          <p className="mb-2 lg:mb-0">Pada Website ini kami dari pihak developer tidak meminta dan menyimpan data pribadi dan privasi dari pengguna. Semua data akan dipastikan aman terlebih dahulu oleh kami.</p>
        </div>
        <div className="pe-4 lg:pe-16">
          <h3 className="font-bold">Ketentuan Penggunaan</h3>
          <p className="mb-2 lg:mb-0">Tujuan penggunaan website ini adalah sebagai wadah bagi para komunitas dalam membuat kegiatan mencintai lingkungan dan ditujukan kepada relawan yang menggunakan website ini</p>
        </div>
        <div className="pe-4 lg:pe-16">
          <h3 className="font-bold">Hubungi Kami</h3>
          <p className="mb-2 lg:mb-0">
            Putu Rian (08912312312)
            puturianadmin@gmail.com
            discord - puturian#9999
            Jl. Kamboja Raya No. 999, Sesetan, Denpasar Selatan, Kota Denpasar, Bali
          </p>
        </div>
      </div>
      {/* Logo  */}
      <div className="col-span-4 lg:col-span-1 mt-4 lg:mt-0">
        <Image className="mx-auto" src='/Layout/logo.png' width={200} height={190} alt='Footer logo' />
      </div>
      {/* All right reserved  */}
      <div className="col-span-4 text-center border-t-2 border-[#000000] mt-8 pt-4">
        Copyright © 2023 Peduli Bumi All Rights Reserved. Website Created by DigendongKating Team 
      </div>
    </div>
  )
}