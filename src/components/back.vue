<script>
export default {
  props: ["ULR", "textAfficher"],
};
</script>

<template lang="">
    <div class="back">
        <router-link :to="ULR">
            <i class="ri-arrow-left-circle-line"></i>
            <span class="text">{{ textAfficher }}</span>
        </router-link>
    </div>
</template>

<style scoped>
.back {
  margin: 1rem;
}
a {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 8px 10px;
  width: 180px;
  border-radius: 7px;
  font-weight: 600;
  background: var(--color-white);
  color: var(--color-info-dark);
  transition: var(--tran-02);
}
a:hover {
  color: var(--color-primary);
}
i {
  font-size: 1.3rem;
}
</style>