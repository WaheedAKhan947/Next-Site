import Image from 'next/image';
import ProfilePic from "@/assets/home/waheedDp.jpg"

export default function Profile() {
  return (
    <section className="bg-[#f8f3ee] min-h-screen p-10">
      <div className="container mx-auto">
        {/* <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-900">Hello!</h1>
          <p className="text-2xl font-bold text-blue-900"> I`m Waheed Ahmad Khan, Full Stack Developer Based in Pakistan</p>
        </div> */}
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="mb-8 md:mb-0 md:mr-8">
            <Image
              src={ProfilePic} // Replace this with the actual image URL
              alt="CV Yoda"
              width={250}
              height={100}
              className="rounded-full"
            />
          </div>

          <div className="p-6 bg-white text-black shadow-md rounded-lg w-full md:w-1/2 text-left">
            <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
            <p><strong>Name:</strong> Waheed Ahmad Khan</p>
            <p><strong>Date Of Birth:</strong> 25 December, 2000</p>
            <p><strong>Email:</strong> wakkhan947@gmail.com</p>
            <p><strong>Phone:</strong> +92 330 3637855</p>
            <p><strong>Address:</strong> Swabi, KPK, Pakistan</p>
            <p><strong>Website:</strong> devWaheed.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
