<template>
  <footer class="footer">
    <div class="container-fluid d-flex flex-wrap justify-content-between">
      <nav>
        <ul>
          <li>
            <router-link :to="{path:'/dashboard'}">Dashboard</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright d-flex flex-wrap">
        &copy; Coded with
        <i class="fa fa-heart heart"></i> by
        Sarun Suesuwan &nbsp;<a href="#">#600610777</a>&nbsp;
        View Code at &nbsp;<a href="https://github.com/TouchySarun/InsectMidtermProject">&nbsp; GitHub.com</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style>
</style>
