<template>
    <div>
        <div class="cart-container">
            <div class="cart">
                <div class="cart-title">
                    <h1>CART</h1>
                    <button @click="toggle">Close</button>
                </div>
                <div class="cart-body">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>icon..</td>
                                <td>Carrots</td>
                                <td>$1.00</td>
                                <td>{{ cart.carrots }}</td>
                                <td>${{ cartTotal }}</td>
                                <td>
                                    <button>x</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <span><strong>Total:</strong>${{cartTotal}}</span>
                        <button>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBar',

    data(){
        return {
            
        }
    },
    methods:{
        
    }, 
    props: ['toggle', 'cart'],
    computed: {
        cartTotal() {
            return (this.cart.carrots * 4.82).toFixed(2)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart-title *{
    display: inline-block;
}
.cart-title button{
    float: right;
}
.cart-container{
    margin-top: 20px;
    background: black;
    color: yellowgreen;
    display: flex;
    justify-content: right;
    width: fit-content;
}

.cart-body *{
    padding: 10px;
}
</style>