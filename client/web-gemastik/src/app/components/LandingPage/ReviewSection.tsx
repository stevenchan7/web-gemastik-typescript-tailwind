import ReviewCard from "./ReviewCard"

export default function ReviewSection() {
  return(
    <div className="bg-[#FAEADE] my-24">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="text-center px-8 mb-4">
          <h3 className="text-4xl font-black mb-4">Kata-kata Relawan</h3>
          <p>Kata relawan tentang kami</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly items-center gap-y-4">
          <ReviewCard />
        </div>
      </div>
    </div>
  )
}