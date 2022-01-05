<template>
    <div class="hello">
        <h1>home</h1>
        <h1 @click="getLineInfo()">login</h1>
        <h1>{{ profile.userId }}</h1>
        <h1>logout</h1>
        <router-link to="/lineInfo">
            <button>Line Info</button>
        </router-link>
    </div>
</template>

<script>
import liff from '@line/liff';
export default {
    name: 'Home',
    data() {
        return {
            profile: {
                userId: ""
            }
        }
    },
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
                            this.profile.userId = profile.userId
                            console.log(profile.userId)
                        }).catch((err) => {
                            console.log('error', err);
                        });
                } else {
                    liff.login();
                }
            });
        },
        logout() {
            if (liff.isLoggedIn()) {
                liff.logout();
                window.location.reload();
            }
        }
    }
}
</script>