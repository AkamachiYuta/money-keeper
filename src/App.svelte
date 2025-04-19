<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Header from "./components/Header.svelte";
  import DashBoard from "./pages/Dashboard.svelte";
  import Settings from "./pages/Settings.svelte";
  import About from "./pages/About.svelte";
</script>

<div>
  <Router>
    <Header />
    <main class="responsive">
      <div class="large-space"></div>
      <Route path="/">
        <!-- ダッシュボード -->
        <DashBoard />
      </Route>
      <!-- 設定ページ -->
      <Route path="/settings">
        <Settings />
      </Route>
      <!-- このアプリについて -->
      <Route path="/about">
        <About />
      </Route>
      <!-- <Route path="/*" component={NotFound} /> -->
    </main>
  </Router>
</div>
