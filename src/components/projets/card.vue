<script>
export default {
    props: ["profile", "projectName"]
};
</script>

<template lang="">
    <router-link to="" class="card">
        <div class="card-header">
            <div class="project-info">
                <div class="info">
                    <div class="img">
                        <img src="../../assets/uploads/01-metiers-UX-UI-Design.jpg" alt="project-image">
                    </div>
                    <div class="name-project">
                        <h3>{{ projectName }}</h3>
                        <p>Bonjour</p>
                    </div>
                </div>
                <div class="note">
                    <span class="ri-star-line"></span>
                </div>
            </div>
        </div>
        <div class="card-body">
            <p>Plateforme de mise en relation entre architecte / entreprise et porteur de projet.</p>
        </div>
        <div class="card-footer">
            <div class="lists-membre">
                <span class="name-membre">M</span>
                <span class="name-membre">M</span>
                <span class="name-membre">M</span>
            </div>
            <router-link to="">
                <i class="ri-settings-3-fill"></i>
            </router-link>
        </div>
    </router-link>
</template>

<style scoped>
.card {
  border: 1px solid var(--color-info-dark);
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  transition: var(--tran-03);
}
.card:hover {
  border: 1px solid var(--color-info-light);
}
.card-header {
  position: relative;
  height: 140px;
  background: url(../../assets/uploads/1172748-developer-wallpaper-hd-2560x1440-for-full-hd.jpg)
    no-repeat center / cover;
}
.project-info {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  bottom: 1rem;
}
.info {
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
}
.note {
  margin-right: 1.5rem;
  cursor: pointer;
}
.img {
  margin-left: 1rem;
  overflow: hidden;
  border-radius: 5px;
  background: var(--color-light);
}
img {
  width: 40px;
  height: 40px;
}
h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: #fff;
}
.note {
  padding: 5px;
  background: var(--color-light);
  color: #fff;
  border-radius: 5px;
}

.card-body {
  background: var(--color-white);
  padding: 1rem;
}
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
.lists-membre {
  display: flex;
  gap: 2px;
}
.lists-membre span {
  background: var(--color-primary);
  padding: 4px 6px;
  border-radius: 50%;
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
}
</style>