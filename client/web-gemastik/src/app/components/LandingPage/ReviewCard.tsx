import Image from "next/image"

export default function ReviewCard({ review }: { review: {id: number, name: string, status: string, rev: string}}) {
  return(
    <div className="w-[300px] xl:w-[325px] h-[250px] mt-20 flex">
      <div className="relative flex h-full">
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden border-4 border-primary-bg">
          <Image src='/Layout/default-user.png' width={80} height={80} alt="foto relawan" />
        </div>
        <div className="bg-primary-bg rounded-xl p-4 pt-12 text-center">
          <h3 className="font-bold">{review.name}</h3>
          <p>{review.status}</p>
          <img className="m-auto" src="/LandingPage/quote.svg" alt="logo quote" />
          <p className="text-xs">{review.rev}</p>
        </div>
      </div>
    </div>
  )
}