<script>
export default {
    props: ["icon", "titre", "nombre"]
}
</script>

<template lang="">
    <div class="card-apercu">
        <div class="icon">
            <i :class="icon"></i>
        </div>
        <div class="info">
            <h3 class="text-muted">{{ titre }}</h3>
            <h2>{{ nombre }}</h2>
        </div>
    </div>
</template>

<style scoped>
.card-apercu {
    border: 1px solid var(--color-info-dark);
    border-radius: 7px;
    padding: 1.4rem;
    display: grid;
    grid-template-columns: 5rem auto;
    align-items: center;
}
.icon {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-light);
    color: var(--color-info-dark);
    width: 45px;
    height: 45px;
    border-radius: 5px;
}
h3 {
    margin-bottom: 5px;
}
h2 {
    color: var(--color-dark);
}
</style>