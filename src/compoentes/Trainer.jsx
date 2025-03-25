import React from 'react'

const callouts = [
  {
    name: 'sofia',
    specialization: 'weigth loss specialist',
    imageSrc: 'https://images.pexels.com/photos/6740047/pexels-photo-6740047.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'sofia photo',
    href: '#',
  },
  {
    name: 'Alex Philips',
    specialization: 'Muscle Gain Expert',
    imageSrc: 'https://images.pexels.com/photos/3912944/pexels-photo-3912944.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'alex photo',
    href: '#',
  },
  {
    name: 'Kati',
    specialization: 'Yoga Mentor',
    imageSrc: 'https://images.pexels.com/photos/6980993/pexels-photo-6980993.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'kati photo',
    href: '#',
  },
]

const Trainer = () => {
  return (
    <div className="bg-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">OUR TRAINERS</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <img
                  alt={callout.imageAlt}
                  src={callout.imageSrc}
                  className="w-full rounded-full bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout. specialization}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trainer