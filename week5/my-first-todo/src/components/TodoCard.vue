<template>
    <div>
        <h1>{{title}}</h1>
        <h4>{{duration}}</h4>
        <p>{{person}}</p>
    </div>
    
</template>

<script>
export default {
    props: ['title', 'duration', 'person']
}
</script>

<style scoped>

</style>



