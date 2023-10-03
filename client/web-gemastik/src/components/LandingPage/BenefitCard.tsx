import Image from "next/image"

Image

export default function BenefitCard({ benefit }: {benefit: {id: number, title: string, desc:string}}) {
  return(
    <div className="basis-2/3 lg:basis-auto flex flex-col p-4">
      <div className="mb-2">
        <Image className="m-auto" src='/LandingPage/benefit1.png' width={80} height={80} alt='benefit logo' />
      </div>
      <div className="text-center">
        <h6 className="font-bold mb-2">{ benefit.title }</h6>
        <p>{ benefit.desc }</p>
      </div>
    </div>
  )
}