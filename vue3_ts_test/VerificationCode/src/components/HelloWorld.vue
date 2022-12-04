<template>
  <div class="container">
    <div class="box"></div>
    <div class="container-forms">
      <div class="container-info">
        <div class="info-item">
          <div class="table">
            <div class="table-cell">
              <p>Have an account?</p>
              <div class="btn" @click="sign">Log in</div>
            </div>
          </div>
        </div>
        <div class="info-item">
          <div class="table">
            <div class="table-cell">
              <p>Don't have an account?</p>
              <div class="btn" @click="sign">Sign up</div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-form">
        <img src="../assets/img/login.png" class="login" />
        <div class="form-item log-in">
          <div class="table">
            <div class="table-cell">
              <div class="input">
                <img src="../assets/img/login.png" class="img" />
                <input
                  name="Username"
                  placeholder="Username"
                  type="text"
                  id="usernameL"
                />
              </div>
              <div class="input">
                <img src="../assets/img/passwd.png" class="img" />
                <input
                  name="Password"
                  placeholder="Password"
                  type="Password"
                  id="passwdL"
                  @keyup.enter="register"
                />
              </div>
              <div class="btn" id="login" @click="register">Log in</div>
            </div>
          </div>
        </div>
        <div class="form-item sign-up">
          <div class="table">
            <div class="table-cell">
              <div class="input">
                <img src="../assets/img/email.png" class="img" />
                <input name="email" placeholder="Email" type="text" />
              </div>
              <!-- <input name="fullName" placeholder="Full Name" type="text" /> -->
              <div class="input">
                <img src="../assets/img/login.png" class="img" />
                <input
                  name="Username"
                  placeholder="Username"
                  type="text"
                  id="usernameR"
                />
              </div>
              <div class="input">
                <img src="../assets/img/passwd.png" class="img" />
                <input
                  name="Password"
                  placeholder="Password"
                  type="Password"
                  id="passwdR"
                  @keyup.enter="login"
                />
              </div>
              <div class="btn" id="register" @click="login">Sign up</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import axios from "axios";
import TCaptcha from "../js/TCaptcha.js";
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    sign() {
      $(".container").toggleClass("log-in");
    },
    login() {
      this.$options.methods.send("register");
    },
    register() {
      this.$options.methods.send("login");
    },
    send(Way) {
      try {
        let captcha = new TencentCaptcha("199884704", callback, {});
        captcha.show();
      } catch (error) {
        loadErrorCallback();
      }
      function callback(res) {
        if (res.ret === 0) {
          axiosWay(res, Way);
        }
      }
      function loadErrorCallback() {
        var appid = "";
        var ticket =
          "terror_1001_" + appid + Math.floor(new Date().getTime() / 1000);
        callback({
          ret: 0,
          randstr: "@" + Math.random().toString(36).substr(2),
          ticket: ticket,
          errorCode: 1001,
          errorMessage: "jsload_error",
        });
      }
      function axiosWay(Data, way) {
        let username;
        let passwd;
        if (way == "register") {
          username = $("#usernameR").val();
          passwd = $("#passwdR").val();
        } else {
          username = $("#usernameL").val();
          passwd = $("#passwdL").val();
        }
        if (username == "" && passwd == "") {
          alert("username and password can not be empty!");
          return;
        }
        if (username == "" && passwd != "") {
          alert("username can not be empty!");
          return;
        }
        if (username != "" && passwd == "") {
          alert("passwd can not be empty!");
          return;
        }
        let url = "http://43.142.36.176:8080/" + way;
        let data = null;
        if (way == "register") {
          data = JSON.stringify({
            username: username,
            passwd: passwd,
            randStr: Data.randstr,
            ticket: Data.ticket,
          });
        } else {
          data = JSON.stringify({
            username: username,
            passwd: passwd,
          });
        }
        axios({
          method: "POST",
          url: url,
          headers: { "Content-Type": "application/json; charset=utf-8" },
          data: data,
        }).then(
          (response) => {
            alert(response.data.msg);
            if (response.data.code == 200) {
              $(".container").addClass("active");
              setTimeout(() => {
                $(".container").removeClass("active");
              }, 3000);
            } else {
              $(".container").addClass("deactive");
              setTimeout(() => {
                setTimeout($(".container").removeClass("deactive"), 1000);
              }, 3000);
            }
          },
          (reject) => {
            console.log(reject);
          }
        );
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../style/style.css";
</style>
