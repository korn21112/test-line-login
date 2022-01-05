<template>
    <div class="hello">
        <h1 @click="getLineInfo()">hello</h1>
    </div>
</template>

<script>
import liff from '@line/liff';
export default {
    name: 'Home',
    props: {
        msg: String
    },
//     beforeCreate() {
//     liff.init({ liffId: "1656343498-pwzGanJe" }, () => {
//       console.log("in liff init")
//       console.log(liff.isLoggedIn())
//       if (liff.isLoggedIn()) {
//         liff.getProfile()
//           .then(profile => {
//             console.log(profile.userId)
//           }).catch((err) => {
//             console.log('error', err);
//           });
//       } else {
//         liff.login();
//       }
//     });
//   },
    methods: {
        getLineInfo() {
            liff.init({ liffId: "1656343498-pwzGanJe" }, () => {
                console.log("in liff init")
                console.log(liff.isLoggedIn())
                if (liff.isLoggedIn()) {
                    liff.getProfile()
                        .then(profile => {
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
}
</script>