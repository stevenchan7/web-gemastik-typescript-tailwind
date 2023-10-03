import ActivityCard from "./ActivityCard"

export default function RecommendationSection() {
  return(
    <div className="container mx-auto px-4 xl:px-8 my-24">
      <div className="text-center px-8 mb-4">
        <h3 className="text-4xl font-black text-primary-text-green mb-4">Aktivitas Untuk Kamu</h3>
        <p>Berikut beberapa saran kegiatan yang dapat kamu lakukan</p>
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly items-center gap-y-4 mb-4">
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
      <div className="px-20 text-end">
        <a className="text-primary-text-green font-bold" href="/altivitas">Aktivitas lainnya</a>
      </div>
    </div>
  )
}