import Image from "next/image"

export default function Hero() {
  return(
    <div className="container mx-auto px-4 xl:px-8 my-24 flex flex-col lg:flex-row">
      <div className="m-auto px-8 lg:basis-1/2 text-center lg:text-start">
        <h3 className="text-primary-text-green text-[42px]/[48px] font-black mb-4"><span className="text-primary-text-black">Jaga Bumi</span><br />Lindungi Masa Depan Bersama</h3>
        <p className="text-primary-text-black/75 font-bold text-center lg:text-justify mb-4">Kami adalah ekosistem yang terdiri dari berbagai komunitas dan relawan di berbagai tempat. Ayo gabung dan bantu kami menjalankan misi untuk menjaga bumi demi masa depan bumi yang lebih baik</p>
        <a className="bg-primary-text-green hover:bg-primary-text-green/75 px-4 py-2 rounded-3xl text-[#FFF6EC] font-bold" href="/aktivitas">Ayo Mulai</a>
      </div>
      <div className="lg:basis-1/2 hidden lg:block">
        <div className="relative">
          <Image className="m-auto" src='/Layout/hero-image-bg.png' width={500} height={350} alt="hero image" />
          <Image className="absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2" src='/Layout/hero-image.png' width={412} height={290} alt="hero image" />
        </div>
      </div>
    </div>
  )
}