<script>
export default {
  props: ["datas"],
};
</script>

<template lang="">
    <div class="table">
        <ul class="theader">
            <li>Questions</li>
            <li></li>
            <li>
                <i class="ri-focus-line"></i>
                <span>Etat</span>
            </li>
            <li>
                <i class="ri-bar-chart-fill"></i>
                <span>Priorité</span>
            </li>
            <li>
                <i class="ri-group-line"></i>
                <span>Cessionnaires</span>
            </li>
            <li>
                <i class="ri-price-tag-3-line"></i>
                <span>Etiquettes</span>
            </li>
        </ul>
    </div>
    <div class="tableContent">
      <router-link to="">
        <ul class="tbody" v-if="datas.length > 0" v-for="(item, index) in datas" :key="index">
            <li>{{ item.numero }}</li>
            <li class="info">{{ item.question }}</li>
            <li>{{ item.etat }}</li>
            <li>{{ item.priorite }}</li>
            <li>{{ item.cessionnaires }}</li>
            <li>
                <span>{{ item.Etiquettes }}</span>
                <i class="ri-arrow-drop-right-line"></i>
            </li>
        </ul>
      </router-link>
    </div>
</template>

<style scoped>
.table,
.tableContent {
  padding: 0 1rem;
}
.tableContent {
  max-height: 78vh;
  overflow: overlay;
  padding-bottom: 1rem;
}
.tableContent::-webkit-scrollbar{
width: 0;
}

.theader,
.tbody {
  margin-top: 10px;
  margin-bottom: 8px;
  display: grid;
  align-items: center;
  grid-template-columns: 10% 30% 15% 15% 15% 15%;
  border-radius: 5px;
  background: var(--color-white);
  cursor: pointer;
  transition: var(--tran-02);
}
.theader li {
  padding: 1.2rem;
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 600;
}
.theader li {
  color: var(--color-info-dark);
}
.dark .theader li {
  color: var(--color-info-dark);
}
.tbody:hover {
  background: var(--color-light);
}
.tbody li {
  font-weight: 600;
  padding: 1rem;
  color: var(--color-info-dark);
}
.tbody li.info {
  color: var(--color-dark-variant);
}
li {
  border-right: 1px solid var(--color-light);
}
li:first-child,
li:last-child {
  border: none;
}
.tbody li:last-child {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tbody li:last-child i {
  font-size: 1.5rem;
}
</style>