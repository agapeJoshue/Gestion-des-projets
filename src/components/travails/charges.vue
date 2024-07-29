<script>
export default {
    props: ["titre","nombre", "classValue"]
}
</script>

<template lang="">
    <div class="card-charge">
        <div :class="classValue">
            <i class="ri-stop-large-fill"></i>
        </div>
        <div class="info">
            <h3 class="text-muted">{{ titre }}</h3>
            <h2>{{ nombre }}</h2>
        </div>
    </div>
</template>

<style scoped>
.card-charge {
    border: 1px solid var(--color-info-dark);
    border-radius: 7px;
    padding: 1rem;
    display: flex;
    gap: 10px;
}
h2 {
    font-size: 1.2rem;
    margin-top: 3px;
}
</style>