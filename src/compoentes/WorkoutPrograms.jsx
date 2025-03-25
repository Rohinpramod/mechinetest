import React from 'react'
const callouts = [
  {
    name: 'Weight Loss',
    description: 'weigth loss is simple and exersise make it easy',
    imageSrc: 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Running men',
    href: '#',
  },
  {
    name: 'Muscle Gain',
    description: 'You can gain muscles thround taking weights and protines',
    imageSrc: 'https://images.pexels.com/photos/4164648/pexels-photo-4164648.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Running men',
    href: '#',
  },
  {
    name: 'Yoga',
    description: 'Daily commute to do yoga make your mind fresh abd relaxed',
    imageSrc: 'https://images.pexels.com/photos/2529371/pexels-photo-2529371.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Running men',
    href: '#',
  },
]

const WorkoutPrograms = () => {
  return (
    <div className="bg-gray-00">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">PROGRAMS</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 ">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <img
                  alt={callout.imageAlt}
                  src={callout.imageSrc}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkoutPrograms