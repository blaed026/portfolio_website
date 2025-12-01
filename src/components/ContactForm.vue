<script setup lang="ts">
</script>

<template>
  <div class="text">
    <h1>Lets stay in touch!</h1>
    <h3>
      Send a message here, whether you just want to say hello or would like to further discuss any
      items in my portfolio.
    </h3>
  </div>

  <form action="action_page.php" class="form">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="First Name" />

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Last Name" />

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Message"></textarea>

    <input type="submit" value="Submit" />
  </form>
</template>

<style scoped></style>
