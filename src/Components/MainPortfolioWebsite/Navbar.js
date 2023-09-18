import React from 'react'

const Navbar = () => {
  return (
    <div>
         <nav class="py-16 animate-fade-in">
        <ul class="flex items-center justify-center gap-4">
          <a
            class="text-md duration-500 text-zinc-400 hover:text-zinc-300"
            href="/projects"
          >
            Free Tutorials
          </a>
          <a
            class="text-md duration-500 text-zinc-400 hover:text-zinc-300"
            href="/contact"
          >
            Contact
          </a>
          <a
            class="text-md duration-500 text-zinc-400 hover:text-zinc-300"
            href="/discord"
          >
            Discord
          </a>
          <a
            class="text-md duration-500 text-zinc-400 hover:text-zinc-300"
            href="/newsletter"
          >
            Newsletter
          </a>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar