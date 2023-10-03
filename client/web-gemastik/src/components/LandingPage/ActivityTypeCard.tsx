'use client'

import Image from "next/image"
import { useState } from "react"

function CardText({children}: {children: string}) {
  const [isShowMore, setIsShowMore] = useState(false)
  let text = 'Kegiatan bersih-bersih pantai, mengumpulkan sampah-sampah yang mengotori pantai. Kegiatan ini bertujuan untuk membersihkan ekosistem pantai yang tercemari sampah hasil kegiatan atau aktivitas manusia di pantai'
  return(
    <>
      <p className="text-sm mb-2">{ isShowMore ? children : children.slice(0, 120) + '...' }</p>
      <span className="text-sm font-bold cursor-pointer" onClick={() => setIsShowMore(!isShowMore)}>{ isShowMore ? 'Show less' : 'Show more' }</span>
    </>
  )
}

export default function ActivityTypeCard({title, desc}: {title: string, desc: string}) {
  return(
    <div className="w-[300px] min-h-[350px] flex flex-wrap m-auto bg-primary-bg border border-[#D6925C] rounded-xl">
      <div className="m-4 rounded-xl overflow-hidden">
        <Image src='/LandingPage/bersih-pantai.png' width={270} height={200} alt='Bersih pantai' />
      </div>
      <div className="mx-4 mb-4 text-primary-text-black">
        <h6 className="text-lg font-bold mb-2">
          {title}
        </h6>
        <CardText>{desc}</CardText>
      </div>
    </div>
  )
}