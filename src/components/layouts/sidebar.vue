<template>
  <div>
    <nav class="sidebar" :class="{ close: !sideBar_isOpen }">
      <header>
        <div class="image-text">
          <span class="image">
            <img src="../../assets/uploads/avatar.png" alt="logo" />
          </span>
          <div class="text header-text">
            <span class="name">Joshué Agapé</span>
            <span class="profession">web developer</span>
          </div>
        </div>
        <i class="ri-menu-fold-fill toggle" @click="toogleSidebar"></i>
      </header>
      <div class="menu-bar">
        <div class="menu">
          <ul class="menu-links">
            <li
              class="nav-link"
              :class="{ active: $route.path === '/plane/travail' }"
            >
              <router-link to="/plane/travail">
                <i class="ri-user-add-line icon"></i>
                <span class="text nav-text">Votre travail</span>
              </router-link>
            </li>
            <li
              class="nav-link"
              :class="{
                active: 
                $route.path === '/plane/projets' ||
                $route.path === '/plane/projets/ajouter'
              }"
            >
              <router-link to="/plane/projets">
                <i class="ri-briefcase-3-line icon"></i>
                <span class="text nav-text">Projets</span>
              </router-link>
            </li>
            <li
              class="nav-link"
              :class="{ active: $route.path === '/plane/affichages' }"
            >
              <router-link to="/plane/affichages">
                <i class="ri-stack-line icon"></i>
                <span class="text nav-text">Affichages</span>
              </router-link>
            </li>
            <li
              class="nav-link"
              :class="{
                active:
                  $route.path === '/plane/cycles' ||
                  $route.path ===
                    '/plane/cycles/Vue-de-10000-pieds-de-tous-les-cycles-actifs' ||
                  $route.path ===
                    '/plane/cycles/Obtenez-un-aperçu-de-chaque-cycle-actif' ||
                  $route.path === '/plane/cycles/Comparez-les-burndowns' ||
                  $route.path ===
                    '/plane/cycles/Identifiez-rapidement-les-problèmes-décisifs' ||
                  $route.path ===
                    '/plane/cycles/Zoomer-sur-les-cycles-qui-nécessitent-une-attention-particulière' ||
                  $route.path ===
                    '/plane/cycles/Garder-une-longueur-d-avance-sur-les-bloqueurs',
              }"
            >
              <router-link to="/plane/cycles">
                <i class="ri-contrast-line icon"></i>
                <span class="text nav-text">cycles</span>
              </router-link>
            </li>
            <li
              class="nav-link"
              :class="{ active: $route.path === '/plane/annalitics' }"
            >
              <router-link to="/plane/annalitics">
                <i class="ri-bar-chart-fill icon"></i>
                <span class="text nav-text">Annalitics</span>
              </router-link>
            </li>
          </ul>
        </div>

        <div class="bottom-content">
          <li class="" :class="{ activeP: $route.path === '/plane/profile' }">
            <router-link to="/plane/profile">
              <i class="ri-user-line icon"></i>
              <span class="text nav-text">Votre profile</span>
            </router-link>
          </li>
          <li class="mode">
            <div class="moon-sun">
              <i class="ri-moon-fill icon moon"></i>
              <i class="ri-sun-line icon sun"></i>
            </div>
            <span class="mode-text text nameTheme">{{ mode }}</span>
            <div class="toggle-switch" @click="toogleThemePage">
              <span class="switch"></span>
            </div>
          </li>
        </div>
      </div>
    </nav>

    <section class="section">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modeDark: false,
      theme: "Dark Mode",
      sideBar_isOpen: true,
    };
  },
  mounted() {
    this.getTheme();
    this.getThemeSideBar();
  },
  methods: {
    getThemeSideBar() {
      var themeSideBar = localStorage.getItem("themeSidebar");
      if (themeSideBar == "close") {
        this.sideBar_isOpen = false;
      }
    },

    toogleSidebar() {
      this.sideBar_isOpen = !this.sideBar_isOpen;
      var themeSidebar = localStorage.getItem("themeSidebar");
      if (themeSidebar == "close") {
        localStorage.setItem("themeSidebar", "open");
      } else {
        localStorage.setItem("themeSidebar", "close");
      }
    },

    getTheme() {
      var themePage = localStorage.getItem("classTheme");
      var themeName = localStorage.getItem("nameTheme");
      if (themePage != null) {
        document.body.className = themePage;
        if (themePage == "dark") {
          this.modeDark = true;
          this.theme = themeName;
        }
      }
    },

    setThemeName() {
      var themeName = localStorage.getItem("nameTheme");
      const baliseThemeName = document.querySelector(".nameTheme");
      baliseThemeName.innerText = themeName;
    },

    toogleThemePage() {
      this.modeDark = !this.modeDark;
      var themePage = localStorage.getItem("classTheme");
      if (themePage == "dark") {
        localStorage.setItem("classTheme", "light");
        localStorage.setItem("nameTheme", "Dark Mode");
      } else {
        localStorage.setItem("classTheme", "dark");
        localStorage.setItem("nameTheme", "Light Mode");
      }

      this.getTheme();
      this.setThemeName();
    },
  },
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  padding: 10px 14px;
  background: var(--color-white);
  transition: var(--tran-03);
  z-index: 100;
}
.sidebar.close {
  width: 88px;
}
.sidebar li {
  height: 40px;
  margin-top: 5px;
  list-style: none;
  display: flex;
  align-items: center;
}

