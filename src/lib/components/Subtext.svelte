<script>
  import Like from "$lib/icons/Like.svelte";
  import Dislike from "$lib/icons/Dislike.svelte";
  import Share from "$lib/icons/Share.svelte";

  let date_obj = new Date();
  let date = `${date_obj.toLocaleString("en-US", { month: "long" })} ${date_obj.toLocaleString("en-US", { day : '2-digit'})}, ${date_obj.getFullYear()}`

</script>

<main>
  <h1 class="text-white">Spongebob IP</h1>
  <div class="sub">
    <h4>69,420 views • {date}</h4>
    <div class="right">
      <div class="icons">
        <Like />
        <Dislike />
        <div on:click={() => navigator.clipboard.writeText(window.location.href)}>
          <Share />
        </div>
      </div>
      <div class="white-line"></div>
    </div>
  </div>
  <div class="line">
    <hr />
  </div>
</main>

<style>
  main {
    padding-left: 1%;
  }

  main h1 {
    font-size: 18px;

    margin-top: 15px;
  }

  .text-white {
    color: white;
  }

  div.sub {
    width: 100%;

    color: rgb(170, 170, 170);

    margin-top: 10px;
    margin-left: 0.1%;
    padding-bottom: 2px;

    display: flex;
    justify-content: space-between;

    user-select: none;
  }

  div.sub h4 {
    font-size: 15px;
  }

  div.icons {
    width: 75%;

    display: flex;
    justify-content: flex-end;
    gap: 20px;

    margin-right: 55px;
    flex: 1;
  }

  div.line {
    width: 98%;
    padding-top: 1px;
  }

  hr {
    border: 0.25px solid rgba(169, 169, 169, 0.2);
  }

  div.white-line {
    position: absolute;
    padding-top: 8px;

    border-bottom: 3px solid white;
    width: clamp(125px, 8vw, 8vw);
  }
</style>