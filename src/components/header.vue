<template>
    <div class="header">
        <figure>
            <RouterLink to="/"><img src="../assets/Group 16.svg"></RouterLink>
        </figure>
        <nav>
            <ul>
                <RouterLink to="/about"><li>ABOUT</li></RouterLink>
                <RouterLink to="/works"><li>WORKS</li></RouterLink>
                <RouterLink to="/journal"><li>JOURNAL</li></RouterLink>
                <RouterLink to="/call"><li>CALL</li></RouterLink>
            </ul>
        </nav>
        <div class="buttons">
            <button id="login" @click="showModal($event.target.id)" >Login</button>
            <button id="register" @click="showModal($event.target.id)" >Register</button>
        </div>
    </div>
    <Modal :status="modalStatus" ></Modal>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import Modal from './UI/Modal.vue';
import { ref } from 'vue';

const modalStatus = ref('hidden')

function showModal(e){
    // console.log(e);
    if(e == 'login'){
        modalStatus.value = 'login'
    }else if(e == 'register'){
        modalStatus.value = 'register'
    }
}

</script>

<style lang="scss">
@import '../stylings/variables.scss';
    .header{
        @include flexRow();
        height: 83px;
        border-bottom: 1px solid black;
        figure{
            @include adaptWidth(288);
            display: flex;
            align-items: center;
            justify-content: center;
            border-right: 1px solid black;
        }
        nav{
            @include adaptWidth(791);
            @include flexRow();
            @include centerItems();
            padding: 0 62px;
            ul{
                @include flexRow();
                width: 100%;
                list-style-type: none;
                gap: 150px;
                a{
                    text-decoration: none;
                    color: black;
                    font-size: 15px;
                    font-weight: 400;
                    line-height: 18.15px;
                }
                a:hover{
                    text-shadow: 1px 1px 10px rgb(178, 178, 178);
                }
            }

        }
        .buttons{
            @include adaptWidth(350);
            height: 100%;
            button{
                width: 50%;
                height: 100%;
                border: none;
                border-left: 1px solid black;
            }
        }
    }

</style>