.sidebar li .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  min-width: 60px;
  font-size: 20px;
  color: var(--color-info-dark);
}
.sidebar li a .text {
  font-size: 1rem;
  font-weight: 600;
}

.sidebar li a {
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 5px;
  align-items: center;
  transition: var(--tran-04);
}
.sidebar li.active a {
  background: var(--color-primary);
}

.sidebar li.active .icon,
.sidebar li.active .text,
.sidebar li.active a:hover .icon,
.sidebar li.active a:hover .text {
  color: var(--color-white);
}
.sidebar li a:hover .icon,
.sidebar li a:hover .text {
  color: var(--color-dark);
}

.sidebar li.activeP .text,
.sidebar li.activeP .icon,
.sidebar li a:hover .text,
.sidebar li a:hover .icon {
  color: var(--color-primary-variant);
}

body.dark .sidebar li.activeP .text,
body.dark .sidebar li.activeP .icon {
  color: var(--color-dark);
}

body.dark .sidebar li.active .icon,
body.dark .sidebar li.active .text,
body.dark .sidebar li a:hover .icon,
body.dark .sidebar li a:hover .text {
  color: var(--color-info-light);
}

.sidebar .text {
  font-size: 16px;
  font-weight: 500;
  color: var(--color-info-dark);
  transition: var(--tran-04);
  white-space: nowrap;
  opacity: 1;
}

.sidebar.close .text {
  opacity: 0;
}
.sidebar .image {
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar .image-text img {
  width: 40px;
  border-radius: 6px;
}
.sidebar .menu {
  margin-top: 2rem;
}
.sidebar header {
  position: relative;
}

.sidebar header .image-text {
  display: flex;
  align-items: center;
}

header .image-text .header-text {
  display: flex;
  flex-direction: column;
}

.header-text .name {
  font-weight: 600;
}

.header-text .profession {
  margin-top: -2px;
}
body.dark .sidebar header .toggle {
  color: var(--color-info-ligth);
}
.sidebar.close header .toggle {
  right: -30px;
  transform: translateY(-50%) rotate(180deg);
}
.sidebar header .toggle {
  position: absolute;
  font-size: 18px;
  top: 50%;
  right: -25px;
  width: 30px;
  height: 30px;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: var(--color-white);
  cursor: pointer;
  transform: translateY(-50%);
}

.sidebar .menu-bar {
  height: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.menu-bar .mode {
  position: relative;
  border-radius: 6px;
  background: var(--color-light);
}

.menu-bar .mode .moon-sun {
  height: 50px;
  width: 60px;
  display: flex;
  align-items: center;
}
.menu-bar .mode i {
  position: absolute;
  transition: var(--tran-03);
}
.menu-bar .mode i.sun {
  opacity: 0;
}
body.dark .menu-bar .mode i.sun {
  opacity: 1;
}
body.dark .menu-bar .mode i.moon {
  opacity: 0;
}
.menu-bar .mode .toggle-switch {
  position: absolute;
  right: 0;
  display: flex;
  height: 100%;
  width: 60px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: var(--color-light);
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
.toggle-switch .switch {
  position: relative;
  height: 22px;
  width: 44px;
  border-radius: 25px;
  background: var(--color-white);
}
.switch::before {
  content: "";
  position: absolute;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  background: var(--color-info-dark);
  transition: var(--tran-04);
}
.mode-text.text {
  font-size: 1rem;
  font-weight: 600;
}

body.dark .switch::before {
  left: 25px;
}

section {
  position: relative;
  left: 250px;
  height: 100vh;
  width: calc(100% - 250px);
  background: var(--color-background);
  transition: var(--tran-03);
}

.sidebar.close ~ .section {
  left: 88px;
  width: calc(100% - 88px);
}
</style>