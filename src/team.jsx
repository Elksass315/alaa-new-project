const people = [
  {
    name: "A'laa ELksass",
    role: 'Co-Founder / CEO',
    imageUrl:
      "/A'laa ELksass.jpeg",
  },
  {
    name: 'Rozane Ebrahim',
    role: 'Co-Founder / CEO',
    imageUrl:
      'Rozane Ebrahim.jpeg',  
  },
  {
    name: 'Nadia Elsaied',
    role: 'Co-Founder / CEO',
    imageUrl:
      '/Nadia Elsaied.jpeg',
  },
  {
    name: 'Shahnda Hassan',
    role: 'Co-Founder / CEO',
    imageUrl:
      '/Shahnda Hassan.jpeg',
  },
]

export default function Team() {
  return (
    <div className=" py-24 sm:py-32 border-4 border-blue-900 rounded-lg">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-white sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg/8 text-white">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl} className="size-16 rounded-full" />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-white">{person.name}</h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
