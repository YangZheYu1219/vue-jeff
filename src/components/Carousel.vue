<template>
    <div id="app">
        <div class="slides">
            <transition-group tag="div" :name="transitionName" class="img-boxex" >
                <div v-for="(img, idx) of imgs" :key="idx" 
                     class="img-box" v-show="idx === showImg">
                    <img :src="img.src" />
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script>
let timer;
const autoPlayInterval = 2000;
	export default {
		data() {
    return {
        transitionName: "right-in",
        showImg: 0,
        imgsCount: 4,
        imgs: [
            { src: "https://picsum.photos/1500/600?random=1" },
            { src: "https://picsum.photos/1500/600?random=2" },
            { src: "https://picsum.photos/1500/600?random=3" },
            { src: "https://picsum.photos/1500/600?random=4" },
        ]
    };
},
mounted() {
    setInterval(this.setShowImg, autoPlayInterval);
},
methods: {
    setShowImg(changeIdx = 1) {
        switch (true) {
            case changeIdx === 1 && this.showImg === this.imgs.length - 1:
                this.showImg = 0;
                break;
            case changeIdx === -1 && this.showImg === 0:
                this.showImg = this.imgs.length - 1;
                break;
            default:
                this.showImg = this.showImg + changeIdx;
                break;
        }
    },
},
	}
</script>
<style>
#app {
	margin-top: 160px;
}

    .img-boxex {
        width: 100%;
        height: 400px;
        overflow: hidden;
        box-shadow: 0px 0px 10px rgb(0 0 0 / 50%);
	}

    .img-box {
		width: 100px;
		height: 100px;
		object-fit: cover;
		flex-shrink: 0;
	}

</style>