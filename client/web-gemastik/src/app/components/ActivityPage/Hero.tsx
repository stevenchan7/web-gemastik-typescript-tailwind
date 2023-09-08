import Image from "next/image"

export default function Hero() {
  return(
    <div className="container mx-auto mb-24 relative">
      <Image className="mx-auto" src='/ActivityPage/hero-img.png' width={1000} height={460} alt="Tanam pohon" />
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2">
        <h1 className="font-bold text-4xl text-[#ffffff]">DO IT NOW <br />FOR A BETTER <br />FUTURE LIFE</h1>
      </div>
    </div>
  )
}