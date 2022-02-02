<template>
    <div class="loader"></div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .loader{
        width : 70px;
        height: 70px;
        border: 3px solid #1e77c0;
        border-radius: 50%;
        display: inline-block;
        position: absolute;
        left: 50%;
        -webkit-animation: rotation 1s linear infinite;
        animation: rotation 1s linear infinite;
        &:after {
            content: '';
            position: absolute;
            left: 50%;
            margin: auto;
            top: 50%;
            transform: translate(-50% , -50%);
            width:  78px;
            height:  78px;
            border-radius: 50%;
            border: 3px solid transparent;
            border-bottom-color: #FF3D00;
        }
    }

    @keyframes rotation {
        0% { transform: rotate(0deg) }
        100% { transform: rotate(360deg) }
    }
</style>