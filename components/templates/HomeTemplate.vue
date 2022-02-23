<template>
  <div class="home-template">
    <div class="wrapper">
      <Header />
      <TodoCreation />
      <TodoList />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-template {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom right, #ff9900, #47bfe7);
  overflow: hidden;
  display: grid;
  align-items: center;
  justify-items: center;
  .wrapper {
    width: calc(80% - 6rem);
    height: calc(80% - 6rem);
    padding: 3rem;
    max-width: 32rem;
    background: white;
    border-radius: 3rem;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.4);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content max-content 1fr;
    gap: 2rem 5rem;
    @include screen("small") {
      width: calc(100% - 4rem);
      height: calc(100% - 4rem);
      max-width: 100%;
      border-radius: 0;
      box-shadow: none;
    }
  }
}
</style>