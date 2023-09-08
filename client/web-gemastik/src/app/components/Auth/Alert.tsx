export function Alert() {
  return(
    <div className="bg-[#77EA5A] rounded-md p-4 mb-4">
      <p className="font-bold">Pendaftaran berhasil! Silahkan <span><a className="hover:text-primary-bg hover:border-b-2 border-primary-bg" href="/masuk">Masuk</a></span></p> 
    </div>
  )
}

export function ErrorAlert(msg: string) {
  return(
    <div className="bg-[#CD3232] rounded-md p-4 mb-4">
      <p className="font-bold text-primary-bg">{ msg }</p> 
    </div>
  )
}