<template>
    <div class="main">
        <!-- s1 conatiner -->
        <div class="s1">
            <router-link to="/dump">
                <img src="../assets/s1.png" alt="s1image">
            </router-link>
        </div>

        <!-- s2 conatiner -->
        <div class="s2">
            <img src="../assets/s2.png" alt="s2img">
        </div>

        <!-- s3 conatiner -->
        <div class="s3">
            <div class="box red">
                <img src="../assets/axis.jpg" alt="" style="width:50px;">
                <img src="../assets/sbi card.jpg" alt="" style="width:50px;">
                <div class="b-text">
                    <h1>FLAT 7.5% Cashback</h1>
                    <h3>With FlipCart Axis Bank & SBI Creit cards</h3>
                </div>
            </div>
            <div class="box green">
                <h1>10% Instanct Discount</h1>
                <img src="../assets/canara.jpg" alt="" style="width:50px;">
                <img src="../assets/hdfc.jpg" alt="" style="width:50px;">
            </div>
        </div>

        <!-- s22 container -->
        <div class="s22">
            <img src="../assets/s22.png" alt="s22img">
        </div>

        <!-- s4 conatianer  -->
        <div class="s4">
            <!-- card -->
            <div v-for="product in data" :key="product.id" class="card">
                <div class="card-top">
                    <img :src="product.image" :alt="product.title"
                        style="width: 100%; height: 200px; ;" />
                </div>
                <div class="card-bottom">
                    <h3>{{ product.category }}</h3>
                    <h3>40% to 50% Off</h3>
                </div>
            </div>

        </div>

        <!--s5 conatiner  -->
        <div class="s5">
            <img src="../assets/s5.png" alt="s5img">
        </div>

        <!-- s6 conatiner -->
        <div class="s6">

            <div v-if="data.length === 0" style="text-align: center; margin: 50px;">Loading...</div>
            <!-- <div v-else style="display: flex; flex-wrap: wrap; gap: 20px; margin: 50px;"> -->
            <div v-for="product in data" :key="product.id" class="card">
                <div class="card-top">
                    <img :src="product.image" :alt="product.title"
                        style="width: 100%; height: 200px; " />
                </div>
                <div class="card-bottom">
                    <!-- <h2>{{ product.title }}</h2> -->
                    <h3 style="text-align: center;">{{ product.category }}</h3>
                    <h3>Shop Now</h3>
                </div>
            </div>
        </div>

        <!-- s7 -->
         <div class="s7">
            <img src="../assets/s7.png" alt="s7image">
         </div>
    </div>
    
</template>
<style>
.main {
    margin: 50px;
}

.s1 {
    margin-top: 50px;
    padding: 0px 50px;
    margin-bottom: 10px;
}

.s1 img {
    width: 100%;
    height: auto;
    display: block;
}
.s5 img {
    width: 100%;
    height: auto;
    display: block;
}

/* .s2{
    
    border: 2px solid green;
} */

.s2 img {
    width: 100%;
    height: auto;
    display: block;
}

.s3 {
    height: 100px;
    border: 2px solid #F6D5DD;
    margin: 0px 20px;
    border-radius: 30px;
    position: relative;
}


.box {
    height: 100px;
    width: 80%;
    position: absolute;
    opacity: 0;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
}

.box h1 {
    color: #282C3F;
    font-size: 30px;
    text-align: center;
    place-content: center;
}

.box h3 {
    color: grey;
}

/* Red box */
.red {

    animation: showRed 2s infinite;
}

.green {
    animation: showGreen 2s infinite;
}

/* Animations */
@keyframes showRed {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 1;
    }

    51% {
        opacity: 0;
    }

    100% {
        opacity: 0;
    }
}

@keyframes showGreen {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 0;
    }

    51% {
        opacity: 1;
    }

    100% {
        opacity: 1;
    }
}

.s4 {
    display: grid;
    grid-template-rows: 1fr;
    grid-auto-flow: column;
    overflow-x: scroll;
    gap: 20px;
    padding: 20px;
    
}

.s4 .card {
    width: 200px;
    gap: 10px;
    background-color: #f5f5f5;
    color:#282C3F;
    padding: 1px;
    
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
   
}
.s4 .card-top{
    background-color: #f5f5f5;
}
.card:hover{
    scale: 1.1;
}

.card-top {
    background-color: #d80d0d;
    padding: 6px;
}
.s4 .card-bottom{
    background-color:#282C3F
;
}
.s4 .card-bottom h3{
    color: #f5f5f5;
    text-align: center;
    align-items: center;
    font-weight: bold;
}


.s5 {
    height: 100px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
}

.s6 {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
    place-items: center;
    align-items: center;
}
.s6 .card {
    width: 180px;
    display: flex;
    flex-direction: column;
    border: 1px solid #282C3F;
    gap: 5px;
    background-color: #C5001B;
    color: #fff;
    padding: 5px;
    border-radius: 3px;
    cursor: pointer;
}

.card-top {
    background-color: #fff;
    padding: 5px;
}

.card-bottom {
    text-align: center;
    /* align-items: left; */
}



.s22 {
    margin-bottom: 20px;
}

.s22 img {
    width: 100%;
    height: auto;
    display: block;
}

.s7{
    margin-left: 50px;
}

.s7 img {
    width: 100%;
    height: auto;
    display: block;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .main {
        margin: 30px;
    }

    .s1 {
        padding: 0px 20px;
    }

    .s3 {
        margin: 0px 10px;
    }

    .s6 {
        grid-template-columns: repeat(4, 1fr);
    }

    .s7 {
        margin-left: 30px;
    }
}

@media (max-width: 768px) {
    .main {
        margin: 20px;
    }

    .s1 {
        margin-top: 30px;
        padding: 0px;
        margin-bottom: 10px;
    }

    .s3 {
        height: 80px;
        margin: 0px;
        border-radius: 20px;
    }

    .box {
        width: 90%;
    }

    .box h1 {
        font-size: 18px;
    }

    .box h3 {
        font-size: 12px;
    }

    .s4 {
        padding: 15px 10px;
        gap: 15px;
    }

    .s4 .card {
        width: 160px;
    }

    .s5 {
        margin: 15px 0px;
    }

    .s6 {
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
        padding: 0px 10px;
    }

    .s6 .card {
        width: 100%;
    }

    .s7 {
        margin-left: 0px;
    }
}

@media (max-width: 480px) {
    .main {
        margin: 15px;
    }

    .s1 {
        margin-top: 20px;
        padding: 0px;
    }

    .s3 {
        height: 70px;
        margin: 0px;
    }

    .box {
        width: 95%;
        gap: 5px;
    }

    .box h1 {
        font-size: 14px;
    }

    .box h3 {
        font-size: 10px;
    }

    .box img {
        width: 30px !important;
    }

    .s4 {
        grid-auto-flow: column;
        overflow-x: scroll;
        padding: 10px 5px;
        gap: 10px;
    }

    .s4 .card {
        width: 140px;
        flex-shrink: 0;
    }

    .s6 {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    .s6 .card {
        width: 100%;
        font-size: 12px;
    }

    .card-top {
        padding: 4px;
    }

    .card-bottom h3 {
        font-size: 12px;
    }
}
</style>


<script>
export default {
    data() {
        return {
            data: []
        }
    },
    mounted() {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                this.data = data;
                console.log(data);
            });
    }
}
</script>
