<template>
    <div class="hello">
        <h1>Line Info</h1>
        <h1>{{profile.userId}}</h1>
        <!-- <h1>{{profile.userId}}</h1> -->
        <router-link to="/home">
            <button>home</button>
        </router-link>
    </div>
</template>

<script>
import liff from '@line/liff';
export default {
  name: 'LineInfo',
  // components: {
  //   HelloWorld
  // }
  data() {
        return {
            profile : {
                userId : ""
            }
        }
    },
  beforeCreate() {
    liff.init({ liffId: "1656343498-pwzGanJe" }, () => {
      console.log("in liff init")
      console.log(liff.isLoggedIn())
      if (liff.isLoggedIn()) {
        liff.getProfile()
          .then(profile => {
              this.profile.userId=profile.userId
            console.log(profile.userId)
          }).catch((err) => {
            console.log('error', err);
          });
      } else {
        liff.login();
      }
    });
  }
}
</script>