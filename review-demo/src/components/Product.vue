<template>
    <div>
        <table id="tableProduct">
            <tr v-if="product.type === sortPro">
                <td>
                        <font-awesome-icon :icon=product.icon></font-awesome-icon>
                </td>
                <td>
                    {{product.name}}
                </td>
                <td>
                    {{product.type}}
                </td>
                <td>
                    {{product.price}}
                </td>
                <td>
                    <input type="text">
                </td>
                <td>
                    <button class="addToCArt">Add</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default{
    name: "Product",
    props: ["product", "sortPro"],
}
</script>

<style scoped>
    #tableProduct {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
        table-layout: fixed;
    }

    #tableProduct td {
        border: 1px solid #ddd;
        padding: 8px;
    }

    #tableProduct tr:nth-child(even){background-color: #f2f2f2;}

    #tableProduct tr:hover {background-color: #ddd;}
    
    .addToCArt{
        padding: 10px 20px;
    }
</style>