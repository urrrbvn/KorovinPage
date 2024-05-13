<template>
    <div class="intro-block">
        <div class="intro-item1">
            <p>Studied to be a biologist. Dropped out in the second year. 
I have not worked anywhere for several years. And accidentally opened the world of photography.</p>
        </div>
        <div class="intro-item2">
            <img src="../assets/serj-tyaglovsky-9Kedw8LmSNI-unsplash 2.png" width="100%" height="100%">
        </div>
        <div class="intro-item3">
            <div class="content">
                <p>New photosession</p>
                <img src="../assets/Arrow 7.svg" height="13px" width="13px">
            </div>
        </div>
        <div class="intro-item4"></div>
    </div>
    <div class="text-block">
        <h1>Creation <img src="../assets/Arrow 7.svg" height="30px" width="30px"></h1>
        <p>
            I try to approach my work as creatively as possible. I go through <br> my old pictures, combine them into something unusual. Most often, <br> before a photo session, I go to exhibitions of great artists. I come <br> to the set before everyone else. I smoke three cigarettes and drink <br> a glass of good whiskey. At this time I fantasize.
        </p>
    </div>
    <div :class="{'offers-block default': !offersStore.moreIsActive, 'offers-block expanded' : offersStore.moreIsActive}">
        <div class="options">
            <div class="option" v-for="offer in offersStore.offersSlice" :id="offer.id">
                <p>{{ offer.title }}</p>
                <div class="option-info">
                    <p>$ {{ offer.price }}</p>
                    <img src="../assets/Arrow 7.svg">
                </div>
            </div>
            <div :class="{'read-more inactive option': !readMoreIsActive, 'option read-more active': readMoreIsActive}"  @click='readMoreHandler()' >
                <p>Read-more...</p>
            </div>
        </div>
        <div class="image">
            <img src="../assets/nastya-maxymova-K-7ISzYIQsY-unsplash.png">
        </div>
    </div>
    <div class="text-block">
        <h1>Photosession<img src="../assets/Arrow 7.svg" height="30px" width="30px"></h1>
        <p>
            Order a photo session. You will have an unforgettable <br> experience. I will do the most creative work for you. <br>
            Most often, before a photo session, I go to exhibitions <br> of great artists. I come to the set before everyone else.
        </p>
    </div>

</template>

<script setup>
import { ref } from 'vue'
import { useOffersStore } from '@/stores/OffersStore';

const offersStore = useOffersStore()
const readMoreIsActive = ref(false)


const readMoreHandler = ()=>{
    setTimeout(()=>{
        offersStore.changeMoreState()
    },[200])
    readMoreIsActive.value = !readMoreIsActive.value
}

</script>

<style lang="scss">
@import "../stylings/variables.scss";
    .active{
        opacity: 0;
        // display: none;
        transition: opacity 0.5s ease;
    }
    .inactive{
        opacity: 50%;
        display: flex;
        transition: opacity 0.5s ease;
    }
    .default{
        height: 969px;
        transition: height 1.5s ease;
    }
    .expanded{
        height: 1130.5px;
        transition: height 1.5s ease;
    }
    .intro-block{
        width: 100%;
        display: grid;
        grid-template-columns:calc(605/1429)*100% calc(824/1429)*100%;
        grid-template-rows: 618px 268px;
        border-bottom: 1px solid black;
        .intro-item1{
            border-right: 1px solid black;
            border-bottom: 1px solid black;
            @include flexCol();
            font-size: 15px;
            line-height: 18.15px;
            letter-spacing: 0.1em;
            text-align: left;
            justify-content: end;
            padding: 25px;
            // padding-right: 53px;
        }
        .intro-item3{
            @include flexCol();
            justify-content: end;
            border-right: 1px solid black;

        }
        .content{
            @include flexRow();
            gap: 12px;
            align-items: center;
            padding-bottom: 20px;
            padding-left: 26px;
            
            p{
                font-weight: 400;
                font-size: 21px;
                line-height: 25.41px;
            }
        }
    }   
    .text-block{
        @include flexCol();
        justify-content: center;

        gap: 30px;

        height: 700px;
        width: 100%;

        border-bottom: 1px solid black;
        h1{
            font-weight: 500;
            font-size: 50px;
            line-height: 60.51px;
            letter-spacing: 0.1rem;
            margin-left: calc(128/1440)*100%;
        }
        p{
            @include adaptWidth(957);
            margin-left: calc(128/1440)*100%;
            font-weight: 400;
            font-size: 25px;
            line-height: 30.26px;
            letter-spacing: 0.1rem;
        }
    }
    .offers-block{
        @include flexRow();
        overflow-y: hidden;
        border-bottom: 1px solid black;
        .options{
            @include adaptWidth(366);
            display: grid;
            grid-auto-rows: 161.5px;
            border-right: 1px solid black;
            .option{
                width: 100%;
                border-bottom: 1px solid black;
                
                @include flexCol();

                gap: 27px;
                padding: 18px 33px 27px 19px;

                font-size: 21px;
                font-weight: 400;
                line-height: 30.26px;
                letter-spacing: 0.1rem;
                .option-info{
                    display: flex;
                    justify-content: space-between;
                }
            }
            .read-more{
                display: flex;
                @include centerItems();
                text-align: center
            }
        }
        .image{
            @include flexCol();
            @include centerItems();
            width: 74%;
            border-bottom: 1px solid black;
        }
    }
</style>