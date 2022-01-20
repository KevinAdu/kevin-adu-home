<script lang="ts">
	let name = 'world';
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
  }]
</script>

{#each links as {name, link}}
  <a href={link}>
    <p>{name}</p>
  </a>
{/each}