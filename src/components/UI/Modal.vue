<template>
    <div class="opacityBlock" v-if="status !== 'hidden'"></div>
    <div class="modal" v-if="status == 'login'">
        <form action="">
            <inputElem 
            :title="'email'" 
            :modelVal="loginForm.email" @update:modelVal="val => loginForm.email = val" 
            :errors="v$.email.$errors"
            >
            </inputElem>
            <inputElem 
            :title="'password'"
            :modelVal="loginForm.password"
            @update:modelVal="val => loginForm.password = val"
            :errors="v$.password.$errors"
            >
            </inputElem>
            <div @click="submit()">test</div>
        </form>
    </div>
</template>

<script setup>
    import { computed, reactive, ref, watch } from 'vue';
    import inputElem from './InputElem.vue';
    import { useVuelidate } from '@vuelidate/core';
    import {required, email, minLength} from '@vuelidate/validators';

    const loginForm = reactive({
        email: '',
        password: ''
    })
    const loginRules = {
        email: {required, email},
        password: {required}
    }

    const regForm = {
        firstName: {required},
        lastName: {required},
        email: {required, email},
        password: {required, minLength: minLength(8), }
    }


    const v$ = computed(()=>{
        if(props.status == 'login'){
            return useVuelidate(loginRules, loginForm)
        }else if(props.status === 'register'){
            return
        }
    })

    watch(loginForm, () =>{
        
        // console.log(v$.value.email);
    })


    const submit = () =>{
        v$.value.$touch();
        console.log(v$.value)
    }

    const props = defineProps({
        status: String
    })
</script>

<style scoped lang="scss">
    @import '../../stylings/variables.scss';
    .opacityBlock{
        position: absolute;
        background-color:black;
        opacity: 30%;
        width: 100%;
        height: 3110px;
    }
    .modal{
        @include flexRow();
        width: 100%;
        height: 400px;
        justify-content: end;
        position: absolute;
        background-color: transparent;
        form{
            @include adaptWidth(824);
            height: 386px;
            background-color: #EBEBEB;
        }
    }
</style>