export default function Link({children, url} : {children: string ,url: string}) {
  return(
    <li>
      <a className="hover:text-primary-text-green hover:border-b-4 border-primary-text-green" href={ url }>{ children }</a>
    </li>
  )
}