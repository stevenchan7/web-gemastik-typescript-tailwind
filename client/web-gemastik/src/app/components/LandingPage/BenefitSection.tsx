import BenefitCard from "./BenefitCard"
import { getBenefitData } from "@/utils/landing.utils"

export default async function BenefitSection() {
  const data = await getBenefitData()
  return(
    <div className="container mx-auto px-4 xl:px-8 my-24">
      <div className="text-center px-8 mb-4">
        <h3 className="text-4xl font-black mb-4">Manfaat Menjadi Relawan</h3>
        <p>Dapatkan berbagai manfaat ketika kamu menjadi relawan, karena disini kamu bisa menambah ilmu dan pengalaman serta berbagi canda dan tawa</p>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap">
        {data.map((dat, index) => <BenefitCard key={index} benefit={dat}  />)}
      </div>
    </div>
  )
}