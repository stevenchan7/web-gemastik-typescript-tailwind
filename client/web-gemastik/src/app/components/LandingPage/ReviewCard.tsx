import Image from "next/image"

export default function ReviewCard() {
  return(
    <div className="w-[325px] mt-20">
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image src='/Layout/default-user.png' width={80} height={80} alt="foto relawan" />
        </div>
        <div className="bg-primary-bg">
          <h3>Steven Belva</h3>
          <p>Mahasiswa</p>
          <img src="/LandingPage/quote.svg" alt="logo quote" />
          <p>Pengalaman pertama ku menjadi relawan di Peduli Bumi engga akan pernah terlupa. Kegiatannya seru dan asyik banget, dan aku bisa bertemu dengan teman-teman baru dari berbagai tempat</p>
        </div>
      </div>
    </div>
  )
}