<template>
    <footer>
        <div class="item">
            <h1>Contacts</h1>
            <ul>
                <li>photo@korovin.com</li>
                <li>korovin.com</li>
                <li>0451 554 378</li>
            </ul>
        </div>
        <div class="item">
            <h1>Profession</h1>
            <ul>
                <li>stylist</li>
                <li>photographer</li>
            </ul>
        </div>
        <div class="item">
            <h1>Cities</h1>
            <ul>
                <li>Moscow</li>
                <li>Tokyo</li>
                <li>Barcelona</li>
            </ul>
        </div>
    </footer>
</template>

<script setup>

</script>

<style>
    footer{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        height: 329px;
        text-align: center;
        .item{
            border-right: 1px solid black;
            h1{
                border-bottom: 1px solid black;
                margin-top: 32px;
                padding-bottom: 32px;
                font-size: 30px;
                font-weight: 400;
                line-height: 36.31px;
                letter-spacing: 0.1rem;
            }
            ul{
                list-style: none;
                margin-top: 37px;
                li{
                    margin-bottom: 23px;
                }
            }
        }
    }
</style>