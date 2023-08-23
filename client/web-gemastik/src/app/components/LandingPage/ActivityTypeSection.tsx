import ActivityTypeSwiper from "./ActivityTypeSwiper"
import { getActivityTypeData } from "@/utils/landing.utils"

export default async function ActivityTypeSection() {
  const data = await getActivityTypeData()
  return(
    <div className="container mx-auto px-4 xl:px-8 my-24">
      <div className="text-center px-8 mb-4">
        <h3 className="text-4xl text-primary-text-green font-black mb-4">Beragam Jenis Aktivitas</h3>
        <p>Banyak cara dapat dilakukan untuk menjaga Bumi, maka dari itu kami menyediakan berbagai macam aktivitas menarik yang bisa kamu coba untuk membantu komunitas kami</p>
      </div>
      <div>
        <ActivityTypeSwiper activities={data} />
      </div>
    </div>
  )
}