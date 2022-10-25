<template>
    <div class="top-bar spread">
        <nav class="top-bar-nav">
            <a href="#" class="top-bar-link">
                <i class="icofont-spoon-and-fork"></i>
                <span>Home</span>
            </a>
            <a class="top-bar-link">
                <span>Favorites</span>
            </a>
        </nav>
            <a href="#" class="top-bar-cart-link">
                <font-awesome-icon class="font-icon" icon="shopping-cart"></font-awesome-icon>
                <span>Cart (0)</span>
            </a>
        </div>
        
</template>

<script>

</script>

<style scoped>
.top-bar{
    background: #79A206;
    color: #FFF8EA;
    font-size: 10px;
    width: 100%;
}
    

.top-bar-nav{
    display: inline-block;
}

.top-bar-link,
.top-bar-cart-link
    span{
        display: inline-block;
        border-right: 1px solid #FFF8EA;
        padding: 15px 19px;
        color: #FFF8EA;
        /* font-size: $fontSize; */
        font-size: 20px;
        text-decoration: none
    }
        
.top-bar-link{
    display: inline-block;
    text-decoration: none
}

.top-bar-link .font-icon{
    margin-left: 10px;
    color: #FFF8EA;
    font-size: 40px;
    text-decoration: none;
    vertical-align: -8px;
}  
.font-icon{
    font-size: 25px;
    margin-left: 10px;
    color: #FFF8EA;
    text-decoration: none;
    vertical-align: -2px;
}
.top-bar-link:first-of-type span{
    padding-left: 10px;
}
        
.top-bar-link:hover{
    background: #9ABA00;
}
.top-bar-cart-link{
    text-decoration: none;
    cursor: default;
}
.top-bar-cart-link   
    span{
        border: 0px;
        /* font-size: $fontSize; */
        font-size: 30px;
}
.top-bar-cart-link:hover span{
    text-decoration: underline;
}
.top-bar-cart-link:hover .font-icon{
    margin-right: -7px;
    color: #FFF8EA;
    font-size: 31px;
    text-decoration: none;
    vertical-align: -8px;
}
</style>