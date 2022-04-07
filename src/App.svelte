
<script lang="ts">
  const links = [{
    name: 'Instagram', link: 'https://www.instagram.com/KmanJP/'
  },{
    name: 'Twitter', link: 'https://twitter.com/Kman_JP'
  },{
    name: 'Twitch', link: 'https://www.twitch.tv/kmanjp'
  },{
    name: 'Blog', link: 'http://blog.kevinadu.com/'
  },{
    name: 'Photography', link: 'https://www.shutterstock.com/g/kevinadu?rid=197988622&utm_medium=email&utm_source=ctrbreferral-link'
  },
  {
    name: 'Soundcloud', link: 'https://soundcloud.com/kmanjp'
  },
  {
    name: 'Mixcloud', link: 'https://www.mixcloud.com/KmanJP/'
  }]
</script>

<main class="bg-gray-900 h-screen w-screen">
  <h1 class="pt-8 text-center text-4xl font-extrabold text-transparent uppercase tracking-tighest sm:text-5xl lg:text-7xl bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text">Kevin Adu</h1>
  <ul class="mx-auto mt-8 w-80">
    {#each links as {name, link}}
      <a href={link}>
        <li class="transition duration-300 ease-in-out mb-4 p-3 text-center border-2 border-white mt-1 max-w-2xl mx-auto text-xl font-medium text-white hover:text-orange-500 hover:no-underline hover:border-blue-900">{name}</li>
      </a>
    {/each}
  </ul>
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
