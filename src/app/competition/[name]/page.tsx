import BackgroundWrapper from "@/components/BackgroundWrapper"
import CountdownTimer from "@/components/CountdownTimer"
import FadeInSection from "@/components/FadeInSection"
import Navbar from "@/components/Navbar"
import { contests } from "@/data/contests"
import Link from "next/link"
import { notFound } from "next/navigation"

interface Props {
  params: {
    name: string
  }
}

function TrophyIcon() {
  return (
    <svg className="relative w-10 md:w-20 bg-white" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="75.5" cy="75.5" r="71.5" stroke="#FF7400" strokeWidth="8" />
      <path d="M90.0734 34.3943C95.2557 34.3943 99.5231 38.4326 100.079 43.6241L105.751 43.6221C109.859 43.6221 113.228 46.8846 113.554 51.0342L113.58 51.6964V65.538C113.58 73.5339 107.512 80.0681 99.8649 80.5096L98.924 80.5364C95.9362 90.1804 87.746 97.4269 77.7567 98.7659L77.7541 105.91H85.5993C93.3529 105.91 99.6891 112.168 100.117 120.054L100.14 120.905V123.212C100.14 124.964 98.8775 126.411 97.24 126.641L96.7845 126.672H52.0302C50.3314 126.672 48.9275 125.37 48.7053 123.681L48.6746 123.212V120.905C48.6746 112.909 54.7435 106.375 62.3903 105.933L63.2154 105.91H71.0429L71.0443 98.764C61.0615 97.4205 52.8772 90.1762 49.8906 80.5364L49.7732 80.5332C41.7426 80.5332 35.2324 73.8195 35.2324 65.538V51.6964C35.2324 47.2371 38.7379 43.6221 43.0621 43.6221L48.7358 43.6241C49.2914 38.4326 53.559 34.3943 58.7413 34.3943H90.0734ZM85.5993 112.83H63.2154C59.503 112.83 56.394 115.495 55.5886 119.071L55.465 119.751H93.3498C92.8388 116.068 89.9182 113.187 86.2879 112.861L85.5993 112.83ZM90.0734 41.3151H58.7413C56.8881 41.3151 55.3857 42.8644 55.3857 44.7756V72.452C55.3857 83.2854 63.902 92.0679 74.4075 92.0679C84.9126 92.0679 93.429 83.2854 93.429 72.452V44.7756C93.429 42.8644 91.9266 41.3151 90.0734 41.3151ZM105.751 50.5429H100.14V73.5334C103.719 73.0139 106.522 69.9989 106.839 66.2493L106.869 65.538V51.6964C106.869 51.1503 106.501 50.6929 106.007 50.5734L105.751 50.5429ZM48.6746 50.5429H43.0621C42.4443 50.5429 41.9435 51.0594 41.9435 51.6964V65.538C41.9435 69.6129 44.8706 72.9826 48.6746 73.5334V50.5429Z" fill="#FF7400" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg className="relative w-10 md:w-20 bg-white" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_80_31)">
        <path d="M98.5471 41.9442C105.741 41.9442 111.573 47.5728 111.573 54.5159V99.0003C111.573 105.943 105.741 111.572 98.5471 111.572H52.4548C45.2607 111.572 39.4287 105.943 39.4287 99.0003V54.5159C39.4287 47.5728 45.2607 41.9442 52.4548 41.9442H98.5471ZM105.561 63.2194H45.4408V99.0003C45.4408 102.739 48.581 105.77 52.4548 105.77H98.5471C102.421 105.77 105.561 102.739 105.561 99.0003V63.2194ZM58.4668 86.4286C61.2338 86.4286 63.4769 88.5933 63.4769 91.2639C63.4769 93.9345 61.2338 96.0992 58.4668 96.0992C55.6999 96.0992 53.4568 93.9345 53.4568 91.2639C53.4568 88.5933 55.6999 86.4286 58.4668 86.4286ZM75.501 86.4286C78.2681 86.4286 80.511 88.5933 80.511 91.2639C80.511 93.9345 78.2681 96.0992 75.501 96.0992C72.7338 96.0992 70.4909 93.9345 70.4909 91.2639C70.4909 88.5933 72.7338 86.4286 75.501 86.4286ZM58.4668 70.9558C61.2338 70.9558 63.4769 73.1205 63.4769 75.7911C63.4769 78.4617 61.2338 80.6263 58.4668 80.6263C55.6999 80.6263 53.4568 78.4617 53.4568 75.7911C53.4568 73.1205 55.6999 70.9558 58.4668 70.9558ZM75.501 70.9558C78.2681 70.9558 80.511 73.1205 80.511 75.7911C80.511 78.4617 78.2681 80.6263 75.501 80.6263C72.7338 80.6263 70.4909 78.4617 70.4909 75.7911C70.4909 73.1205 72.7338 70.9558 75.501 70.9558ZM92.5351 70.9558C95.3022 70.9558 97.5451 73.1205 97.5451 75.7911C97.5451 78.4617 95.3022 80.6263 92.5351 80.6263C89.7679 80.6263 87.525 78.4617 87.525 75.7911C87.525 73.1205 89.7679 70.9558 92.5351 70.9558ZM98.5471 47.7466H52.4548C48.581 47.7466 45.4408 50.7773 45.4408 54.5159V57.4171H105.561V54.5159C105.561 50.7773 102.421 47.7466 98.5471 47.7466Z" fill="#FF7400" />
      </g>
      <circle cx="75.5" cy="75.5" r="71.5" stroke="#FF7400" strokeWidth="8" />
      <defs>
        <clipPath id="clip0_80_31">
          <rect width="99.8278" height="79.6944" fill="white" transform="translate(26.8455 31.8776)" />
        </clipPath>
      </defs>
    </svg>
  )
}

function MedalIcon() {
  return (
    <svg className="relative w-10 md:w-20 bg-white" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M76.4926 48.7829L80.4481 56.8128L89.3069 58.0929C90.214 58.224 90.5768 59.3389 89.9202 59.9786L83.5128 66.222L85.0255 75.044C85.1802 75.9472 84.2319 76.6359 83.4209 76.2086L75.5014 72.0373L67.5814 76.2086C66.7703 76.6359 65.8214 75.9468 65.9771 75.0431L67.4973 66.222L61.0826 59.9791C60.4254 59.3396 60.7878 58.224 61.6954 58.0929L70.5543 56.8128L74.5097 48.7829C74.915 47.9603 76.0878 47.9603 76.4926 48.7829ZM105.841 63.3358C105.841 46.5796 92.2572 32.996 75.501 32.996C58.7447 32.996 45.1611 46.5796 45.1611 63.3358C45.1611 71.6013 48.4663 79.0948 53.8269 84.5663L53.8331 116.431L53.8632 116.884C54.1796 119.236 56.9286 120.516 58.9556 119.089L75.4971 107.44L92.047 119.09L92.4349 119.326C94.5396 120.421 97.1688 118.91 97.1688 116.431L97.1749 84.5663C102.535 79.0948 105.841 71.6013 105.841 63.3358ZM90.6683 89.6183L90.6674 110.168L77.3673 100.806L76.9304 100.547C75.8763 100.028 74.6068 100.115 73.6246 100.807L60.3345 110.166L60.3336 89.6183C64.7956 92.1985 69.9756 93.6756 75.501 93.6756C81.0263 93.6756 86.2061 92.1985 90.6683 89.6183ZM51.6625 63.3358C51.6625 50.1702 62.3353 39.4974 75.501 39.4974C88.6667 39.4974 99.3394 50.1702 99.3394 63.3358C99.3394 76.5016 88.6667 87.1743 75.501 87.1743C62.3353 87.1743 51.6625 76.5016 51.6625 63.3358Z" fill="#FF7400" />
      <circle cx="75.5" cy="75.5" r="71.5" stroke="#FF7400" strokeWidth="8" />
    </svg>
  )
}

