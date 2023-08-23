import Image from "next/image"

export default function ActivityCard() {
  return(
    <div className="w-[300px] h-[275px] border border-[#D6925C] rounded-xl bg-[#FAEADE] flex flex-wrap items-start overflow-hidden">
      <div className="h-[155px]">
        <img className="object-cover h-full" src='/LandingPage/aktivitas-bersih-pantai.png' alt='gambar aktivitas' />
      </div>
      <div className="flex p-2">
        <div className="basis-1/5 text-sm text-center p-2 flex flex-col justify-between">
            <p className="font-bold">11</p> 
            <p className="font-bold text-primary-text-green">Juni</p> 
            <p className="text-xs font">2023</p>
        </div>
        <div className="basis-3/5 flex flex-col justify-between text-sm p-2 font-bold">
          <p>
            Peduli Pantai
          </p>
          <p className="text-primary-text-green">
            Kuta Beach Cleanup
          </p>
          <p className="text-xs font-normal">
            Pantai Kuta, Badung, Bali
          </p>
        </div>
        <div className="basis-1/5 flex flex-col justify-between items-center py-2">
          <div>
            <Image src="/Layout/default-user.png" width={30} height={30} alt="foto komunitas" />
          </div>
          <div className="text-[8px] text-center">
            <span className="font-bold text-primary-text-green">Pecinta Senja</span> Komunitas
          </div>
        </div>
      </div>
    </div>
  )
}