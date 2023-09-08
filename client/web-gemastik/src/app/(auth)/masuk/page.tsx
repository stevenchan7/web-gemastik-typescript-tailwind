import SigninForm from "@/app/components/Auth/SigninForm"

export default function LoginPage() {
  return(
    <div className="container mx-auto my-24 px-8">
      <div className="flex flex-col mx-auto p-8 min-h-[450px] max-w-[500px] bg-[#FAEADE] border-4 border-[#D6925C] rounded-[32px] shadow-[7px_7px_7px_0_rgba(0,0,0,0.3)]">
        <div className="mb-8">
          <h2 className="text-4xl text-center font-bold mb-12"><span className="text-primary-text-green">Welcome</span> Back!</h2>
          <p className="text-lg font-bold text-primary-text-black/60">Masuk ke akunmu dengan memasukkan username dan passwordmu</p>
        </div>
        <div>
          <SigninForm />
        </div>
      </div>
    </div>
  )
}