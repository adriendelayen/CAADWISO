<template>

    <h2></h2>

</template>


<script>
export default {
    method: {

    },
    mounted() {
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"33fdbc7d8cb8fc574b7d8e16c5de0a210","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
    }
}
</script>


<style scoped>

</style>