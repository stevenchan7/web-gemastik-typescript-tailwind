import Link from "./Link"

export default function LoginRegisterButton() {
  return(
    <ul className="flex lg:ms-auto items-center order-first lg:order-last gap-6">
      <Link url="/masuk">Masuk</Link>
      <li className="bg-primary-text-green hover:bg-primary-text-green/75 px-4 py-2 rounded-lg">
        <a className="text-[#FFF6EC]" href="/daftar">Daftar</a>
      </li>
    </ul>
  )
}