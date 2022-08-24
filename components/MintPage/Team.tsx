export default function Team() {
  const team = [
    {
      name: 'Ivan Maniche',
      role: 'Blockchain Solution Architect',
      description: 'Artist is a term applied to a person who engages in an activity deemed to be an art.',
      image: 'https://demos.creative-tim.com/soft-ui-design-system/assets/img/team-4.jpg'
    },
    {
      name: 'Maria Sephard',
      role: 'Blockchain UX designer',
      description: 'Artist is a term applied to a person who engages in an activity deemed to be an art.',
      image: 'https://demos.creative-tim.com/soft-ui-design-system/assets/img/ivana-square.jpg'
    },
    {
      name: 'Rachel Marque',
      role: 'Blockchain Project Manager',
      description: 'Artist is a term applied to a person who engages in an activity deemed to be an art.',
      image: 'https://demos.creative-tim.com/soft-ui-design-system/assets/img/kal-visuals-square.jpg'
    },
    {
      name: 'Jordi Alves',
      role: 'Web 3 Developer',
      description: 'Artist is a term applied to a person who engages in an activity deemed to be an art.',
      image: 'https://demos.creative-tim.com/soft-ui-design-system/assets/img/bruce-mars.jpg'
    }
  ]
  return (
    <section className="pb-20 pt-14 mb-32">
      <div className="container mx-auto mb-20 text-center">
        <p className="block text-base leading-relaxed text-amber-500 mb-2 font-bold">
          Team
        </p>
        <h2 className="block tracking-normal font-semibold leading-[1.3] text-blue-gray-900 mb-4">
          Core Team
        </h2>
        <p className="block antialiased text-lg font-normal leading-relaxed text-slate-700 mx-auto w-full px-4 md:w-10/12 lg:w-7/12 lg:px-8">
          Meet the people behind our project. Check out what they are specialized on.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-2">
        {team.map((data, i) => {
          return (
            <div className="grid justify-center text-center" key={i}>
              <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="flex-auto flex p-4">
                  <div className="flex flex-wrap -mx-3">
                    <div className="max-w-full px-3 mb-8 lg:mb-0 lg:mt-0 lg:w-4/12 lg:flex-none flex items-center justify-center">
                      <div className="rounded-xl overflow-hidden">
                        <div className="relative h-full">
                          <img
                            className="relative w-full"
                            src={data.image}
                            alt="rocket"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="max-w-full px-3 lg:w-1/2 lg:flex-none">
                      <div className="flex justify-center flex-col h-full text-start">
                        <h5 className="font-semibold mb-1">{data.name}</h5>
                        <p className="mb-3 text-amber-600 font-semibold">{data.role}</p>
                        <p className="mt-2 text-slate-700 mb-0">{data.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

    </section>
  )
}