<template>
    <div class="list">
        <div 
            v-for="(language, index) in languages" 
            :key="index"
            @click="language.selected = ! language.selected"
            :class="{selected: language.selected}"
        >
            <span>{{language.name}}</span>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'TagSelector',
    data(){
        return {
            languages: [
                {name: 'PHP', selected: false},
                {name: 'javascript', selected: false},
                {name: 'HTML', selected: false},
                {name: 'CSS', selected: false},
                {name: 'Nodejs', selected: false},
                {name: 'Reactjs', selected: false},
                {name: 'Vues', selected: false},
            ], 
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list div{
    display: inline-block;
    border: 1px solid #ebebeb;
    padding: 4px 15px;
    margin-right: 5px;
    border-radius: 4px;
    cursor: pointer;
}
.list div.selected{
    background-color: lightblue;
    color: yellow;
}
</style>
  