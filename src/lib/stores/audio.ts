import { writable } from "svelte/store";

interface Audio {
  name: string,
  audio: string,
  img: string,
  img_reveal: number
  ip_reveal: number
}

const audios = writable<Audio[]>([
  { name: "baobin.mp3", audio: "/baobin.mp3", img: "/baobin.png", ip_reveal: 2500, img_reveal: 0 },
  { name: "grass_skirt", audio: "/grass_skirt.mp3", img: "/grass_skirt.png", ip_reveal: 3000, img_reveal: 500 },
  { name: "the_return", audio: "/the_return.mp3", img: "/the_return.png", ip_reveal: 3000, img_reveal: 0 },
  { name: "memebrace", audio: "/memebrace.mp3", img: "/memebrace.png", ip_reveal: 3200, img_reveal: 0 },
  { name: "house", audio: "/house.mp3", img: "/house.png", ip_reveal: 2000, img_reveal: 0 },
]);

function random_number(): number {
  const random_number = Math.floor(Math.random() * 100);

  if(random_number > 0 && random_number < 20) {
    return 0;
  }

  else if(random_number > 19 && random_number < 40) {
    return 1;
  }

  else if(random_number > 39 && random_number < 60) {
    return 2;
  }

  else if(random_number > 59 && random_number < 80) {
    return 3;
  }

  else {
    return 4;
  }
}

export { audios, random_number };