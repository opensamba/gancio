<template lang='pug'>
  b-modal(@show="$refs.email.focus()" :title='$t("Login")' hide-footer
    @hidden='$router.replace("/")' :visible='true')
    el-form
      span {{$t('login_explanation')}}
      el-input.mb-2(v-model='email' type='email' :placeholder='$t("Email")' autocomplete='email' ref='email')
        v-icon(name='user' slot='prepend')
      el-input.mb-2(v-model='password' type='password' :placeholder='$t("Password")')
        v-icon(name="lock" slot='prepend')
      el-button(plain type="success" icon='el-icon-arrow-right' @click='submit') {{$t('Login')}}
      router-link.float-right(to='/register')
        a {{$t('Not registered?')}}
</template>

<script>
import api from '@/api'
import { mapActions } from 'vuex'
import { log } from 'util';

export default {
  name: 'Login',
  data () {
    return {
      password: '',
      email: '',
    }
  },
  methods: {
    ...mapActions(['login']),
    async submit (e) {
      e.preventDefault()
      const user = await api.login(this.email, this.password)
      if (!user) {
        return;
      }
      this.login(user)
      this.email = this.password = ''
      this.$router.go(-1)
    }
  }
}
</script>
