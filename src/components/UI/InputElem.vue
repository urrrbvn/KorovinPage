<template>
    <div class="input">
        <input type="text" 
        :placeholder="title" 
        :value="modelVal" 
        @input="$emit('update:modelVal', $event.target.value)"
        >
        <span class="err" v-for="error in errors">{{ error.$message }}</span>
    </div>
</template>

<script setup>




    import { defineProps } from 'vue';

    const props = defineProps({
        title: String,
        modelVal: String,
        errors: Array,
    })
</script>

<style scoped lang="scss">
@import '../../stylings/variables.scss';
    input{
        border: none;
        border-bottom: 1px solid black;
        @include adaptWidth(333);
        font-size: 20px;
        font-weight: 400;
        line-height: 24.2px;
    }
</style>