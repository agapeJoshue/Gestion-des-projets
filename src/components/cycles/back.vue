<template lang="">
    <div class="back">
        <router-link to="/plane/cycles">
            <i class="ri-arrow-left-circle-line"></i>
            <span class="text">retour dans le menu</span>
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
}
i{
    font-size: 1.3rem;
}
</style>