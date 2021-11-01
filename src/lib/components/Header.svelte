<script lang="ts">
  import HamburgerIcon from "$lib/icons/HamburgerIcon.svelte";
  import YtLogo from "$lib/icons/YT-logo.svelte";

</script>

<header>
  <div class="header_icons">
    <HamburgerIcon />
    <YtLogo />
  </div>
  <div class="search">
    <input type="text" placeholder="Search" />
  </div>
  <div class="spacing"></div>
</header>

<style>
  header {
    background-color: rgba(33, 33, 33, 0.98);
    padding-top: 7.5px;
    padding-bottom: 7.5px;
    padding-left: 7.5px;

    display: flex;
    justify-content: space-between;
    flex: 1;
  }

  header div.header_icons {
    display: flex;
  }

  header div.spacing {
    width: clamp(0px, 100px, -100px);
  }

  div.search {
    width: 50%;
    height: 100%;

    margin: 0 auto;

    border: 1px solid white;

    margin: auto 0;

    display: flex;
    align-items: center;

    color: rgba(33, 33, 33, 0.98);
    border: 2.5px solid rgba(60, 60, 60, 0.98);
  }

  div.search input {
    width: 100%;
    height: 100%;

    padding: 8px;

    font-size: 14px;
    
    background-color: rgba(24, 24, 24, 0.98);
    color: whitesmoke;
    border: none;
    outline: none !important;
  }

  div.search input:active {
    outline: none !important;
    border: 2px;
  }
</style>