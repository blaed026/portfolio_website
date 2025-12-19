<script setup></script>

<template>
  <div class="container">
    <div class="image">
      <img src="../assets/about-me.jpg" alt="image of me" />
    </div>

    <div class="text">
      <h1>Hi!</h1>

      <h2>Im Alex Blaede, A graphic design student at the University of Minnesota.</h2>
      <h3>
        As a child, I always loved doing anything creative. My oldest sister was going to art school
        in Chicago, so whenever she came back home, we would always color together. She got me
        really into doing arts and crafts, something that’s stayed with me my whole life. One of my
        favorite parts of being a design student is physically mocking up my projects, as it feels
        like a professional version of arts and crafts.
      </h3>

      <h3>
        I enjoy many subjects in graphic design, but one of my favorites is packaging. Since
        entering the graphic design program, I started noticing packaging (especially food-related)
        and thought it might be something I would enjoy doing. After taking a packaging class in the
        fall of 2025, I realized just how much I enjoyed it. My favorite project from that class was
        creating Wanderers, a fictional coffee brand with Minnesota roots, which you can view in my
        portfolio!
      </h3>

      <h3>
        I love talking to people in the industry; if you would like to chat, please feel free to
        reach out by email or LinkedIn!
      </h3>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: flex-start;
  gap: 40px; /* space between image & text */

  .text {
    text-align: left;
    margin-right: 40px;

    h1, h2 {
      color: #375f8a;
      text-align: left;
    }
  }
  img {
    max-width: 500px;
    width: 450px;
    flex-grow: 1;
    border-radius: 10px;
  }
}
@media (max-width: 1100px) {
  .container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

.text {
  text-align: center;
  margin: 0px 20px 0px 20px;

  h1, h2 {
  text-align: center;
  }
}
</style>
