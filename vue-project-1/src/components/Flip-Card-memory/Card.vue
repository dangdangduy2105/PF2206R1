<template>
    <div class="card">
        <div class="card__inner" :class="{'is-flipped' : isFlipped}" @click="onflippedCard">
            <div class="card__face card__face--front">
                <div class="card__content">Front</div>
            </div>
            <div class="card__face card__face--back">
                <div class="card__content">Back</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                isFlipped: false
            }
        },
        methods: {
            onflippedCard(){
                this.isFlipped =! this.isFlipped
            }
        }
    }
</script>

<style scoped>
    .card{
        display: inline-block;
        margin-right: 1rem;
        margin-bottom: 1rem;
        width: 90px;
        height: 120px;
    }
    .card__inner{
        width: 100%;
        height: 100%;
        transition: 1s;
        transform-style: preserve-3d;
        cursor: pointer;
        position: relative;
    }
    .is-flipped{
        transform: rotateY(-180deg);
    }
    .card__face{
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        overflow: hidden;
        border-radius: 1rem;
        padding: 1rem;
        box-shadow: 0 3px 18px 3px rgba(0, 0, 0, 0.2);
    }
    .card__face--back{
        background-color: #f3f3f3;
        transform: rotateY(-180deg);
    }
    
    .card__face--front .card__content{
        background: url("@/assets/images/icon_back.png"), no-repeat;
    }
</style>