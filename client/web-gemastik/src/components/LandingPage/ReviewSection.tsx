import ReviewCard from "./ReviewCard"
import { getReviewsData } from "@/utils/landing.utils"

export default async function ReviewSection() {
  const data = await getReviewsData();
  return(
    <div className="bg-[#FAEADE] my-24 py-24">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="text-center px-8 mb-4">
          <h3 className="text-4xl font-black mb-4">Kata-kata Relawan</h3>
          <p>Kata relawan tentang kami</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly items-center">
          {data.map((dat, index) => <ReviewCard key={index} review={dat} />)}   
        </div>
      </div>
    </div>
  )
}