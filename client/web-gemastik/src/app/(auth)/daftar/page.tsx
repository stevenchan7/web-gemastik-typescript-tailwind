import SignupForm from "@/app/components/Signup/SignupForm"

export default function RegisterPage() {
  return(
    <div className="flex flex-col lg:flex-row justify-center">
      <div className="basis-1/2">
        <p className="text-5xl">
          It’s Our <span className="text-primary-text-green">Responsibility</span> to Keep Earth Clean and Healthy
        </p>
      </div>

      <div className="flex flex-col p-8 h-[625px] w-[500px] bg-[#FAEADE] border-4 border-[#D6925C] rounded-[32px]">
        <div className="text-primary-text-black mb-8">
          <h2 className="text-4xl font-bold mb-12">Ayo Menjadi <span className="text-primary-text-green">Relawan</span></h2>
          <p className="text-lg font-bold text-primary-text-black/60">Bergabung bersama kami sebagai relawan bumi. Masukkan identitas sesuai formulir di bawah dan jadilah bagian dari kami!</p>
        </div>
        <div>
          <SignupForm />
        </div>
      </div>
    </div>
  )
}