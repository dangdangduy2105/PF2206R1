<template>
    <div>
        <section id="recommened">
           <div class="cart-container">
                <div class="card">
                    <div class="card-title">
                    Carrots
                    </div>
                    <div class="card-body">
                        <i class="icofont-10x icofont-carrot"></i>
                        <form>
                            <div class="row">
                            <div class="cell">
                                <label>Type:</label>
                            </div>
                            <div class="cell">
                                <em>Vegetable</em>
                            </div>
                            </div>
                            <div class="row">
                            <div class="cell">
                                <label>Price:</label>
                            </div>
                            <div class="cell">
                                $4.82
                            </div>
                            </div>
                            <div class="row">
                            <div class="cell">
                                <label>Quantity:</label>
                            </div>
                            <div class="cell">
                                <input type="number" v-model.number="inventory.carrots">
                            </div>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-light" @click="addToCart('carrots')">Add to cart</button>
                    </div>
                </div>
           </div>
        </section>
        <button @click="toggleSideBar">Show</button>
        <SideBar v-if="showSideBar" :toggle="toggleSideBar" :cart="cart"/>
    </div>
</template>

<script>
import SideBar from './SideBar.vue'

export default {
    name: "MainPage",
    data() {
        return {
            inventory: {
                carrots: 10,
                Pineapple: 0,
                Cherries: 0,
            },
            cart: {
                carrots: 0,
                Pineapple: 0,
                Cherries: 0,
            },
            showSideBar: true,
        };
    },
    methods: {
        addToCart(type) {
            this.cart[type] += this.inventory[type];
            console.log(this.cart);
        }, 
        toggleSideBar (){
            this.showSideBar =! this.showSideBar
        },
    },
    components: { 
        SideBar 
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#recommened{
    width: fit-content;
}
.cart{
    border: 1px solid #000;
    width: max-content;
    text-align: center;
}
</style>