export default async function Competition({ params }: Props) {
  const { name } = await params
  const competitionName = decodeURIComponent(name)
  const competitionData = contests.find(contest => contest.slug === competitionName)

  if (!competitionData) notFound()

  const formatDate = (dateObject: Date | undefined): string => {
    if (!dateObject) return "";
    const date = dateObject.getDate()
    const month = dateObject.toLocaleString("en-US", { month: "long" })
    const year = dateObject.getFullYear()

    const suffix =
      date % 10 === 1 && date !== 11 ? "st" :
        date % 10 === 2 && date !== 12 ? "nd" :
          date % 10 === 3 && date !== 13 ? "rd" :
            "th"

    return `${date}${suffix} of ${month} ${year}`
  }

  return (
    <BackgroundWrapper>

      <main className="min-h-screen pt-16 bg-white text-black">
        <Navbar />
        <section className="">
          <h1 className="text-4xl font-bold text-center m-8 text-black">
            {competitionData?.name}
          </h1>
          <div className="my-30">
            <CountdownTimer targetDate={competitionData?.registration_deadline!} />
          </div>
        </section>

        {/* Competition details */}
        <div className="flex justify-center">
          <section className="relative w-fit my-10 mx-4">
            {/* vertical line */}
            <div className="absolute left-5 md:left-10 top-0 bottom-0 w-1 bg-[#FF7400]" />

            {[
              [<TrophyIcon />, "Competition details", competitionData?.competition_details],
              [<CalendarIcon />, "Competition format", competitionData?.competition_format],
              [<MedalIcon />, "Awards & selections", competitionData?.awards],
            ].map((detail, index) => (
              <div key={index} className="relative flex items-start mb-10">
                <div className="w-10 md:w-20 flex-shrink-0">{detail[0]}</div>
                <div className="hidden md:flex flex">
                  <div className="w-50 h-1 bg-[#FF7400] mt-10 inline" />
                  <div className="w-3 h-3 bg-[#FF7400] relative rounded-full mt-9" />
                </div>
                <div className="ml-6 md:ml-8 max-w-md">
                  <h3 className="font-bold text-lg">{detail[1]}</h3>
                  <p className="text-sm">{detail[2]}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
        {/* Awards */}
        <div className="flex mx-5 md:mx-20 my-10">
          <section className="inline-block bg-gradient-to-r from-[#FF7400] to-[#0048FF] p-[2px] rounded-[28px] w-full">
            <div className="grid sm:grid md:flex lg:flex justify-around px-10 py-4 bg-white rounded-[26px] text-xl">
              <div className="grid justify-items-center w-full md:w-auto text-center">
                <h3 className="text-[#FF7400]">Winner</h3>
                <span>{competitionData?.prize[0] || "N/A"}</span>
              </div>
              <div className="grid justify-items-center mx-0 md:mx-15 w-full md:w-auto text-center">
                <h3 className="text-[#FF7400]">1st Runner Up</h3>
                {competitionData?.prize[1] || "N/A"}
              </div>
              <div className="grid justify-items-center w-full md:w-auto text-center">
                <h3 className="text-[#FF7400]">2nd Runner Up</h3>
                {competitionData?.prize[2] || "N/A"}
              </div>
            </div>
          </section>
        </div>
        <section>
          <img
            src={competitionData?.banner_image}
            alt="banner"
            className="mx-auto my-20 rounded-xl w-80 h-100"
          />
        </section>
        <section className="grid justify-items-center my-10 bg-gradient-to-r from-[#E0E9F9] to-[#FCE9D9] p-8 mx-5 md:mx-20 rounded-xl">
          <span className="text-[#FF7400] font-bold text-xl">
            Register before
          </span>
          <span className="font-semibold text-xl">
            {formatDate(competitionData?.registration_deadline)}
          </span>
        </section>
        {/* Footer */}
        <FadeInSection delay={500}>
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">SLIIT Codefest 2025</h3>
                  <p className="text-gray-400">
                    The largest inter-university hackathon in Sri Lanka
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/competition-details" className="text-gray-400 hover:text-white">
                        Competition Details
                      </Link>
                    </li>
                    <li>
                      <Link href="/registration" className="text-gray-400 hover:text-white">
                        Registration
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-gray-400 hover:text-white">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Contact</h3>
                  <p className="text-gray-400">
                    Email: info@codefest.lk<br />
                    Phone: +94 XX XXX XXXX
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                <p>&copy; 2024 SLIIT Codefest. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </FadeInSection>
      </main>
    </BackgroundWrapper>
  )
}