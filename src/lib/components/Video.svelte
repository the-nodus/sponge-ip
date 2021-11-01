<script lang="ts">
  import Yt from "$lib/icons/YT.svelte";
  import { onMount } from "svelte";
  import { bounceOut, quintOut } from "svelte/easing";
  import { audios, random_number } from "$lib/stores/audio"
  import { goto } from '$app/navigation';

  let ip: string = ""
  let video_start: number = 0;
  let img_show = false;
  let text_show = false;
  let curr_sel = { name: "baobin.mp3", audio: "/baobin.mp3", img: "/baobin", img_reveal: 1500, ip_reveal: 3000 };
  let rand = 0;

  onMount(() => {
    fetch('https://ifconfig.me/ip').then((res) => res.text()).then((text) => {
      ip = text;
    });

    rand = random_number();

    curr_sel = $audios[rand];
  });

  function onClick1() {
    if(ip && ip !== "") {
      setTimeout(() => {
        let audio = document.getElementById('audio') as HTMLAudioElement;
        audio.muted = false;
        audio.play();
      }, video_start);

      setTimeout(() => {
        img_show = true;
        setTimeout(() => text_show = true, curr_sel.ip_reveal);
      }, video_start + curr_sel.img_reveal);
    }
  }

  function flounder_animation(node, { duration = 2000 }) {
    return {
      duration, 
      css: (t) => {
        return `
          transform: scale(${t})
        `
      },
      easing: bounceOut
    }
  }

  function shrink_text(node, { duration = 2000 }) {
    return {
      duration, 
      css: (t) => {
        if(t < 0.5) {
          return `
            transform: scale(${(1 - t) * 10})
          `
        }

        else {
          return ``
        }
      },
      easing: quintOut
    }
  }

  function grow_spin(node, { duration = 2000 }) {
    return {
      duration, 
      css: (t) => {
        if(t < 0.5) {
          return `
            transform: rotate(${t * 800}deg) scale(${(t) * 0.25});
          `
        }

        else {
          return ``
        }
      },
      easing: quintOut
    }
  }
</script>

<audio id="audio" src={`${curr_sel.audio}`} muted></audio>
<div id="vd" on:click={() => !img_show ? onClick1() : {}} class="vd-bg">
  { #if img_show }
    <img transition:flounder_animation src={`${curr_sel.img}`} alt="Spongebob" />
    <div class="ip">
      { #if text_show }
        { #if rand % 2 !== 0 }
          <h3 in:shrink_text class="text-white">{ip}</h3>
        { :else }
          <h3 in:grow_spin class="text-white">{ip}</h3>
        { /if }
      { /if }
    </div>
  { :else }
    <Yt click={onClick1} />
  { /if }
</div>

<style>
  .vd-bg {
    user-select: none;

    background-color: black;
    width: 100%;
    min-height: 78vh;

    padding-bottom: 15px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }

  img {
    width: 40%;
    min-width: 450px;
  }

  div.ip {
    height: 50px;

    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text-white {
    color: red;
    font-size: 10vw;
    font-weight: 900;
    font-family: "Comic Sans MS", "Comic Sans", cursive;

    text-shadow: 0 1px 0 rgb(193, 0, 0), 0 2px 0 rgb(193, 0, 0),
                0 3px 0 rgb(193, 0, 0), 0 4px 0 rgb(193, 0, 0),
                0 5px 0 rgb(193, 0, 0), 0 6px 0 rgb(193, 0, 0),
                0 7px 0 rgb(193, 0, 0), 0 8px 0 rgb(193, 0, 0),
                0 9px 0 rgb(193, 0, 0), 0 10px 0 rgb(193, 0, 0),
                0 11px 0 rgb(193, 0, 0), 0 12px 0 rgb(193, 0, 0),
                0 20px 30px rgba(0, 0, 0, 0.5);
  }
</style>