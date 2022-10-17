<template>

    <h2></h2>

</template>


<script type="text/javascript">
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"1247afd6211c42f93eb177d3ce256014c",
            "popupWidget":false,
            "automaticChatOpenOnNavigation":false, 
            "hidePostCTA":true, 
            "oneTimeRating": true, 
            "timeFormat24Hours": true,

            "onInit": function (){                
            window.KommunicateGlobal.document.querySelector(".mck-box-form.mck-row").style.visibility="hidden";
            window.KommunicateGlobal.querySelector(".mck-box-form.mck-row").style.display="none";
            }
          };
            kommunicateSettings.restartConversationByUser = true;
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s)
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
</script>


<style scoped>

</style>
